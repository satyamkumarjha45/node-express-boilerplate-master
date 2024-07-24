const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createTask = {
    body: Joi.object().keys({
        description: Joi.string().required(),
        startTime: Joi.string().required(),
        endTime: Joi.string().required(),
        priority: Joi.string().valid('High', 'Low').required(),
        status: Joi.string().valid('Not Started', 'In Progress', 'Completed').required(),
    }),
};

const getTasks = {
    query: Joi.object().keys({
        userId: Joi.string().custom(objectId),
    }),
};

const getTask = {
    params: Joi.object().keys({
        taskId: Joi.string().custom(objectId),
    }),
};

const updateTask = {
    params: Joi.object().keys({
        taskId: Joi.string().custom(objectId).required(),
    }),
    body: Joi.object().keys({
        description: Joi.string().optional(),
        startTime: Joi.string().optional(),
        endTime: Joi.string().optional(),
        priority: Joi.string().valid('High', 'Low').optional(),
        status: Joi.string().valid('Not Started', 'In Progress', 'Completed').optional(),
    }).min(1),
};

const deleteTask = {
    params: Joi.object().keys({
        taskId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
};