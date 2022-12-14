import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '@controllers/app.controller';
import { PatientSchema } from '@schemas/patient.schema';
import { AppService } from '@services/app.service';
import { PatientController } from '@controllers/patient.controller';
import { PatientService } from '@services/patient.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/patient'),
    MongooseModule.forFeature([
      {
        name: 'patient',
        schema: PatientSchema,
      },
    ]),
  ],
  controllers: [AppController, PatientController],
  providers: [AppService, PatientService],
})
export class AppModule {}
