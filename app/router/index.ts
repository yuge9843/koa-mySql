const koaRouter = require('koa-router')
import first from '../controller/first'

const router = new koaRouter()
router.get('/', first.index)
router.get('/add', first.add)

export default router