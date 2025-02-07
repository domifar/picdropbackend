import { Controller, Get, Param } from '@nestjs/common';
import { SubmissionItemsService } from './SubmissionItems.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

//Zugriff: localhost:3000/submissionitems
@ApiTags('submissionitems - Controller')
@Controller('submissionitems')
export class SubmissionItemsController {
  constructor(private readonly SubmissionItemsService: SubmissionItemsService) {}

  //Get aller SubmissionItems
  @ApiOperation({
    summary: 'Get all submissionitems',
    description: 'Returns all the submissionitems available in the database'
  })
  @Get()
  findAll() {
    return this.SubmissionItemsService.findAll();
  }

  @ApiOperation({
    summary: 'Get one submissionitem',
    description: 'Returns the submissionitem with the specific ID in the database'
  })
  @Get(':id')
  findOne(@Param('id') id:string) {
    return this.SubmissionItemsService.findOne(id)
  }
}
