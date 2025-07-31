import { Request, Response } from 'express'
import { prisma } from '../../prisma/prisma';


export async function handleUpdateTask(req: Request, res: Response) {
  const { title, color, completed } = req.body
  const taskId = Number(req.params?.id)

  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'Task ID is required' });
  }

  try {
    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: {
        ...(title !== undefined && { title }),
        ...(color !== undefined && { color }),
        ...(completed !== undefined && { completed }),
        updatedAt: new Date(),
      },
    })
    console.log("Task updated: ", updatedTask)

    res.status(400).json({ 
      message: "New task created successfully!"
    })

  } catch(error) {
    console.error(error)
    res.status(500).send()
    return
  }
}
