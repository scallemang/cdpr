import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const storyProgress = pgTable("story_progress", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  currentChapterId: text("current_chapter_id").notNull(),
  visitedChapters: jsonb("visited_chapters").$type<string[]>().default([]),
  userData: jsonb("user_data").$type<Record<string, any>>().default({}),
  journalEntries: jsonb("journal_entries").$type<Record<string, string>>().default({}),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertStoryProgressSchema = createInsertSchema(storyProgress).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type StoryProgress = typeof storyProgress.$inferSelect;
export type InsertStoryProgress = z.infer<typeof insertStoryProgressSchema>;

// Story content types
export interface StoryChoice {
  id: string;
  text: string;
  description?: string;
  nextChapterId: string;
  keyboardKey: string;
}

export interface StoryChapter {
  id: string;
  title: string;
  content: React.ReactNode;
  image?: string;
  imageAlt?: string;
  choices: StoryChoice[];
  requiresUserData?: boolean;
  userDataPrompt?: string;
}

export interface UserData {
  name?: string;
  journalEntries: Record<string, string>;
  choicesMade: Record<string, string>; // Track specific choices made throughout story
  [key: string]: any;
}
