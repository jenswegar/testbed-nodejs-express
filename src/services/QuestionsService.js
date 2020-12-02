/* eslint-disable no-unused-vars */
const Service = require('./Service');
const Question = require('../models/Question');

/**
*
* questionRequest QuestionRequest Create a new question
* returns Question
* */
const createQuestion = ({ questionRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        questionRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* id Long
* no response value expected for this operation
* */
const deleteQuestion = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* id Long
* returns Question
* */
const getQuestion = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {

      q = new Question();
      q.id = id;

      resolve(Service.successResponse(q));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* returns List
* */
const getQuestions = () => new Promise(
  async (resolve, reject) => {
    try {

      let q = new Question();

      resolve(Service.successResponse([q]));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* returns Question
* */
const getRandomQuestion = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* id Long
* questionRequest QuestionRequest Update an existing question
* returns Question
* */
const updateQuestion = ({ id, questionRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        questionRequest,
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
  createQuestion,
  deleteQuestion,
  getQuestion,
  getQuestions,
  getRandomQuestion,
  updateQuestion,
};
