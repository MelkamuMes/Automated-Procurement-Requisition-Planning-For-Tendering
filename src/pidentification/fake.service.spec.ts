import { Test, TestingModule } from '@nestjs/testing';
import { FakeService } from './fake.service';

describe('FakeService', () => {
  let service: FakeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FakeService],
    }).compile();

    service = module.get<FakeService>(FakeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
