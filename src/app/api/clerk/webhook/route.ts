import { db } from "~/server/db";

export const POST = async (req: Request) => {
  const { data } = await req.json();

  const emailAddress = data.email_addresses[0].email_address;
  console.log(emailAddress);
  const firstName = data.first_name;
  const lastName = data.last_name;
  const imageUrl = data.image_url;
  const id = data.id;

  //   const emailAddress = "email@email.com";

  const user = await db.user.create({
    data: {
      id: id,
      emailAddress: emailAddress,
      firstName: firstName,
      lastName: lastName,
      imageUrl: imageUrl,
    },
  });

  if (user) console.log("user created", user);

  return new Response("Webhook received", { status: 200 });
};
