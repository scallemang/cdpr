import { useEffect } from "react";
import { StoryChoice } from "@shared/schema";

interface UseKeyboardNavigationProps {
  choices: StoryChoice[];
  onChoice: (choiceId: string) => void;
  onSave: () => void;
  onReset?: () => void;
}

export function useKeyboardNavigation({ choices, onChoice, onSave, onReset }: UseKeyboardNavigationProps) {
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

      // Handle Ctrl+R for reset
      if (e.ctrlKey && e.key === 'r') {
        e.preventDefault();
        if (onReset) {
          onReset();
        }
        return;
      }
    };

    document.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, [choices, onChoice, onSave, onReset]);
}
