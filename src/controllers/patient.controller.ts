import { GetResponse } from '@classes/getResponse.class';
import { PostPatchResponse } from '@classes/postPatchResponse.class';
import { CreatePatientDto } from '@dtos/createPatient.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PatientService } from '@services/patient.service';

@Controller('/patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  async create(@Body() body: CreatePatientDto): Promise<PostPatchResponse> {
    return await this.patientService.create(body);
  }

  @Get()
  async getAll(): Promise<GetResponse> {
    return await this.patientService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<GetResponse> {
    return await this.patientService.getById(id);
  }

  @Patch(':id')
  async updatePatient(
    @Param('id') id: string,
    @Body() post: Partial<CreatePatientDto>,
  ) {
    return await this.patientService.updatePatient(id, post);
  }

  @Delete(':id')
  async deletePatient(@Param('id') id: string): Promise<PostPatchResponse> {
    return await this.patientService.deletePatient(id);
  }
}
