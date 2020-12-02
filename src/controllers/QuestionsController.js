/**
 * The QuestionsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/QuestionsService');
const createQuestion = async (request, response) => {
  await Controller.handleRequest(request, response, service.createQuestion);
};

const deleteQuestion = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteQuestion);
};

const getQuestion = async (request, response) => {
  await Controller.handleRequest(request, response, service.getQuestion);
};

const getQuestions = async (request, response) => {
  await Controller.handleRequest(request, response, service.getQuestions);
};

const getRandomQuestion = async (request, response) => {
  await Controller.handleRequest(request, response, service.getRandomQuestion);
};

const updateQuestion = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateQuestion);
};


module.exports = {
  createQuestion,
  deleteQuestion,
  getQuestion,
  getQuestions,
  getRandomQuestion,
  updateQuestion,
};
