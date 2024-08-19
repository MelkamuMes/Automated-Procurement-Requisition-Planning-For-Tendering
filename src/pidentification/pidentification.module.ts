// src/procurement/procurement.module.ts
import { Module } from '@nestjs/common';
import { IdentificationService } from './pidentification.service';
import { FakeController } from './pidentification.controller';

@Module({
  
    
  controllers: [FakeController],
  providers: [IdentificationService],
  exports: [IdentificationService],
  
})
export class FakeModule {}
