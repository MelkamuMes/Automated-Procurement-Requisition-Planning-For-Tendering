// src/procurement/procurement.module.ts
import { Module } from '@nestjs/common';

import {TypeOrmModule} from '@nestjs/typeorm';

import {FakeModule} from '../pidentification/fake.module'
import { MethodModule } from 'src/pmethod/pmethod.module';

import { ItemModule } from 'src/pitem/items.module';
import { allprControllor } from './allpr.controller';
import { allprService } from './allpr.service';
@Module({
  imports: [FakeModule,MethodModule,ItemModule],
  providers: [allprService],
  controllers: [allprControllor],
  exports: [allprService],
  
  
})
export class allprModule {}
