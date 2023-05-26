import { ConsoleLogger } from '@tempojs/common';
import { TempoRouter } from '@tempojs/cloudflare-worker-router';
import * as Services from './services';

// bindings interface
interface Env {}

const logger = new ConsoleLogger('Router');
const registry = new Services.TempoServiceRegistry(logger);
const router = new TempoRouter<Env>(logger, registry);

export default {
	async fetch(request: Request, env: Env) {
		return await router.handle(request, env);
	},
};
