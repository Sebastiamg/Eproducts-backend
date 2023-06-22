import { Injectable } from '@nestjs/common';

@Injectable()
export class InputService {
  create(createInputDto: any) {
    return 'This action adds a new input';
  }

  findAll() {
    return `This action returns all input`;
  }

  findOne(id: number) {
    return `This action returns a #${id} input`;
  }

  update(id: number, updateInputDto: any) {
    return `This action updates a #${id} input`;
  }

  remove(id: number) {
    return `This action removes a #${id} input`;
  }
}
