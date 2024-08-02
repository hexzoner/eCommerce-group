import { Sequelize } from "sequelize";
const sequelize = new Sequelize(process.env.PG_G_URI || process.env.PG_URI);
export default sequelize;
