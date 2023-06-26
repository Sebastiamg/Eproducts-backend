import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, TreeRepository } from 'typeorm';

import { ProductService } from '../product/product.service';
import { Output, OutputDto, UpdateOutputDto } from '../';

@Injectable()
export class OutputService {
  constructor(
    @InjectRepository(Output)
    private readonly outputRepository: Repository<Output>,

    private readonly productService: ProductService,
  ) {}

  // create output
  async create({ id_product, ...outputData }: OutputDto) {
    const output = this.outputRepository.create({
      ...outputData,
      product: id_product
        ? await this.productService.findOneProduct(id_product)
        : null,
    });

    try {
      await this.outputRepository.save(output);
      return output;
    } catch (error) {
      this.productService.errorLog.LogError(error);
    }
  }

  // find outputs
  async findAll() {
    const outputs = await this.outputRepository.find({
      relations: ['product'],
    });

    try {
      return outputs;
    } catch (error) {
      this.productService.errorLog.LogError(error);
    }
  }

  // fing one output
  async findOne(id: number) {
    const output = await this.outputRepository.findBy({ id_output: id });

    if (!output) throw new NotFoundException('output not found');

    return output;
  }

  async update(id: number, { id_product, ...outputData }: UpdateOutputDto) {
    const output = await this.outputRepository.preload({
      id_output: id,
      ...outputData,
      product: id_product
        ? await this.productService.findOneProduct(id_product)
        : null,
    });

    try {
      await this.outputRepository.save(output);
      return output;
    } catch (error) {
      this.productService.errorLog.LogError(error);
    }
  }

  async remove(id: number) {
    const output = await this.findOne(id);

    await this.outputRepository.remove(output);

    return true;
  }
}
