import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { CreateCatDto } from 'src/cats/interfaces/create-cat-dto';

@Injectable()
export class CatsService {
    constructor(
        @Inject('CAT_MODEL')
        private readonly catModel: Model<Cat>,
      ) {}
      async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
      }
      async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
      }

      async updateById(id: string, catDto: CreateCatDto){
        return this.catModel.findByIdAndUpdate(id, catDto);
      }
      
      async delete(id: string){
        return this.catModel.deleteOne({ _id: id})
      }
      async findByName(name: string){
        return this.catModel.find({ name })
      }
      async findById(id: string){
        return this.catModel.find({ _id: id })
      }
      async findByAge(age: number){
        return this.catModel.find({ age })
      }
      async findByBreed(breed: string){
        return this.catModel.find({ breed })
      }
}
