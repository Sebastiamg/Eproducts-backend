import { Injectable } from '@nestjs/common';

@Injectable()
export class InventaryService {
  create(createInventaryDto: any) {
    return 'This action adds a new inventary';
  }

  findAll() {
    return `This action returns all inventary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventary`;
  }

  update(id: number, updateInventaryDto: any) {
    return `This action updates a #${id} inventary`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventary`;
  }
}
