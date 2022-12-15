import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '@controllers/app.controller';
import { PatientSchema } from '@schemas/patient.schema';
import { AppService } from '@services/app.service';
import { PatientController } from '@controllers/patient.controller';
import { PatientService } from '@services/patient.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
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
