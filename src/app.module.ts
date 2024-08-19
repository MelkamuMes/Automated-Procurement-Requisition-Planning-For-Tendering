// src/procurement/procurement.module.ts
import { Module } from '@nestjs/common';
// import {fake} from './pidentification/fake.entity';
import {FakeModule} from './pidentification/pidentification.module'
import {TypeOrmModule} from '@nestjs/typeorm';
import {MethodModule} from './pmethod/pmethod.module'
import {ItemModule} from './pitem/items.module'
import { TimeLineModule } from './ptimeline/timeline.module';
import { allprModule } from './OneEndPoint/AllInOne.module';
@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '1213A',
    //   database: 'procurement',
    //   entities: [fake],
    //   synchronize: true,
      
    // }),
  // TypeOrmModule.forFeature([fake]),
  allprModule,
],
  
 
  
})
export class AppModule {}
