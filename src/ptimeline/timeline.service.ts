import { Injectable } from '@nestjs/common';
import { ItemService } from 'src/pitem/items.service';
import axios from 'axios';

@Injectable()
export class TimeLineService {
  constructor(private readonly itemService: ItemService) {}

  private readonly timelines = [
    'Procurement Initiation',
    'Procurement Requisition',
    'Tender Publication',
    'Tender Submission',
    'Evaluation',
    'Award',
    'Contract Signing',
    'Contract Closure',
  ];

  private calculatePeriod(order: number): number {
    // Adjust periods based on the order
    // Example logic: periods increase with the order
    return 10 + order * 5;
  }

  async createTimeLine() {
    const webToken = process.env.WEB_TOKEN;
    const store = await this.itemService.createItemData();
    const id = store.procurementRequisitionId;

    if (!id) {
      throw new Error('Failed to retrieve procurementRequisitionId from ItemService');
    }

    const insert = this.generateFakeBudgetData(id);

    const urlapi = 'https://dev-bo.megp.peragosystems.com/planning/api/procurement-requisition-timelines/bulk-create';

    try {
      const response = await axios.post(urlapi, insert, {
        headers: {
          Authorization: `Bearer ${webToken}`,
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain, */*',
          'User-Agent': 'axios/1.7.2',
        },
      });
      console.log('Time Line data is sent successfully!');
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

  generateFakeBudgetData(id: string): any[] {
    interface Requisition {
      procurementRequisitionId: string;
      dueDate: string;
      period: number;
      timeline: string;
      order: number;
      appDueDate: string;
    }

    const InsertData: Requisition[] = [];
    let baseDate = new Date(); // Start from today

    this.timelines.forEach((timeline, index) => {
      const period = this.calculatePeriod(index);
      const dueDate = new Date(baseDate);
      dueDate.setDate(dueDate.getDate() + period);

      InsertData.push({
        procurementRequisitionId: id,
        dueDate: dueDate.toISOString(),
        period,
        timeline,
        order: index,
        appDueDate: baseDate.toISOString(),
      });

      baseDate = new Date(dueDate); // Update baseDate for next iteration
    });

    return InsertData;
  }
}
