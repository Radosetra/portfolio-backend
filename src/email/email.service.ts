import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { IEmailParams } from './interfaces/email.interface';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {

  constructor(private readonly mailerService: MailerService)
  {}

  async sendEmail(emailParams: IEmailParams){
    const rs = await this.mailerService.sendMail({
      to: emailParams.to,
      from: process.env.EMAIL_SENDER,
      subject: emailParams.subject,
      text: emailParams.text,
      
    })

    console.log(rs);
    
  }
}
