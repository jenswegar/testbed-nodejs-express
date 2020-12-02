/* eslint-disable no-unused-vars */
const Service = require('./Service');

const pjson = require('./../package.json');
const os = require('os');

/**
*
* returns AppMetadata
* */
const appMetadata = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name: pjson.name,
        version: pjson.version,
        hostname: os.hostname()
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  appMetadata,
};
