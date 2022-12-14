import { GetResponse } from '@classes/getResponse.class';
import { PostPatchResponse } from '@classes/postPatchResponse.class';
import { CreatePatientDto } from '@dtos/createPatient.dto';
import { DataBaseErrorException } from '@exceptions/dataBaseError.exception';
import { PatientNotFound } from '@exceptions/patientNotFound.exception';
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

  async getAll(): Promise<GetResponse> {
    try {
      const patients = await this.patientModel.find();
      return {
        message: 'Ok',
        data: patients,
      };
    } catch (error) {
      throw new DataBaseErrorException('Database error.');
    }
  }

  async getById(id: string): Promise<GetResponse> {
    try {
      const patient = await this.patientModel.findById(id);
      return {
        message: 'Ok',
        data: patient,
      };
    } catch (error) {
      throw new PatientNotFound('Patient NotFound');
    }
  }

  async updatePatient(
    id: string,
    body: Partial<CreatePatientDto>,
  ): Promise<PostPatchResponse> {
    try {
      const patient = this.patientModel.findById(id);
      await patient.update(body);
      return {
        message: 'Ok',
        data: {
          id,
        },
      };
    } catch (error) {
      throw new DataBaseErrorException('Database error.');
    }
  }

  async deletePatient(id: string): Promise<PostPatchResponse> {
    try {
      await this.patientModel.findByIdAndDelete(id);
      return {
        message: 'Ok',
        data: {
          id,
        },
      };
    } catch (error) {
      throw new DataBaseErrorException('Database error.');
    }
  }
}
