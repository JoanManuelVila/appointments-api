import { PostPatchResponse } from '@classes/postPatchResponse.class';
import { CreatePatientDto } from '@dtos/createPatient.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { PatientService } from '@services/patient.service';

@Controller('/patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  async create(@Body() body: CreatePatientDto): Promise<PostPatchResponse> {
    return await this.patientService.create(body);
  }
}
