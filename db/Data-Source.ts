import { DataSource, DataSourceOptions } from "typeorm";
import {config} from 'dotenv';
config();
export const DataSourceOption:DataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations:['dist/db/migrations/*{.ts,.js}'],
    logging:false,
    synchronize:true
};
const dataSource = new DataSource(DataSourceOption)
export default dataSource;