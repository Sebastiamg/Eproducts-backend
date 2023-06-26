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
import { ProviderService } from './provider.service';

import { ProviderDto, UpdateProviderDto } from '../';

@Controller('provider')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @Post()
  create(@Body() createProviderDto: ProviderDto) {
    return this.providerService.createProvider(createProviderDto);
  }

  @Get()
  findAll() {
    return this.providerService.findAllProviders();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.providerService.findOneProvider(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProviderDto: UpdateProviderDto,
  ) {
    return this.providerService.updateProvider(id, updateProviderDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.providerService.removeProvider(id);
  }
}
