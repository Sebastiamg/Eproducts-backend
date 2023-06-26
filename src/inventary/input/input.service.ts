import { Injectable, NotFoundException } from '@nestjs/common';

import {
  Input,
  InputDetails,
  InputDetailsDto,
  InputDto,
  UpdateInputDto,
} from '../';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HandleError } from 'src/common/handleError';
import { ProviderService } from '../provider/provider.service';
import { ProductService } from '../product/product.service';

@Injectable()
export class InputService {
  private readonly errorLog = new HandleError();

  constructor(
    @InjectRepository(Input)
    private readonly inputRepository: Repository<Input>,

    @InjectRepository(InputDetails)
    private readonly inputDetialsRepository: Repository<InputDetails>,

    private readonly providerService: ProviderService,

    private readonly productService: ProductService,
  ) {}

  // createa input
  async create({ id_provider, date, ...inputData }: InputDto) {
    console.log(id_provider);
    const input = this.inputRepository.create({
      ...inputData,
      date: new Date(date),
      provider: id_provider
        ? await this.providerService.findOneProvider(id_provider)
        : null,
    });

    try {
      await this.inputRepository.save(input);
      return input;
    } catch (error) {
      this.errorLog.LogError(error);
    }
  }

  // find all inputs
  async findAllInputs() {
    const inputs = await this.inputRepository.find();
    return inputs;
  }

  async findOneInput(id: number) {
    const input = await this.inputRepository.findOneBy({ id_input: id });

    if (!input) throw new NotFoundException('Input not found');

    return input;
  }

  // update intput
  async updateInput(
    id: number,
    { date, id_provider, ...inputData }: UpdateInputDto,
  ) {
    const input = await this.inputRepository.preload({
      id_input: id,
      date: date && new Date(date),
      provider:
        id_provider &&
        (await this.providerService.findOneProvider(id_provider)),
      ...inputData,
    });

    try {
      await this.inputRepository.save(input);
      return input;
    } catch (error) {
      this.errorLog.LogError(error);
    }

    return;
  }

  // remove input
  async removeInput(id: number) {
    const input = await this.findOneInput(id);

    try {
      await this.inputRepository.remove(input);
      return true;
    } catch (error) {
      this.errorLog.LogError(error);
    }
  }

  // input details methods
  async createInputDetails({
    id_input,
    id_product,
    incoming_quantity,
  }: InputDetailsDto) {
    const inputDetails = this.inputDetialsRepository.create({
      product: await this.productService.findOneProduct(id_product),
      input: await this.findOneInput(id_input),
      incoming_quantity,
    });

    try {
      await this.inputDetialsRepository.save(inputDetails);
      return inputDetails;
    } catch (error) {
      this.errorLog.LogError(error);
    }
  }

  async getDetails() {
    const details = await this.inputDetialsRepository.find({
      relations: ['input', 'product'],
    });

    return details;
  }

  async getOneDetail(id: number) {
    const detail = await this.inputDetialsRepository.findOne({
      where: { id_input_details: id },
      relations: ['product', 'input'],
    });

    if (!detail) throw new NotFoundException('Detail not found');

    return detail;
  }
}
