import { Entity, Column,PrimaryColumn} from 'typeorm';

@Entity()
export class fake {
  @PrimaryColumn()
  budgetId: string;

  @Column()
  budgetYearId: string;

  @Column()
  currency: string;

  @Column()
  description: string;

  @Column({ default: false })
  isMultiYear: boolean;

  @Column()
  name: string;

  @Column()
  procurementApplication: string;

  @Column({ nullable: true })
  remark?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalEstimatedAmount?: number;

  @Column()
  type: string;

 
  constructor() {
    this.budgetId = '';
    this.budgetYearId = '';
    this.currency = '';
    this.description = '';
    this.isMultiYear = false;
    this.name = '';
    this.procurementApplication = '';
    this.type = '';
  }
}

// contract
// : 
// {}
// createdAt
// : 
// "2024-08-03T16:07:21.189Z"
// deletedAt
// : 
// null
// donor
// : 
// []
// fundingSource
// : 
// "Internal Revenue"
// isOnline
// : 
// true
// justification
// : 
// [{key: "procurementMethod", status: "pass"}, {key: "targetGroup", status: "pass"}]
// organizationId
// : 
// "4326f20b-ff3d-4868-bf43-1b76d2766740"
// organizationName
// : 
// "Asssociation of Early Childhood Development in Malawi"
// procurementMethod
// : 
// "Request for Quotation (RFQ)"
// procurementRequisitionId
// : 
// "011ea6fe-6fb0-49e2-863f-2dbdd33f990f"
// procurementType
// : 
// "Non Consulting Services"
// targetGroup
// : 
// ["Others"]
// 0
// : 
// "Others"
// tenantId
// : 
// 0
// updatedAt
// : 
// "2024-08-03T16:07:21.189Z"










// fundingSource
// : 
// "Internal Revenue"
// procurementMethod
// : 
// "Request for Quotation (RFQ)"
// procurementRequisitionId
// : 
// "011ea6fe-6fb0-49e2-863f-2dbdd33f990f"
// procurementType
// : 
// "Non Consulting Services"
// targetGroup
// : 
// ["Others"]














// {name: "ws", description: "ddwdw", currency: "MKW", totalEstimatedAmount: 23333333, remark: "",…}
// budgetId
// : 
// "7574b4bb-91a7-4489-823d-e73dff3e5ed5"
// budgetYearId
// : 
// "28974b42-9b86-45d6-b301-69496456dac6"
// currency
// : 
// "MKW"
// description
// : 
// "ddwdw"
// isMultiYear
// : 
// false
// name
// : 
// "ws"
// procurementApplication
// : 
// "tendering"
// remark
// : 
// ""
// totalEstimatedAmount
// : 
// 23333333
// type
// : 
// "Others"