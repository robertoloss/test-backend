import { Request, Response } from 'express'
import { prisma } from '../../prisma/prisma';


export async function handleGetTasks(_req: Request, res: Response) {
  try {
    const tasks = await prisma.task.findMany()

    res.status(200).json({ 
      message: "Tasks successfully fetched",
      tasks,
    })

  } catch(error) {
    console.error(error)
    res.status(500).send()
    return
  }
}
