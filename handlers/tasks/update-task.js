"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUpdateTask = handleUpdateTask;
const prisma_1 = require("../../prisma/prisma");
async function handleUpdateTask(req, res) {
    const { title, color, completed } = req.body;
    const taskId = Number(req.params?.id);
    if (isNaN(taskId)) {
        return res.status(400).json({ error: 'Task ID is required' });
    }
    try {
        const updatedTask = await prisma_1.prisma.task.update({
            where: { id: taskId },
            data: {
                ...(title !== undefined && { title }),
                ...(color !== undefined && { color }),
                ...(completed !== undefined && { completed }),
                updatedAt: new Date(),
            },
        });
        res.status(200).json({
            message: "New task created successfully!"
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send();
        return;
    }
}
