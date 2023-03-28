import { hashSync } from "bcryptjs";

export default {
    secretKey: "powkeopqkeop!@#",
    base: {
        name: "Fabio",
        email: "fabio@mail.com",
        password: hashSync(":fabio-na-kombi:"),
    },
    valid: {
        email: "fabio@mail.com",
        password: ":fabio-na-kombi:",
    },
    invalidEmail: {
        email: "invalidEmail@mail.com",
        password: ":fabio-na-kombi:",
    },
    invalidPassword: {
        email: "fabio@mail.com",
        password: "invalid password",
    },
};
