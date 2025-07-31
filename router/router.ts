import { Router, Response } from "express";
import { handleGetTasks } from "../handlers/tasks/get-tasks";
import { handleCreateTask } from "../handlers/tasks/create-task";
import { handleUpdateTask } from "../handlers/tasks/update-task";
import { handleDeleteTask } from "../handlers/tasks/delete-task";

export const router = Router()

router.get('/healtz', (_, res: Response)=>res.json({ message: "Hello World!"}))

router.get('/tasks', handleGetTasks)
router.post('/tasks', handleCreateTask)
router.put('/tasks/:id', handleUpdateTask)
router.delete('/tasks/:id', handleDeleteTask)
