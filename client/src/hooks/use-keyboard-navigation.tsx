import { useEffect } from "react";
import { StoryChoice } from "@shared/schema";

interface UseKeyboardNavigationProps {
  choices: StoryChoice[];
  onChoice: (choiceId: string) => void;
  onSave: () => void;
}

export function useKeyboardNavigation({ choices, onChoice, onSave }: UseKeyboardNavigationProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Handle choice selection
      const choice = choices.find(c => c.keyboardKey === e.key);
      if (choice) {
        e.preventDefault();
        onChoice(choice.id);
        return;
      }

      // Handle Ctrl+S for saving
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        onSave();
        return;
      }

      // Handle Ctrl+R for reset (could be implemented)
      if (e.ctrlKey && e.key === 'r') {
        e.preventDefault();
        // Could trigger a reset function if passed in
        return;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [choices, onChoice, onSave]);
}
