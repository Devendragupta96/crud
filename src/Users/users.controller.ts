import { Controller, Body,Get, Post, Patch, Param, Query, Delete, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './update.dto';
import { User } from './users.model';
import { UsersService } from './users.service';



@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Post('/create')
    async create(@Body() user: User): Promise<User>{
        return await this.usersService.create(user);
        
    }
    
    @Get()
    async getUser():Promise<User[]|null>{
        return await this.usersService.findAll();
    }

    @Delete('/:_id')
    removerUser(@Param('_id') _id: string){
        return this.usersService.remove(_id);
    }

    @Patch('/:_id')
    UpdateUser(@Param('_id') _id:string,@Body() body:UpdateUserDto){
        return this.usersService.update(_id, body);
    }
}
