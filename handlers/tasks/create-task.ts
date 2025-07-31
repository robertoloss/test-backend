import { Request, Response } from 'express'
import { prisma } from '../../prisma/prisma';


export async function handleCreateTask(req: Request, res: Response) {
  const { title, color } = req.body
  const now = new Date();

  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        color,
        completed: false,
        createdAt: now,
        updatedAt: now,
      },
    });

    console.log("New task created: ", newTask)

    res.status(400).json({ 
      message: "New task created successfully!"
    })

  } catch(error) {
    console.error(error)
    res.status(500).send()
    return
  }
}
