import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { IEmailParams } from './interfaces/email.interface';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('email')
  sendEmail(@Body() emailParams: IEmailParams ){
    this.emailService.sendEmail(emailParams);
  }
}
