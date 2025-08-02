"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetTasks = handleGetTasks;
const prisma_1 = require("../../prisma/prisma");
async function handleGetTasks(_req, res) {
    try {
        const tasks = await prisma_1.prisma.task.findMany();
        res.status(200).json({
            message: "Tasks successfully fetched",
            tasks,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send();
        return;
    }
}
