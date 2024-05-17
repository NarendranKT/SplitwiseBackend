import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "sa",
  password: "test",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [],
});
