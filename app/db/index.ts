const path = require("path");
import { Sequelize } from "sequelize-typescript";
import config from "../config/index";
const { db_name, db_host, db_port, db_user, db_password } = config.db;

const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  port: db_port as unknown as number,
  dialect: "mysql",
  define: {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
  },
  models: [path.join(__dirname, '..', 'model/**/*.ts'), path.join(__dirname, '..', 'model/**/*.js')]
});

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default dbConnect
