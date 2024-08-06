import { Injectable } from "@nestjs/common";
import { FakeService } from "src/pidentification/fake.service";
import { MethodService } from "src/pmethod/pmethod.service";
import { ItemService } from "src/pitem/items.service";

import axios from 'axios'
import { faker } from "@faker-js/faker";
import { TimeLineService } from "src/ptimeline/timeline.service";

@Injectable()
export class allprService{
    constructor(
        private readonly IdentifcationService:FakeService,
        private readonly MethodService:MethodService,
        private readonly itemservice:ItemService,
        private readonly timelineservice:TimeLineService
        
    ){}

    async createAllPR(){
        const webToken = process.env.WEB_TOKEN;
        const procurementItem = await this.itemservice.createItemData()
        const procuremntidentifcation=await this.IdentifcationService.getFakesData()
        const procuremntMethod=await this.MethodService.createProcurementMethod() 
        const timeliine=await this.timelineservice.createTimeLine()
        const prcoId=procuremntidentifcation.id
        
        if (!prcoId) {
            throw new Error('Failed to retrieve id from Identification');
        
        
        }
        const urlapi = 'https://dev-bo.megp.peragosystems.com/planning/api/procurement-requisitions';
const requestData={
...procuremntidentifcation,
    ...procuremntMethod,
    ...procurementItem
}

        try {
            const response = await axios.post(
                urlapi,requestData,
                 {
                headers: {
                    Authorization: `Bearer ${webToken}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json, text/plain, */*',
                    'User-Agent': 'axios/1.7.2',
                },
            });
            console.log("all procuremnt data are register successfully!");
            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error status:', error.response?.status);
                console.error('Axios error data:', error.response?.data);
                console.error('Axios error message:', error.message);
            } else {
                console.error('Unexpected error:', error);
            }
            throw error;
        }






















    }
}
