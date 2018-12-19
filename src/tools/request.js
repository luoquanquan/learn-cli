/*
 * @Author: luoquanquan
 * @Date: 2018-11-15 16:58:18
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2018-11-15 19:22:53
 */

const axios = require('axios');
const { baseURL } = require('../../config');

const instance = axios.create({
  baseURL,
  timeout: 6e4,
  headers: {
    Authorization: 'token 0364152cf3b0d2a580508634ab0dfab9949bd3a1'
  }
});

// Add a request interceptor
instance.interceptors.request.use(config => config,
  error => Promise.reject(error));

// Add a response interceptor
instance.interceptors.response.use(response => response.data,
  error => Promise.reject(error));

module.exports = instance;
