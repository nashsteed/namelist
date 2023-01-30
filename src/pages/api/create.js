import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
    const name = await prisma.name.create({data: {name: req.body.name}})
    res.status(200).json({name});
  }

  