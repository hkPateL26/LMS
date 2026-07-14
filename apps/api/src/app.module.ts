import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './modules/admin/admin.module';
import { WorkshopsModule } from './modules/workshops/workshops.module';
import { MentorsModule } from './modules/mentors/mentors.module';
import { TestimonialsModule } from './modules/testimonials/testimonials.module';
import { RegistrationsModule } from './modules/registrations/registrations.module';
import { FaqsModule } from './modules/faqs/faqs.module';
import { ContactModule } from './modules/contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../../.env'],
    }),
    PrismaModule,
    AdminModule,
    WorkshopsModule,
    MentorsModule,
    TestimonialsModule,
    RegistrationsModule,
    FaqsModule,
    ContactModule,
  ],
})
export class AppModule {}
