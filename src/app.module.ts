import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '@controllers/app.controller';
import { PatientSchema } from '@schemas/patient.schema';
import { AppService } from '@services/app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/patient'),
    MongooseModule.forFeature([
      {
        name: "Patient",
        schema: PatientSchema
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
