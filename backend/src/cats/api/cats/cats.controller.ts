import { Controller, Get, Body, Post, Delete, Param } from '@nestjs/common';
import { CatsService } from 'src/cats/services/cats/cats.service';


@Controller('api/cats/v0')
export class CatsController {
    constructor( private catsService: CatsService ) {}
    
    @Post('cat/create')
    catCreate(@Body()catDetails){
        this.catsService.create(catDetails);
        return { msg: 'hello' }
    }
    @Get('cat/readAll')
    readAll(){
        return this.catsService.findAll();
    }
    @Delete('cat/delete/:id')
    deleteCat(@Param('id') id: string){
        console.log('Borrar a '+ id);
        return this.catsService.delete(id);
    }
    @Get('cat/readByName/:name')
    readByName(@Param('name') name: string) {
        return this.catsService.findByName(name);
    }
    @Get('cat/readByAge/:age')
    readByAge(@Param('age') age: number) {
        return this.catsService.findByAge(age);
    }
    @Get('cat/readByBreed/:breed')
    readByBreed(@Param('breed') breed: string) {
        return this.catsService.findByBreed(breed);
    }
    @Get('cat/readById/:id')
    readById(@Param('id') id: string) {
        return this.catsService.findById(id);
    }
}
