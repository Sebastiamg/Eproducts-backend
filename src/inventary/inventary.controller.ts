import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventaryService } from './inventary.service';

@Controller('inventary')
export class InventaryController {
  constructor(private readonly inventaryService: InventaryService) {}

  @Post()
  create(@Body() createInventaryDto: any) {
    return this.inventaryService.create(createInventaryDto);
  }

  @Get()
  findAll() {
    return this.inventaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventaryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInventaryDto: any) {
    return this.inventaryService.update(+id, updateInventaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventaryService.remove(+id);
  }
}
