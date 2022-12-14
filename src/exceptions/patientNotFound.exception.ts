import { NotFoundException } from '@nestjs/common';

export class PatientNotFound extends NotFoundException {
  code: string;
  constructor(message: string) {
    super(message);
    this.code = 'PATIENT_NOT_FOUND_CODE';
  }
}
