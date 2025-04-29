const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: "postgres",
    port: process.env.PG_PORT,
    logging: false,
  }
);

const connectPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected");
  } catch (err) {
    console.error("PostgreSQL connection failed:", err);
  }
};

module.exports = { sequelize, connectPostgres };
