import { Controller, Get, Param } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

//Zugriff: localhost:3000/workspaces
@ApiTags('workspaces - Controller')
@Controller('workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  //Get alles Workspaces
  @ApiOperation({
    summary: 'Get all workspaces',
    description: 'Returns all the workspaces available in the database'
  })
  @Get()
  findAll() {
    return this.workspacesService.findAll();
  }
  
  @ApiOperation({
    summary: 'Get one workspace',
    description: 'Returns the workspace with the specific ID in the database'
  })
  @Get(':id')
  findOne(@Param('id') id:string) {
    return this.workspacesService.findOne(id)
  }
}
