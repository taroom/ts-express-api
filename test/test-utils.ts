import { prismaClient } from "../src/application/database";

export class UserTest {
    static async deleteUser() {
        await prismaClient.user.deleteMany({
            where: {
                username: 'test'
            }
        })
    }
}