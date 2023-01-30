import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
    const names = await prisma.name.findMany()
    res.status(200).json({names});
  }

  