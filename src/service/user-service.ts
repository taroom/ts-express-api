import { Prisma } from "@prisma/client";
import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";
import { CreateUserRequest, UserResponse, toUserResponse } from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import bcrypt from 'bcrypt';

export class UserService {
    static async register(request: CreateUserRequest): Promise<UserResponse> {
        const registerRequest = Validation.validate(UserValidation.REGISTER, request);

        const totalUserWithSameUsername = await prismaClient.user.count({
            where: {
                username: registerRequest.username
            }
        });

        if (totalUserWithSameUsername != 0) {
            throw new ResponseError(400, "Username already exists");
        }

        //ubah data password
        registerRequest.password = await bcrypt.hash(registerRequest.password, 10);

        //regist that user
        const user = await prismaClient.user.create({
            data: registerRequest
        });

        return toUserResponse(user);
    }
}