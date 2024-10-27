// import { DataSource, DataSourceOptions } from "typeorm";
// import {config} from 'dotenv';
// import { ConfigModule, ConfigService } from "@nestjs/config";
// import { TypeOrmModule } from "@nestjs/typeorm";
// config();
// export const DataSourceOption:DataSourceOptions = {
//     import:[
//         ConfigModule.forRoot({
//           envFilePath: [`stage.${process.env.STAGE}.env`],
//         }),
//         TypeOrmModule.forRootAsync({
//          imports: [ConfigModule],
//          inject: [ConfigService],
//          useFactory: async (configService: ConfigService) => {
//            return {
//               type: 'postgres',
//               host: configService.get('DB_HOST'),
//               port: configService.get('DB_PORT'),
//               username: configService.get('DB_USERNAME'),
//               password: configService.get('DB_PASSWORD'),
//               database: configService.get('DB_DATABASE'),
//               entities:['dist/**/*.entity{.ts,.js}'],
//               migrations:['dist/db/migrations/*{.ts,.js}'],
//               logging:false,
//               synchronize:false
//             };
//          },
//         }),
//         ]
// }

// const dataSource = new DataSource(DataSourceOption)
// export default dataSource;