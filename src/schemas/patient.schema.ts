import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class Patient{
    @Prop({required: true, trim: true})
    firstName: string

    @Prop({required: true, trim: true})
    lastName: string

    @Prop({required: true})
    birthDate: Date

    @Prop({required: true, trim: true})
    dni: string

    @Prop({trim: true})
    annotations: string
}

export const PatientSchema = SchemaFactory.createForClass(Patient)

export type PatientDocument = HydratedDocument<Patient>