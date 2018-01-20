'use strict';
const BuildBoom = require('./lib/buildBoom');

module.exports = agent => {
  const useAgent = agent.config.boom.agent;
  if (useAgent) BuildBoom(agent);
};
