import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InputService } from './input.service';

@Controller('input')
export class InputController {
  constructor(private readonly inputService: InputService) {}

  @Post()
  create(@Body() createInputDto: any) {
    return this.inputService.create(createInputDto);
  }

  @Get()
  findAll() {
    return this.inputService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inputService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInputDto: any) {
    return this.inputService.update(+id, updateInputDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inputService.remove(+id);
  }
}
