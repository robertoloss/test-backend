"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCreateTask = handleCreateTask;
const prisma_1 = require("../../prisma/prisma");
async function handleCreateTask(req, res) {
    const { title, color } = req.body;
    const now = new Date();
    console.log("handleCreateTask hit: ", title, color);
    try {
        const newTask = await prisma_1.prisma.task.create({
            data: {
                title,
                color,
                completed: false,
                createdAt: now,
                updatedAt: now,
            },
        });
        console.log("New task created: ", newTask);
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
