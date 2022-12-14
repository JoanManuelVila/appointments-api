import { Patient } from '@schemas/patient.schema';
import { IsString, ValidateNested } from 'class-validator';

export class GetResponse {
  @IsString()
  message: string;
  @ValidateNested()
  data: Patient[];
}
