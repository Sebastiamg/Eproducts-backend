import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product, PaginationDto, ProductDto } from '../';
import { HandleError } from 'src/common/handleError';
import { UpdateProductDto } from './dto/product.dto';
import { CaterogyService } from '../caterogy/category.service';

@Injectable()
export class ProductService {
  private errorLog = new HandleError();
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    private readonly categoryService: CaterogyService,
  ) {}

  async create({ category, ...productInfo }: ProductDto) {
    const product = this.productRepository.create({
      ...productInfo,
      category: await this.categoryService.findCategiryByName(
        category ? category.name_category : '',
      ),
    });

    try {
      await this.productRepository.save(product);
      return product;
    } catch (error) {
      return this.errorLog.LogError(error);
    }
  }

  async findAllProducts({ limit = 10, offset = 0 }: PaginationDto) {
    try {
      return await this.productRepository.find({
        take: limit,
        skip: offset,
        relations: ['category', 'outputs', 'inputDetails'],
      });
    } catch (error) {
      this.errorLog.LogError(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  async updateProduct(id: number, productDta: UpdateProductDto) {
    const product = await this.productRepository.preload({
      id_product: id,
      ...productDta,
      category: await this.categoryService.findCategiryByName(
        productDta.category ? productDta.category.name_category : '',
      ),
    });

    try {
      return await this.productRepository.save(product);
    } catch (error) {
      this.errorLog.LogError(error);
    }

    return product;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}