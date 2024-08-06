import { Test, TestingModule } from '@nestjs/testing';
import { FakeController } from './fake.controller';

describe('FakeController', () => {
  let controller: FakeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FakeController],
    }).compile();

    controller = module.get<FakeController>(FakeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
