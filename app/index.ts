const dotenv = require("dotenv")
dotenv.config()
import dbConnect from './db';
dbConnect()
const Koa = require('koa');
import router from './router'
import { Server } from 'http'
import accessLogMiddleware from './middleware/accessLogMiddleware'
const app = new Koa()

app.use(accessLogMiddleware).use(router.routes())

const run = (port: any): Server => {
    return app.listen(port)
}
export default run