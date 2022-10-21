import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
    entities: [User],
  migrations: [],
  subscribers: [],
//   entities: ["src/entity/*.ts"],
  synchronize: true,
  logging: false,
});
