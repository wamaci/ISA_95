import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('status', () => {
    it('should return the bootstrapped Phase 0 status payload', () => {
      expect(appController.getStatus()).toMatchObject({
        application: 'Nam Long ERP/MES API',
        phase: 'Phase 0 Foundation',
        status: 'bootstrapped',
      });
    });
  });
});
