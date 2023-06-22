import {
  Logger,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';

export class HandleError {
  private logger = new Logger();
  LogError(error: any) {
    console.log(error);
    this.logger.log(error);

    if (error.code === '23502') {
      throw new BadRequestException(error.detail);
    }
    throw new InternalServerErrorException(error.detail);
  }
}
