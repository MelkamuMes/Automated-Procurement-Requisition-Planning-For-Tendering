// src/procurement/procurement.module.ts
import { Module } from '@nestjs/common';

import {TypeOrmModule} from '@nestjs/typeorm';

import {FakeModule} from '../pidentification/fake.module'
import { MethodModule } from 'src/pmethod/pmethod.module';
import { TimeLineService } from './timeline.service';
import { TimelineController } from './timeline.controllor';
import { ItemModule } from 'src/pitem/items.module';
@Module({
  imports: [FakeModule,MethodModule,ItemModule],
  providers: [TimeLineService],
  controllers: [TimelineController],
  exports: [TimeLineService],
  
  
})
export class TimeLineModule {}
