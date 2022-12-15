import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  birthDate: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  dni: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  annotattions?: string;
}
