import { useState, useEffect } from "react";
import { UserData } from "@shared/schema";

const STORAGE_KEY = "story-engine-state";

interface StoryState {
  currentChapterId: string;
  userData: UserData;
  visitedChapters: string[];
}

const defaultState: StoryState = {
  currentChapterId: "start",
  userData: {
    journalEntries: {}
  },
  visitedChapters: ["start"]
};

export function useStoryState() {
  const [state, setState] = useState<StoryState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultState;
    } catch {
      return defaultState;
    }
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const setCurrentChapter = (chapterId: string) => {
    setState(prev => ({
      ...prev,
      currentChapterId: chapterId,
      visitedChapters: prev.visitedChapters.includes(chapterId) 
        ? prev.visitedChapters 
        : [...prev.visitedChapters, chapterId]
    }));
  };

  const updateUserData = (newUserData: UserData) => {
    setState(prev => ({
      ...prev,
      userData: newUserData
    }));
  };

  const addJournalEntry = (chapterId: string, entry: string) => {
    setState(prev => ({
      ...prev,
      userData: {
        ...prev.userData,
        journalEntries: {
          ...prev.userData.journalEntries,
          [chapterId]: entry
        }
      }
    }));
  };

  const resetStory = () => {
    setState(defaultState);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    currentChapterId: state.currentChapterId,
    userData: state.userData,
    visitedChapters: state.visitedChapters,
    setCurrentChapter,
    updateUserData,
    addJournalEntry,
    resetStory
  };
}
