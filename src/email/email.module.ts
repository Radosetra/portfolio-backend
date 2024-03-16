import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';

import { MailerModule } from '@nestjs-modules/mailer';

import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule, // Import ConfigModule here
    MailerModule.forRootAsync({
      inject: [ConfigService], // Inject ConfigService
      useFactory: async (configService: ConfigService) => {
        const emailSender = configService.get<string>('EMAIL_SENDER');
        const appPassword = configService.get<string>('APP_PASSWORD');
        if (!emailSender || !appPassword) {
          throw new Error('Missing or invalid email sender or app password.');
        }

        return {
          transport: {
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: emailSender,
              pass: appPassword
            }
          }
        };
      }
    })
  ],
  controllers: [EmailController],
  providers: [EmailService],

})
export class EmailModule {}
