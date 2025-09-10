import { type User, type InsertUser, type StoryProgress, type InsertStoryProgress } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getStoryProgress(userId: string): Promise<StoryProgress | undefined>;
  createStoryProgress(progress: InsertStoryProgress): Promise<StoryProgress>;
  updateStoryProgress(userId: string, updates: Partial<InsertStoryProgress>): Promise<StoryProgress | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private storyProgress: Map<string, StoryProgress>;

  constructor() {
    this.users = new Map();
    this.storyProgress = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getStoryProgress(userId: string): Promise<StoryProgress | undefined> {
    return Array.from(this.storyProgress.values()).find(
      (progress) => progress.userId === userId,
    );
  }

  async createStoryProgress(insertProgress: InsertStoryProgress): Promise<StoryProgress> {
    const id = randomUUID();
    const progress: StoryProgress = { 
      id,
      userId: insertProgress.userId,
      currentChapterId: insertProgress.currentChapterId,
      visitedChapters: insertProgress.visitedChapters ?? [],
      userData: insertProgress.userData ?? {},
      journalEntries: insertProgress.journalEntries ?? {}
    };
    this.storyProgress.set(id, progress);
    return progress;
  }

  async updateStoryProgress(userId: string, updates: Partial<InsertStoryProgress>): Promise<StoryProgress | undefined> {
    const existing = await this.getStoryProgress(userId);
    if (!existing) {
      return undefined;
    }

    const updated: StoryProgress = {
      ...existing,
      ...updates
    };

    this.storyProgress.set(existing.id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
