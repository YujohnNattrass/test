import { Mastra } from '@mastra/core';

import { weatherAgent } from './agents';
import { weatherWorkflow } from './workflows';

const mastra = new Mastra({
  agents: { weatherAgent },
  workflows: { weatherWorkflow },
});
