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
import { InputService } from './input.service';
import { InputDto, UpdateInputDto } from './dto/input.dto';
import { InputDetailsDto } from './dto/input-details.dto';

@Controller('input')
export class InputController {
  constructor(private readonly inputService: InputService) {}

  // create input details
  @Post('details')
  createInputDetails(@Body() InputDetails: InputDetailsDto) {
    return this.inputService.createInputDetails(InputDetails);
  }

  @Get('details')
  getDetails() {
    return this.inputService.getDetails();
  }

  @Get('details/:id')
  getOneDetail(@Param('id', ParseIntPipe) id: number) {
    return this.inputService.getOneDetail(id);
  }

  @Post()
  create(@Body() createInputDto: InputDto) {
    return this.inputService.create(createInputDto);
  }

  @Get()
  findAll() {
    return this.inputService.findAllInputs();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.inputService.findOneInput(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateInputDto: UpdateInputDto,
  ) {
    return this.inputService.updateInput(id, updateInputDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.inputService.removeInput(id);
  }
}
