import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { FakeService } from './fake.service';
import { fake} from './fake.entity';  

@Controller('fake')
export class FakeController {

  constructor(private readonly fakeService: FakeService) {}  
  @Post('fakes')
  async getFormData(
   
    @Headers('Authorization') authHeader: string):Promise<{ id: string }> {
  
         
     return this.fakeService.getFakesData();
     
  }
}
