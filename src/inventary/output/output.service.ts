import { Injectable } from '@nestjs/common';

@Injectable()
export class OutputService {
  create(createOutputDto: any) {
    return 'This action adds a new output';
  }

  findAll() {
    return `This action returns all output`;
  }

  findOne(id: number) {
    return `This action returns a #${id} output`;
  }

  update(id: number, updateOutputDto: any) {
    return `This action updates a #${id} output`;
  }

  remove(id: number) {
    return `This action removes a #${id} output`;
  }
}
