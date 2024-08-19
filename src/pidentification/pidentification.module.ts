// src/procurement/procurement.module.ts
import { Module } from '@nestjs/common';
import { FakeService } from './pidentification.service';
import { FakeController } from './pidentification.controller';

@Module({
  
    
  controllers: [FakeController],
  providers: [FakeService],
  exports: [FakeService],
  
})
export class FakeModule {}
