// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  email: string;
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email } = req.body;
  const allUsers = await prisma.user.create({
    data: {
      email: email,
    },
  });

  res.status(200).json({ email: email, status: "success" });
}
