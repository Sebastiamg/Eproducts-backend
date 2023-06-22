import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CategoryDto, PaginationDto, UpdateCategoryDto } from '..';

import { CaterogyService } from './category.service';

@Controller('category')
export class CaterogyController {
  constructor(private readonly caterogyService: CaterogyService) {}

  @Post()
  createCategorie(@Body() categoryDto: CategoryDto) {
    return this.caterogyService.createaCategory(categoryDto);
  }

  @Get(':param')
  findCategory(@Param('param') param: string | number) {
    return this.caterogyService.findCategory(param);
  }

  @Get()
  getCategories(@Query() paginationDto: PaginationDto) {
    return this.caterogyService.getAllCategories(paginationDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.caterogyService.updateCategory(id, updateCategoryDto);
  }
}
