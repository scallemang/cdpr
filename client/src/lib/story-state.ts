import { useState, useEffect } from "react";
import { UserData } from "@shared/schema";

const STORAGE_KEY = "story-engine-state";

interface StoryState {
  currentChapterId: string;
  userData: UserData;
  visitedChapters: string[];
  completedBranches: string[];
}

const defaultState: StoryState = {
  currentChapterId: "start",
  userData: {
    journalEntries: {}
  },
  visitedChapters: ["start"],
  completedBranches: []
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

  const completeBranch = (branchId: string) => {
    setState(prev => ({
      ...prev,
      completedBranches: prev.completedBranches.includes(branchId)
        ? prev.completedBranches
        : [...prev.completedBranches, branchId]
    }));
  };

  const isAllBranchesCompleted = () => {
    const allBranches = ["technical-interview", "creative-interview", "reference-check"];
    return allBranches.every(branch => state.completedBranches.includes(branch));
  };

  const getAvailableBranches = () => {
    const allBranches = [
      { id: "technical-interview", name: "Start with the technical interview", description: "Time to see if they can hack it in the cyberpunk future... or just hack poorly." },
      { id: "creative-interview", name: "Test their storytelling abilities", description: "Every great RPG needs great stories. Let's see what tales they can weave." },
      { id: "reference-check", name: "Call their references", description: "Sometimes the best insights come from those who've worked with them before." }
    ];
    return allBranches.filter(branch => !state.completedBranches.includes(branch.id));
  };

  const resetStory = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState({ ...defaultState }); // Create a new object to ensure React re-renders
  };

  return {
    currentChapterId: state.currentChapterId,
    userData: state.userData,
    visitedChapters: state.visitedChapters,
    completedBranches: state.completedBranches,
    setCurrentChapter,
    updateUserData,
    addJournalEntry,
    completeBranch,
    isAllBranchesCompleted,
    getAvailableBranches,
    resetStory
  };
}
