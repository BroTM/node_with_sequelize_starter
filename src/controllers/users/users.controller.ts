import User from "../../models/users.model";
import { createUserDto, deleteUserDto, updateUserDto } from "./users.dto";
import { filterDto, paginateDto } from "../../dtos/common.dto";

import {IUserMethod} from "./users.interface";

class UserMethod implements IUserMethod {

    public async getOne(id: number) : Promise<User | null> {

        return new User();
    }
    
    public async findAll({limit=10, start}: paginateDto, filter_args: filterDto ): Promise<User[] | []> {
        return [];
    }

    public async add(data: createUserDto): Promise<User> {

        return new User();
    }
    
    public async update(id: number, data: updateUserDto): Promise<User> {
        return new User;
    }
    
    public async delete(id: number, data: deleteUserDto): Promise<User> {
        return new User;
    }
}

export default UserMethod;