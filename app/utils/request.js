import axios from 'axios';
import http from 'http';
import https from 'https';

const axiosInstance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 20000,
  responseType: 'json',
  responseEncoding: 'utf8',
  validateStatus: status => status >= 200 && status < 300,
  maxRedirects: 0,
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
});

/**
 * Requests a URL, returning a promise. Use axios as network backend's library.
 * @see https://github.com/axios/axios
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  return axiosInstance(url, options);
}
