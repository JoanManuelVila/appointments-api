import { InternalServerErrorException } from '@nestjs/common';

export class DataBaseErrorException extends InternalServerErrorException {
  code: string;
  constructor(message: string) {
    super(message);
    this.code = 'DATABASE_ERROR_CODE';
  }
}
