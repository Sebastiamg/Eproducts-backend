import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { OutputService } from './output.service';
import { OutputDto } from './dto/output.dto';

@Controller('output')
export class OutputController {
  constructor(private readonly outputService: OutputService) {}

  @Post()
  create(@Body() createOutputDto: OutputDto) {
    return this.outputService.create(createOutputDto);
  }

  @Get()
  findAll() {
    return this.outputService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.outputService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateOutputDto: any) {
    return this.outputService.update(id, updateOutputDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.outputService.remove(id);
  }
}
