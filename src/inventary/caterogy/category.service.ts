import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { HandleError } from 'src/common/handleError';

import { Category } from './entities/category.entity';
import { PaginationDto, CategoryDto, UpdateCategoryDto } from '..';

@Injectable()
export class CaterogyService {
  private readonly errorLog = new HandleError();

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async getAllCategories({ limit = 10, offset = 0 }: PaginationDto) {
    console.log(limit, offset);
    try {
      const categories = await this.categoryRepository.find({
        take: limit,
        skip: offset,
      });
      return categories;
    } catch (error) {
      this.errorLog.LogError(error);
    }
  }

  async findCategory(parameter: number | string) {
    let category: CategoryDto;
    switch (isNaN(Number(parameter))) {
      case false:
        category = await this.categoryRepository.findOneBy({
          id_category: Number(parameter),
        });
        break;

      case true:
        category = await this.categoryRepository.findOneBy({
          name_category: parameter.toString(),
        });
        break;
    }

    if (!category)
      throw new NotFoundException(`Category not found, Param: ${parameter}`);

    return category;
  }

  async findCategiryByName(name_category: string) {
    const category: CategoryDto = await this.categoryRepository.findOneBy({
      name_category,
    });

    if (!category) return null;

    return category;
  }

  async createaCategory(categoryDto: CategoryDto) {
    const category: CategoryDto = this.categoryRepository.create(categoryDto);
    try {
      await this.categoryRepository.save(category);
      return category;
    } catch (error) {
      this.errorLog.LogError(error);
    }
  }

  async updateCategory(id: number, updateCategory: UpdateCategoryDto) {
    const category: CategoryDto = await this.categoryRepository.preload({
      id_category: id,
      ...updateCategory,
    });

    try {
      await this.categoryRepository.save(category);
      return category;
    } catch (error) {
      this.errorLog.LogError(error);
    }
  }

  async deleteCategory(id: number) {
    const product = await this.findCategory(id);
    await this.categoryRepository.delete(product);
    return true;
  }
}
