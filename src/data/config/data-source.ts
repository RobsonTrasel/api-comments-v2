
import "reflect-metadata"
import { config } from "dotenv"
import { DataSource } from "typeorm"
import { Comments } from "../entity/Comments"
import { User } from "../entity/User"
import { createCommentsTable1680566668885 } from "../migrations/1680566668885-createCommentsTable"
import { createUserTable1680566433503 } from "../migrations/1680566433503-createUserTable"
config()

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Comments, User],
    migrations: [
        createCommentsTable1680566668885,
        createUserTable1680566433503
    ],
    subscribers: [],
})

export { AppDataSource }