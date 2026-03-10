import { Injectable } from '@nestjs/common';
import {sampleText} from '@vittav-repos/utils';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: sampleText() };
  }
}
