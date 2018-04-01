// Application hooks that run for every service
const logger = require('./hooks/logger');

module.exports = {
  before: {
    all: [ logger() ],
    find: [],
    get: [],
    create: [
      (context) => {
	      context.data.createdAt = new Date().getTime();
      },
    ],
    update: [
	    (context) => {
		    context.data.updatedAt = new Date().getTime();
	    },
    ],
    patch: [
	    (context) => {
		    context.data.updatedAt = new Date().getTime();
	    },
    ],
    remove: []
  },

  after: {
    all: [ logger() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [ logger() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
