import { StoryChoice } from "@shared/schema";

interface ChoicePanelProps {
  choices: StoryChoice[];
  onChoice: (choiceId: string) => void;
}

export function ChoicePanel({ choices, onChoice }: ChoicePanelProps) {
  if (choices.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-muted-foreground" data-testid="story-end">
          The End
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Thank you for playing!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 mb-8" data-testid="choice-panel">
      <h3 className="text-lg font-medium text-foreground mb-4">Make your choice:</h3>
      
      {choices.map((choice, index) => (
        <button 
          key={choice.id}
          onClick={() => onChoice(choice.id)}
          className="choice-button w-full text-left p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 group"
          data-testid={`button-choice-${index + 1}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className="kbd" data-testid={`kbd-${choice.keyboardKey}`}>
                  {choice.keyboardKey}
                </span>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {choice.text}
                </span>
              </div>
              {choice.description && (
                <p className="text-sm text-muted-foreground ml-8">
                  {choice.description}
                </p>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
