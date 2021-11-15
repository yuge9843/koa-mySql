const config = {
  server: {
    port: process.env.SERVER_PORT,
  },
  db: {
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
  },
  log: {
    appenders: {
      cheese: {
        type: "file",
        filename: "log/cheese.log",
      },
      access: {
        type: "datefile",
        filename: "log/access.log",
        layout: { type: "basic" },
        pattern: ".yyyy-MM-dd"
      },
    },
    categories: {
      default: {
        appenders: ["access"],
        level: "info"
      },
      access: {
        appenders: ["access"],
        level: "info"
      },
    },
  },
};

export default config;
