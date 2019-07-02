import {Injectable} from '@nestjs/common';
import { ConfigService } from './Config/config.service';


@Injectable()
export class AppService {
  constructor(config:ConfigService){
    console.log(config.get('PROD_DB__TYPE'));
  }

  getHello(): string {
    return 'Hello World!';
  }
}
