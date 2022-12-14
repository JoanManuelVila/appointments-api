import { PostPatchResponse } from '@classes/postPatchResponse.class';
import { CreatePatientDto } from '@dtos/createPatient.dto';
import { DataBaseErrorException } from '@exceptions/dataBaseError.exception';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PatientDocument } from '@schemas/patient.schema';
import { Model } from 'mongoose';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel('patient')
    private readonly patientModel: Model<PatientDocument>,
  ) {}

  async create(body: CreatePatientDto): Promise<PostPatchResponse> {
    try {
      const patient = new this.patientModel(body);
      await patient.save();
      return {
        message: 'Ok',
        data: {
          id: String(patient._id),
        },
      };
    } catch (error) {
      throw new DataBaseErrorException('Database error.');
    }
  }
}
