import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';

class DataCreation {
  @IsString()
  @ApiProperty()
  id: string;
}

export class PostPatchResponse {
  @IsString()
  @ApiProperty()
  message: string;
  @Type(() => DataCreation)
  @ValidateNested()
  @ApiProperty()
  data: DataCreation;
}
