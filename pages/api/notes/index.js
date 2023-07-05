import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await createMessage(req, res);
  } else if (req.method === 'GET') {
    return await fetchMessages(req, res)
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function createMessage(req, res) {
  const body = req.body
  try {
    const newNotes = await prisma.notes.create({
      data: {
        title: body.title,
        message: body.message
      }
    })
    return res.status(200).json(newNotes, { success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error creating note', success: false })
  }
}

async function fetchMessages(req, res) {
  try {
    const notes = await prisma.notes.findMany();
    return res.status(200).json(notes, { success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error fetching notes', success: false })
  }
}