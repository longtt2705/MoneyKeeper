const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  username: "root",
  password: "admin",
  database: "moneykeeper",
});

export default sequelize;
