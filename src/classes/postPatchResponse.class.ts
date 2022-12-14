import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';

class DataCreation {
  @IsString()
  id: string;
}

export class PostPatchResponse {
  @IsString()
  message: string;
  @Type(() => DataCreation)
  @ValidateNested()
  data: DataCreation;
}
