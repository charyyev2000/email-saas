import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "email@email.com",
    firstName: "Myrat",
    lastName: "Charyyev",
  },
});
console.log("Playground done");
