import { Body, Controller, Post, Get, Param, Patch, Delete } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';

@Controller('feedback')
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService){}

    @Post()
    async createFeedback(@Body() createFeedbackDto: CreateFeedbackDto ) {
        return await this.feedbackService.createFeedback(createFeedbackDto)
    }

    @Get()
    async findAllFeedback() {
        return await this.feedbackService.findAllFeedbacks();
    }

    @Get(':id')
    async findOneFeedback(@Param('id') identifier: number) {
        return await this.feedbackService.findFeedback(+identifier);
    }

    @Patch(':id')
    async updateFeedback(@Param('id') identifier : number, @Body() updateFeedbackDto: UpdateFeedbackDto) {
        return await this.feedbackService.updateFeedback(+identifier, updateFeedbackDto);
    }

    @Delete(':id')
    async removeFeedback(@Param('id') identifier: number) {
        return await this.feedbackService.deleteFeedback(+identifier);
    }
}