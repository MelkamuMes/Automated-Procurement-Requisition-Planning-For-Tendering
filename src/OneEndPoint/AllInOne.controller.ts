import { Controller,Post,Headers} from "@nestjs/common";
import { allprService } from "./AllInOne.service";

@Controller('AllInOne')
export class allprControllor{
    constructor(
        private readonly allprservice:allprService
    ){}
    @Post('create')
    async createAllPR(
         @Headers('Authorization') authHeader: string){

            if (!authHeader) {
                throw new Error('Authorization header is missing');
            }
            return this.allprservice.createAllPR(authHeader);
            
          }
          
          


















          
}

