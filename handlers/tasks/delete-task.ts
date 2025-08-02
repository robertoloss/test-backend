import { Request, Response } from 'express'
import { prisma } from '../../prisma/prisma';


export async function handleDeleteTask(req: Request, res: Response) {
  const taskId = Number(req.params?.id)

  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'Task ID is required' });
  }

  try {
    await prisma.task.delete({
      where: {
        id: taskId
      }
    });

    console.log("Task deleted. Id: ", taskId)

    res.status(200).json({ 
      message: "Task deleted successfully!"
    })

  } catch(error) {
    console.error(error)
    res.status(500).send()
    return
  }
}
