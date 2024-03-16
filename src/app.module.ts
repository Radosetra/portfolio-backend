import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackController } from './feedback/feedback.controller';
import { FeedbackService } from './feedback/feedback.service';
import { PrismaService } from 'prisma/prisma.service';
import { EmailModule } from './email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [AppController, FeedbackController],
  providers: [AppService, FeedbackService, PrismaService],
})
export class AppModule {}
