#!/bin/bash

##
## This script aims to push the previously built container to its repository. By default, it tag the build with the full tag ($CONTAINER_TAG, i.e. "1.7.2-20191113211021-921103d") and "latest". If the argument "stable" is specified, it also pushes with the short version tag ($CONTAINER_TAG_SHORT, i.e. "1.7.2") and the shorter one ($CONTAINER_TAG_SHORTER, i.e. "1.7"), usually applied as versions selectors in a daily usage & non-dev environments (i.e. "enterpriseflowsrepository/dashboard:1.7.2" or "enterpriseflowsrepository/dashboard:1.7").
##

# Get build type from the first argument
BUILD=$1

# Login to the container repository "hub.docker.com"
echo "$CONTAINER_PASSWORD" | docker login -u "$CONTAINER_USERNAME" --password-stdin

push_default

if [[ $BUILD == 'stable' ]]; then  
    push_stable
else
    echo 'Abort stable push, command line argument not provided'
fi

push_default() {
    echo "Will push the build \"$CONTAINER_NAME\" (tags: latest, $CONTAINER_TAG) to the container repository..."

    # Define tags
    echo
        "$CONTAINER_NAME:latest"
        "$CONTAINER_NAME:$CONTAINER_TAG"
            | xargs -n 1 docker tag $CONTAINER_NAME

    # Push the image
    echo
        "$CONTAINER_NAME:latest"
        "$CONTAINER_NAME:$CONTAINER_TAG"
            | xargs -n 1 docker push
}

push_stable() {
    echo "Will push the build \"$CONTAINER_NAME\" (tags: $CONTAINER_TAG_SHORT, $CONTAINER_TAG_SHORTER) to the container repository..."

    # Define tags
    echo
        "$CONTAINER_NAME:$CONTAINER_TAG_SHORT"
        "$CONTAINER_NAME:$CONTAINER_TAG_SHORTER"
            | xargs -n 1 docker tag $CONTAINER_NAME

    # Push the image
    echo
        "$CONTAINER_NAME:$CONTAINER_TAG_SHORT"
        "$CONTAINER_NAME:$CONTAINER_TAG_SHORTER"
            | xargs -n 1 docker push
}
