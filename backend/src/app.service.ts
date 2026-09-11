import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return {
      application: 'Nam Long ERP/MES API',
      phase: 'Phase 0 Foundation',
      status: 'bootstrapped',
      architecture: {
        tenancy: 'one-database-per-company',
        frontend: 'nextjs',
        backend: 'nestjs',
        database: 'postgresql',
      },
      modules: [
        'company',
        'factory',
        'department',
        'user',
        'role',
        'permission',
        'employee',
        'shift',
        'customer',
        'supplier',
        'work-center',
        'machine',
        'uom',
        'currency',
        'audit-log',
      ],
    };
  }
}
