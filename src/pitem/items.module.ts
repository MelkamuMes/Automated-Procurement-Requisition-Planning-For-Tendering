// src/procurement/procurement.module.ts
import { Module } from '@nestjs/common';

import {TypeOrmModule} from '@nestjs/typeorm';
import {itemsControllor} from './itmes.controller'
import {ItemService} from './items.service'
import {FakeModule} from '../pidentification/fake.module'
import { MethodModule } from 'src/pmethod/pmethod.module';
@Module({
  imports: [FakeModule,MethodModule],
  providers: [ItemService],
  controllers: [itemsControllor],
  exports: [ItemService],
  
  
})
export class ItemModule {}
