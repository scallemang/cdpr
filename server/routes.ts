import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertStoryProgressSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Story progress routes
  app.get("/api/story-progress/:userId", async (req, res) => {
    try {
      const progress = await storage.getStoryProgress(req.params.userId);
      if (!progress) {
        return res.status(404).json({ message: "Story progress not found" });
      }
      res.json(progress);
    } catch (error) {
      console.error("Error fetching story progress:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/story-progress", async (req, res) => {
    try {
      const validated = insertStoryProgressSchema.parse(req.body);
      const progress = await storage.createStoryProgress(validated);
      res.status(201).json(progress);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid data", errors: error.errors });
      }
      console.error("Error creating story progress:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.put("/api/story-progress/:userId", async (req, res) => {
    try {
      const updateData = insertStoryProgressSchema.partial().parse(req.body);
      const progress = await storage.updateStoryProgress(req.params.userId, updateData);
      if (!progress) {
        return res.status(404).json({ message: "Story progress not found" });
      }
      res.json(progress);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid data", errors: error.errors });
      }
      console.error("Error updating story progress:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
