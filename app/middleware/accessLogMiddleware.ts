import { Context, Next } from "koa";
import { accessLogger } from "../logger";

export default (ctx: Context, next: Next) => {
    const { path, method, headers } = ctx
    const msg = `path: ${path} | method: ${method} | ua: ${headers["user-agent"]}`
    accessLogger.info(msg)
    next()
}