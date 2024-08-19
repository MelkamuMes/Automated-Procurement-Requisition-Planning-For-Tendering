// src/procurement/procurement.module.ts
import { Module } from '@nestjs/common';
import { allprControllor } from './AllInOne.controller';
import { allprService } from './AllInOne.service';
import { ItemModule } from '../pitem/items.module';
import { MethodModule } from '../pmethod/pmethod.module';
import { FakeModule } from '../pidentification/pidentification.module';
import { TimeLineModule } from '../ptimeline/timeline.module';
@Module({
  imports: [FakeModule,MethodModule,ItemModule,TimeLineModule], // Import TimeLineModule
  providers: [allprService],
  controllers: [allprControllor],
  exports: [allprService],
})
export class allprModule {}

