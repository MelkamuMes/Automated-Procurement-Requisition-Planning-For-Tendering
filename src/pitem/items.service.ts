import { Injectable } from "@nestjs/common";
import { MethodService } from "src/pmethod/pmethod.service";
import axios from 'axios';
import { faker } from "@faker-js/faker";

@Injectable()
export class ItemService {
    constructor(
        private readonly methodservice: MethodService
    ) {}

    async createItemData() {
        const webToken = process.env.WEB_TOKEN;
        const store = await this.methodservice.createProcurementMethod();
        const id = store.procurementRequisitionId;

        if (!id) {
            throw new Error('Failed to retrieve procurementRequisitionId from MethodService');
        }

        const quantity = 2; // Use static values for testing
        const unitPrice = 5;
        const calculatedAmount = quantity * unitPrice;
        const totalEstimatedAmount = calculatedAmount + 5; // Ensure this is greater than calculatedAmount

        const insertItemData = {
            classification: "85673351",
            currency: 'MKW',
            description: "Laptop",
            id: faker.string.uuid(), // Ensure UUID is valid or use a placeholder if applicable
            itemCode: "85673351-00212",
            measurement: faker.string.uuid(), // Use a valid UUID or a placeholder if applicable
            procurementRequisitionId: id,
            quantity: quantity,
            unitPrice: unitPrice,
            calculatedAmount: calculatedAmount.toFixed(2),
            totalEstimatedAmount: totalEstimatedAmount.toFixed(2), // Ensure this value is valid
            uom: "piece", // Ensure UUID if expected, otherwise correct value
        };

        const urlapi = 'https://dev-bo.megp.peragosystems.com/planning/api/procurement-requisition-items';
        try {
            const response = await axios.post(urlapi, insertItemData, {
                headers: {
                    Authorization: `Bearer ${webToken}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json, text/plain, */*',
                    'User-Agent': 'axios/1.7.2',
                },
            });
            console.log("Items Data is sent successfully!");
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
