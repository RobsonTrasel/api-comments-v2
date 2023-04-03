import "reflect-metadata"
import { config } from "dotenv"
import { DataSource } from "typeorm"
import { Comments } from "@/data/entity/Comments"
config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Comments],
    migrations: [],
    subscribers: [],
})
