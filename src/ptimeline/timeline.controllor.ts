import { Controller,Post,Headers } from "@nestjs/common";
import { ItemService } from "src/pitem/items.service";
import {TimeLineService} from './timeline.service'
@Controller('timelines')
export class TimelineController{
    constructor(
        private readonly timelineservice:TimeLineService
    ){}

    @Post('create')
    async createTimeLine(
         @Headers('Authorization') authHeader: string){
            return this.timelineservice.createTimeLine();
          }
    

    }
