import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

import * as path from 'path';

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(path.(__dirname, '..' , '..', 'variables.env')),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}