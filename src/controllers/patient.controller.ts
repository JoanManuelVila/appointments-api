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
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { PatientService } from '@services/patient.service';

@Controller('/patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  @ApiCreatedResponse({ description: 'example', type: PostPatchResponse })
  @ApiInternalServerErrorResponse({ description: 'example' })
  async create(@Body() body: CreatePatientDto): Promise<PostPatchResponse> {
    return await this.patientService.create(body);
  }

  @Get()
  @ApiOkResponse({ type: GetResponse, isArray: true })
  @ApiInternalServerErrorResponse({ description: 'example' })
  async getAll(): Promise<GetResponse> {
    return await this.patientService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: GetResponse })
  @ApiInternalServerErrorResponse({ description: 'example' })
  async getById(@Param('id') id: string): Promise<GetResponse> {
    return await this.patientService.getById(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CreatePatientDto })
  @ApiInternalServerErrorResponse({ description: 'example' })
  async updatePatient(
    @Param('id') id: string,
    @Body() post: Partial<CreatePatientDto>,
  ) {
    return await this.patientService.updatePatient(id, post);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PostPatchResponse })
  @ApiInternalServerErrorResponse({ description: 'example' })
  async deletePatient(@Param('id') id: string): Promise<PostPatchResponse> {
    return await this.patientService.deletePatient(id);
  }
}
