import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { IdentificationService } from './pidentification.service';
 

@Controller('identification')
export class FakeController {

  constructor(private readonly identificationService: IdentificationService) {}  
  @Post('create')
  async getFormData(
   
   @Headers('Authorization') authHeader: string):Promise<{ id: string }> {
  
         
     return this.identificationService.getFakesData();
     
  }
}
