import { filterDto, paginateDto } from "../../dtos/common.dto";
import User from "../../models/users.model";
import { createUserDto, updateUserDto, deleteUserDto } from "./users.dto";

export interface IUserMethod {
    getOne: (id: number) => Promise<User | null>;
    findAll: ({limit=10, start}: paginateDto, filter_args: filterDto ) => Promise<User[] | []>;
    add: (data: createUserDto) => Promise<User>;
    update: (id: number, data: updateUserDto) => Promise<User>;
    delete: (id: number, data: deleteUserDto) => Promise<User>;
}