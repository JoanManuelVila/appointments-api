import { ApiProperty } from '@nestjs/swagger';
import { Patient } from '@schemas/patient.schema';
import { IsString, ValidateNested } from 'class-validator';

export class GetResponse {
  @IsString()
  @ApiProperty()
  message: string;
  @ValidateNested()
  @ApiProperty()
  data: Patient[] | Patient;
}
