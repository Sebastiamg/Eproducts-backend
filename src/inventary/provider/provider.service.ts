import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Provider, ProviderDto, UpdateProviderDto } from '../';
import { HandleError } from 'src/common/handleError';

@Injectable()
export class ProviderService {
  private readonly handleError = new HandleError();

  constructor(
    @InjectRepository(Provider)
    private readonly providerRepository: Repository<Provider>,
  ) {}

  // create provider
  async createProvider(createProviderDto: ProviderDto) {
    const provider = this.providerRepository.create(createProviderDto);

    try {
      await this.providerRepository.save(provider);
      return provider;
    } catch (error) {
      this.handleError.LogError(error);
    }

    return provider;
  }

  // find all users
  async findAllProviders() {
    try {
      const providers = await this.providerRepository.find();
      return providers;
    } catch (error) {
      this.handleError.LogError(error);
    }
  }

  // find one provider
  async findOneProvider(id: number) {
    const user = await this.providerRepository.findOneBy({ id_provider: id });
    if (!user) throw new NotFoundException('Provider not found');

    return user;
  }

  // update provider
  async updateProvider(id: number, updateProviderDto: UpdateProviderDto) {
    const user = await this.providerRepository.preload({
      id_provider: id,
      ...updateProviderDto,
    });

    if (!user) throw new NotFoundException('Provider not found');

    try {
      await this.providerRepository.save(user);
      return user;
    } catch (error) {
      this.handleError.LogError(error);
    }
  }

  // delete provider
  async removeProvider(id: number) {
    const user = await this.findOneProvider(id);
    try {
      await this.providerRepository.remove(user);
      return true;
    } catch (error) {
      this.handleError.LogError(error);
    }
  }
}
