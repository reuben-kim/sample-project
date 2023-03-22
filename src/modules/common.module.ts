import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { DatabaseType, getDatabaseConfig } from '../config/database';
import { First_Entity } from '../models/firstDB/first';
import { Second_Entity } from '../models/secondDB/second';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: getDatabaseConfig(DatabaseType.First),
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options!).initialize();
        if (dataSource.isInitialized) console.log(`Database ${dataSource.driver.database} is Connected`);
        return dataSource;
      },
    }),
    TypeOrmModule.forFeature([First_Entity]),

    TypeOrmModule.forRootAsync({
      useFactory: getDatabaseConfig(DatabaseType.Second),
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options!).initialize();
        if (dataSource.isInitialized) console.log(`Database ${dataSource.driver.database} is Connected`);
        return dataSource;
      },
    }),
    TypeOrmModule.forFeature([Second_Entity]),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class CustomTypeOrmModule {}
