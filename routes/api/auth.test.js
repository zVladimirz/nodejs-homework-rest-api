const mongoose = require("mongoose");
const request = require("supertest");
require("dotenv").config();

const app = require("../../app");
const { User } = require("../../models/user");

const { DB_HOST, PORT } = process.env;

describe("test signup routes", () => {
  let server;
  beforeAll(() => (server = app.listen(PORT)));
  afterAll(() => server.close());

  beforeEach((done) => {
    mongoose.connect(DB_HOST).then(() => done());
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

  test("test signup route", async () => {
    const testUser = {
      name: "b2",
      email: "a1@gmail.com",
      password: "111111",
    };

    // const user = await User.create(testUser);

    /*
        1. Проверить правильность получаемого ответа на 
        AJAX-запрос документации
        2. Проверить что в ответе должен возвращаться объект user с 2 полями email и subscription, имеющие тип данных String.
        */

    const loginUser = {
      email: "a2@gmail.com",
      password: "111111",
    };

    const response = await request(app)
      .post("/api/users/signup")
      .send(testUser);
    expect(response.statusCode).toBe(201);
    const { body } = response;
    expect(body).toHaveProperty("name");
    expect(body).toHaveProperty("email");
    expect(typeof body.name).toBe("string");
    expect(typeof body.email).toBe("string");
  });
});
