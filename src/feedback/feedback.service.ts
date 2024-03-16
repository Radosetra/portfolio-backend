import { Injectable } from '@nestjs/common';
import { Feedback } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';

@Injectable()
export class FeedbackService {
    constructor(private prisma: PrismaService) {}

    async createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
        return this.prisma.feedback.create({
            data: createFeedbackDto,
        });
    }

    async findAllFeedbacks(){
        const dataFeedbacks = await this.prisma.feedback.findMany();

        return {
            statusCode: 200,
            data: dataFeedbacks
        }
    }

    async findFeedback(identifiant: number){
        const dataFeedback = await this.prisma.feedback.findUnique({
            where : {id : identifiant}
        })

        return {
            statusCode: 200,
            data: dataFeedback
        }
    }

    async updateFeedback(id: number, updateFeedbackDto: UpdateFeedbackDto ) {
        const updateFeedback = await this.prisma.feedback.update({
            data: updateFeedbackDto,
            where: {id}
        });

        return {
            statusCode: 200,
            data: updateFeedback
        };
    }


    async deleteFeedback(id: number) {
        const dataFeedback = await this.prisma.feedback.delete({
            where: {id}
        });

        return {
            statusCode: 200,
            message : `The data with an id ${id} is deleted`,
            data: dataFeedback
        }
    }
}
