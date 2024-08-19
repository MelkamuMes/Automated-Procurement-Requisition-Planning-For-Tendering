import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { FakeService } from './pidentification.service';
 

@Controller('identification')
export class FakeController {

  constructor(private readonly fakeService: FakeService) {}  
  @Post('create')
  async getFormData(
   
   @Headers('Authorization') authHeader: string):Promise<{ id: string }> {
  
         
     return this.fakeService.getFakesData();
     
  }
}
