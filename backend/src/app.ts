import Fastify from "fastify";
import config from "./db/mikro-orm.config.js";
import {FastifySearchHttpMethodPlugin} from "./plugins/http_search.js";
import { FastifyBadWordsPlugin } from "./plugins/badwords.js";
import {FastifyMikroOrmPlugin} from "./plugins/mikro.js";
import doggrRoutes from "./routes.js";
// import cors from '@fastify/cors'

// 3 different NODE ENV levels that we allow our application to have
const envToLogger = {
	development: {
		transport: {
			target: 'pino-pretty',
			options: {
				translateTime: 'HH:MM:ss Z',
				ignore: 'pid,hostname',
			},
		},
		level: "debug", // level: error> warning>info>debug>trace, anything below the level gets left out
	},
	production: {
		level: "error"
	},
	test: {
		transport: {
			target: 'pino-pretty',
			options: {
				translateTime: 'HH:MM:ss Z',
				ignore: 'pid,hostname',
			},
		},
		level: "warn"
	},
};


//starting up tha app, register(adds) plugins
const app = Fastify({
	logger: envToLogger[process.env.NODE_ENV]
});
//register order matters...
await app.register(FastifyMikroOrmPlugin, config);

//add the search method plugin
await app.register(FastifySearchHttpMethodPlugin);

await app.register(FastifyBadWordsPlugin);

// //allow cors for frontend to fetch data
// await app.register(cors, {
// 	origin: '*'
// });

//add the routes
await app.register(doggrRoutes,{});


export default app;
