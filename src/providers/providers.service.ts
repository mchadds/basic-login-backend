import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { Provider } from './entities/provider.entity';

@Injectable()
export class ProvidersService {

  // static array of providers
  // utilized for querying since database will not be used in this project
  private providers: Provider[] = [
    { id: 0, name: 'Progressive' }
  ];

  create(createProviderDto: CreateProviderDto) {
    return 'This action adds a new provider';
  }

  findAll() {
    return `This action returns all providers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} provider`;
  }

  update(id: number, updateProviderDto: UpdateProviderDto) {
    return `This action updates a #${id} provider`;
  }

  remove(id: number) {
    return `This action removes a #${id} provider`;
  }
}
