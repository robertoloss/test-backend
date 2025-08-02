"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDeleteTask = handleDeleteTask;
const prisma_1 = require("../../prisma/prisma");
async function handleDeleteTask(req, res) {
    const taskId = Number(req.params?.id);
    if (isNaN(taskId)) {
        return res.status(400).json({ error: 'Task ID is required' });
    }
    try {
        await prisma_1.prisma.task.delete({
            where: {
                id: taskId
            }
        });
        console.log("Task deleted. Id: ", taskId);
        res.status(200).json({
            message: "Task deleted successfully!"
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send();
        return;
    }
}
