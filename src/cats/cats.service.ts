import { HttpService, Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import catsData from './mock-data/mock-cats';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = catsData;

  constructor(private readonly httpService: HttpService) {}

  create(cat: Cat): Promise<Cat> {
    this.cats.push(cat);
    return this.findCat(cat.id);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findCat(id: number): Promise<Cat> {
    return new Promise((resolve) => {
      const data = this.cats.filter((cat: Cat) => cat.id == id);
      resolve(data[0]);
    });
  }
}
