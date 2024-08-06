import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { fake } from './fake.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import axios from 'axios';

@Injectable()
export class FakeService {
  constructor(
    @InjectRepository(fake)
    private readonly procRepository: Repository<fake>,
  ) {}

  async getFakesData(): Promise<{ id: string }> {
    const procurementMethods = ['tendering', 'purchasing', 'auctioning'];
    const procurement = this.procRepository.create({
      budgetId: "7574b4bb-91a7-4489-823d-e73dff3e5ed5",
      budgetYearId: "28974b42-9b86-45d6-b301-69496456dac6",
      currency:'MKW',
      description: 'This is a description for tendering!!!',
      isMultiYear: faker.datatype.boolean(),
      name: `INTERNES ${faker.commerce.productName()}`,
      procurementApplication: faker.helpers.arrayElement(procurementMethods),
      remark: faker.lorem.sentence(),
      totalEstimatedAmount: parseFloat(faker.finance.amount()),  // Ensure this is a number
      type: 'Others',
    });

    const savedProcurement = await this.procRepository.save(procurement);

    const urlapi = 'https://dev-bo.megp.peragosystems.com/planning/api/procurement-requisitions';
    const webToken = process.env.WEB_TOKEN;

    try {
      const response = await axios.post(
        urlapi,
        savedProcurement,
        {
          headers: {
            Authorization: `Bearer ${webToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log("procuremnt Identifction is sent successfully!");
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error sending data to the web:', error.response?.data || error.message);
        console.error('Status code:', error.response?.status);
        console.error('Response headers:', error.response?.headers);
        console.error('Request data:', savedProcurement);
        console.error('Token used:', webToken);
      } else {
        console.error('Unexpected error:', error);
      }
      throw new Error('Failed to generate procurement requisition ID');
    }
  }
}
