terraform {
  required_version = ">= 0.12"
}

# ------------------------------------------------------------------------------
# REQUIRED PARAMETERS
# These variables are expected to be passed in by the operator
# ------------------------------------------------------------------------------

variable "project_id" {
  description = "The project ID to host the site in."
  type        = string
}

variable "website_domain_name" {
  description = "The name of the website and the Cloud Storage bucket to create (e.g. static.foo.com)."
  type        = string
}

variable "create_dns_entry" {
  description = "If set to true, create a DNS CNAME Record in Cloud DNS with the domain name in var.website_domain_name."
  type        = bool
}

variable "dns_managed_zone_name" {
  description = "The name of the Cloud DNS Managed Zone in which to create the DNS CNAME Record specified in var.website_domain_name. Only used if var.create_dns_entry is true."
  type        = string
}

# ------------------------------------------------------------------------------
# OPTIONAL PARAMETERS
# These variables have defaults, but may be overridden by the operator.
# ------------------------------------------------------------------------------

variable "website_location" {
  description = "Location of the bucket that will store the static website. Once a bucket has been created, its location can't be changed. See https://cloud.google.com/storage/docs/bucket-locations"
  type        = string
  default     = "eu"
}

variable "website_storage_class" {
  description = "Storage class of the bucket that will store the static website"
  type        = string
  default     = "MULTI_REGIONAL"
}

variable "website_acls" {
  description = "Bucket default object ACLs to allow users access to objects, for example 'READER:allUsers'. See https://cloud.google.com/storage/docs/access-control/lists"
  type        = list(string)
  default     = ["READER:allUsers"]
}

variable "enable_versioning" {
  description = "Set to true to enable versioning. This means the website bucket will retain all old versions of all files. This is useful for backup purposes (e.g. you can rollback to an older version), but it may mean your bucket uses more storage."
  type        = bool
  default     = true
}

variable "source_dir" {
  description = "Website directory's source files on the local disk"
  type        = string
  default     = "./build"
}

variable "index_page" {
  description = "Bucket's directory index"
  type        = string
  default     = "index.html"
}

variable "not_found_page" {
  description = "The custom object to return when a requested resource is not found"
  type        = string
  default     = "404.html"
}

variable "enable_cors" {
  description = "Set to true if you want to enable CORS headers"
  type        = bool
  default     = true
}

variable "cors_origins" {
  description = "List of Origins eligible to receive CORS response headers. Note: '*' is permitted in the list of origins, and means 'any Origin'"
  type        = list(string)
  default     = ["*"]
}

variable "cors_methods" {
  description = "list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc). Note: '*' is permitted in the list of methods, and means 'any method'"
  type        = list(string)
  default     = ["GET"]
}

variable "cors_extra_headers" {
  description = "List of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains"
  type        = list(string)
  default     = []
}

variable "cors_max_age_seconds" {
  description = "The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses"
  type        = number
  default     = 600
}

variable "force_destroy_website" {
  description = "If set to true, this will force the delete of the website bucket when you run terraform destroy, even if there is still content in it. This is only meant for testing and should not be used in production."
  type        = bool
  default     = false
}

variable "force_destroy_access_logs_bucket" {
  description = "If set to true, this will force the delete of the access logs bucket when you run terraform destroy, even if there is still content in it. This is only meant for testing and should not be used in production."
  type        = bool
  default     = false
}

variable "access_logs_expiration_time_in_days" {
  description = "How many days to keep access logs around for before deleting them."
  type        = number
  default     = 30
}

variable "access_log_prefix" {
  description = "The object prefix for log objects. If it's not provided, it is set to the value of var.website_domain_name with dots are replaced with dashes, e.g. 'site-acme-com'."
  type        = string
  default     = ""
}

variable "website_kms_key_name" {
  description = "A Cloud KMS key that will be used to encrypt objects inserted into the website bucket. If empty, the contents will not be encrypted. You must pay attention to whether the crypto key is available in the location that this bucket is created in."
  type        = string
  default     = ""
}

variable "access_logs_kms_key_name" {
  description = "A Cloud KMS key that will be used to encrypt objects inserted into the access logs bucket. If empty, the contents will not be encrypted. You must pay attention to whether the crypto key is available in the location that this bucket is created in."
  type        = string
  default     = ""
}

variable "dns_record_ttl" {
  description = "The time-to-live for the site CNAME record set (seconds)"
  type        = number
  default     = 300
}

variable "custom_labels" {
  description = "A map of custom labels to apply to the resources. The key is the label name and the value is the label value."
  type        = map(string)
  default     = { "project": "dashboard" }
}

# ------------------------------------------------------------------------------
# INITIALIZE GCP APIS
# ------------------------------------------------------------------------------

provider "google" {
  project = "${var.project_id}"
  version = "2.18.1"
}

