import { DataSource } from "typeorm";
import { Group } from "../models/Group";
import { User } from "../models/User";
import { GroupUser } from "../models/GroupUser";
import { Balance } from "../models/Balance";
import { Expense } from "../models/Expense";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "sa",
  password: "",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [Group, User, GroupUser, Balance, Expense],
  options: {
    trustServerCertificate: true,
    encrypt: false,
  },
});
