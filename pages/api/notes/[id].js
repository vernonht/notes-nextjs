import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === "PUT") {
    return await updateMessage(req, res);
  } else {
    return res.status(405).json({ message: 'Method not allowed', success: false })
  }
}

async function updateMessage(req, res) {
  const id = parseInt(req.query.id);
  const body = req.body;
  try {
    const newNotes = await prisma.notes.update({
      where: {
        id,
      },
      data: {
        title: body.title,
        message: body.message,
      },
    });
    return res.status(200).json(newNotes, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error updating note", success: false });
  }
}