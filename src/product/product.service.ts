import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities';
import { Repository } from 'typeorm';
import { PaginationDto } from './dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll({ limit = 10, offset = 0 }: PaginationDto) {
    return await this.productRepository.find({
      take: limit,
      skip: offset,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
