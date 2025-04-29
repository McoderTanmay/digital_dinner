import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgresql://postgres:ZfsDsxatrzKpwwymemfdVftgHGrFxWmx@interchange.proxy.rlwy.net:51657/railway');

const connectPostgres = async () => {
  try {
    // console.log("123", process.env.PG_PASSWORD);
    
    await sequelize.authenticate();
    console.log("PostgreSQL connected");
  } catch (err) {
    console.error("PostgreSQL connection failed:", err);
  }
};

export  { sequelize, connectPostgres };
