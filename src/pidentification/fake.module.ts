// src/procurement/procurement.module.ts
import { Module } from '@nestjs/common';
import { FakeService } from './fake.service';
import { FakeController } from './fake.controller';
import {fake} from './fake.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
@Module({
  imports: [
    
  TypeOrmModule.forFeature([fake])],
  providers: [FakeService],
  controllers: [FakeController],
  exports: [FakeService],
  
})
export class FakeModule {}