# ------------------------------------------------------------------------------
# PREPARE LOCALS
#
# NOTE: Due to limitations in terraform and heavy use of nested sub-blocks in the resource, we have to construct some of the configuration values dynamically
# ------------------------------------------------------------------------------

locals {
  # We have to use dashes instead of dots in the access log bucket, because that bucket is not a website
  website_domain_name_dashed = replace(var.website_domain_name, ".", "-")
  access_log_kms_keys        = var.access_logs_kms_key_name == "" ? [] : [var.access_logs_kms_key_name]
  website_kms_keys           = var.website_kms_key_name == "" ? [] : [var.website_kms_key_name]
}

# ------------------------------------------------------------------------------
# CREATE THE WEBSITE BUCKET
# ------------------------------------------------------------------------------

resource "google_storage_bucket" "website" {
  name          = var.website_domain_name
  location      = var.website_location
  storage_class = var.website_storage_class

  versioning {
    enabled = var.enable_versioning
  }

  website {
    main_page_suffix = var.index_page
    not_found_page   = var.not_found_page
  }

  dynamic "cors" {
    for_each = var.enable_cors ? ["cors"] : []
    content {
      origin          = var.cors_origins
      method          = var.cors_methods
      response_header = var.cors_extra_headers
      max_age_seconds = var.cors_max_age_seconds
    }
  }

  force_destroy = var.force_destroy_website

  dynamic "encryption" {
    for_each = local.website_kms_keys
    content {
      default_kms_key_name = encryption.value
    }
  }

  labels = var.custom_labels
  logging {
    log_bucket        = google_storage_bucket.access_logs.name
    log_object_prefix = var.access_log_prefix != "" ? var.access_log_prefix : local.website_domain_name_dashed
  }
}

# ------------------------------------------------------------------------------
# CONFIGURE BUCKET ACLS
# ------------------------------------------------------------------------------

resource "google_storage_default_object_acl" "website_acl" {
  bucket      = google_storage_bucket.website.name
  role_entity = var.website_acls
}

# ------------------------------------------------------------------------------
# CREATE A SEPARATE BUCKET TO STORE ACCESS LOGS
# ------------------------------------------------------------------------------

resource "google_storage_bucket" "access_logs" {
  # Use the dashed domain name
  name          = "${local.website_domain_name_dashed}-logs"
  location      = var.website_location
  storage_class = var.website_storage_class

  force_destroy = var.force_destroy_access_logs_bucket

  dynamic "encryption" {
    for_each = local.access_log_kms_keys
    content {
      default_kms_key_name = encryption.value
    }
  }

  lifecycle_rule {
    action {
      type = "Delete"
    }

    condition {
      age = var.access_logs_expiration_time_in_days
    }
  }
  labels = var.custom_labels
}

# ------------------------------------------------------------------------------
# GRANT WRITER ACCESS TO GOOGLE ANALYTICS
# ------------------------------------------------------------------------------

resource "google_storage_bucket_acl" "analytics_write" {
  bucket = google_storage_bucket.access_logs.name

  # The actual identity is 'cloud-storage-analytics@google.com', but we're required to prefix that with the type of identity
  role_entity = ["WRITER:group-cloud-storage-analytics@google.com"]
}

# ------------------------------------------------------------------------------
# CREATE OPTIONAL CNAME ENTRY IN CLOUD DNS
# ------------------------------------------------------------------------------

resource "google_dns_record_set" "cname" {
  count    = var.create_dns_entry ? 1 : 0

  depends_on = [google_storage_bucket.website]

  name         = "${var.website_domain_name}."
  managed_zone = var.dns_managed_zone_name
  type         = "CNAME"
  ttl          = var.dns_record_ttl
  rrdatas      = ["c.storage.googleapis.com."]
}

# ------------------------------------------------------------------------------
# CREATE WEBSITE CONTENT
# ------------------------------------------------------------------------------

resource "google_storage_bucket_object" "content" {
  for_each = fileset(path.module, "${var.source_dir}/*")

  name    = each.value
  source  = "${path.module}/${each.value}"
  bucket  = google_storage_bucket.website.name
}

# ------------------------------------------------------------------------------
# WEBSITE OUTPUTS
# ------------------------------------------------------------------------------

output "website_url" {
  description = "URL of the website"
  value       = var.create_dns_entry == "true" ? var.website_domain_name : format("storage.googleapis.com/%s", var.website_domain_name)
}

output "website_bucket" {
  description = "Self link to the website bucket"
  value       = google_storage_bucket.website.self_link
}

output "website_content" {
  value       = fileset(path.module, "${var.source_dir}/*")
}

output "access_logs_bucket" {
  description = "Self link to the access logs bucket"
  value       = google_storage_bucket.access_logs.self_link
}

output "website_bucket_name" {
  description = "Name of the website bucket"
  value       = google_storage_bucket.website.name
}

output "access_logs_bucket_name" {
  description = "Name of the access logs bucket"
  value       = google_storage_bucket.access_logs.name
}
