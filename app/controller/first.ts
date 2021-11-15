import { Context } from "koa";
import AdminService from "../service/AdminService";

class First {
  async index(ctx: Context) {
    const admin = await AdminService.getAdmin();
    ctx.body = admin;
  }

  async add(ctx: Context) {
    const np = {
      name: '张三',
      password: '123456'
    }
    const admin = await AdminService.addAdmin(np);
    ctx.body = admin;
  }
}

export default new First;
