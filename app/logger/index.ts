import config from "../config";
import { configure, getLogger } from "log4js";

configure(config.log);
export const accessLogger = getLogger('access')
export default getLogger();
