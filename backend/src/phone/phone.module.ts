import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Phone, PhoneSchema } from './schemas/phone.schema';
import { PhoneController } from './phone.controller';
import { PhoneService } from './phone.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Phone.name, schema: PhoneSchema }]),
  ],
  controllers: [PhoneController],
  providers: [PhoneService],
})
export class PhoneModule {}
