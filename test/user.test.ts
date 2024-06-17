import supertest from "supertest";
import { web } from "../src/application/web";
import { logger } from "../src/application/logging";
import { UserTest } from "./test-utils";

describe('POST /api/users', function () {
    // hapus data setiap kali akan melakukan test
    afterEach(async () => {
        await UserTest.deleteUser();
    });

    it('should reject register new user if request is invalid', async () => {
        const response = await supertest(web)
            .post("/api/users")
            .send({
                username: '',
                name: '',
                password: ''
            });

        logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    });

    it('should success on registration', async () => {
        const response = await supertest(web)
            .post("/api/users")
            .send({
                username: 'test',
                name: 'test',
                password: 'test'
            });

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.username).toBe('test');
        expect(response.body.data.name).toBe('test');
    });
});