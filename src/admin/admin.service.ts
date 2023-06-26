import { Injectable, NotFoundException } from '@nestjs/common';
import { AdminDto, UpdateAdminDto } from './dto/admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { HandleError } from 'src/common/handleError';

@Injectable()
export class AdminService {
  private errorLog = new HandleError();

  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  async create(createAdminDto: AdminDto) {
    const admin = this.adminRepository.create(createAdminDto);

    try {
      await this.adminRepository.save(admin);
      return admin;
    } catch (error) {
      this.errorLog.LogError(error);
    }
  }

  async findAll() {
    const admins = await this.adminRepository.find();

    return admins;
  }

  async findOne(id: number) {
    const admin = await this.adminRepository.findOneBy({ id_admin: id });
    if (!admin) throw new NotFoundException('User not found');

    return admin;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const admin = await this.adminRepository.preload({
      id_admin: id,
      ...updateAdminDto,
    });

    if (!admin) throw new NotFoundException('User not found');

    try {
      await this.adminRepository.save(admin);
      return admin;
    } catch (error) {
      this.errorLog.LogError(error);
    }
  }

  async remove(id: number) {
    const admin = await this.findOne(id);

    await this.adminRepository.remove(admin);

    return true;
  }
}
