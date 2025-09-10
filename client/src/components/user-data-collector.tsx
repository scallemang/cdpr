import { useState } from "react";

interface UserDataCollectorProps {
  onNameUpdate: (name: string) => void;
  // journalEntry: string; // Commented out - journal functionality removed
  // onJournalChange: (entry: string) => void; // Commented out - journal functionality removed
  // onSaveJournal: () => void; // Commented out - journal functionality removed
}

export function UserDataCollector({ 
  onNameUpdate, 
  // journalEntry, // Commented out - journal functionality removed
  // onJournalChange, // Commented out - journal functionality removed
  // onSaveJournal // Commented out - journal functionality removed
}: UserDataCollectorProps) {
  const [name, setName] = useState("");

  const handleNameSubmit = () => {
    if (name.trim()) {
      onNameUpdate(name.trim());
    }
  };

  return (
    <div className="bg-muted/30 rounded-lg border border-border p-6 mb-8" data-testid="user-data-collector">
      <h3 className="text-lg font-medium text-foreground mb-4">Welcome, Adventurer!</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Before we begin your journey, please tell us your name. This will be used throughout your adventure.
      </p>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="player-name" className="block text-sm font-medium text-foreground mb-2">
            Your Name:
          </label>
          <div className="flex space-x-2">
            <input 
              id="player-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="flex-1 px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              data-testid="input-player-name"
              onKeyDown={(e) => e.key === 'Enter' && handleNameSubmit()}
            />
            <button 
              onClick={handleNameSubmit}
              disabled={!name.trim()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-save-name">
              Save
            </button>
          </div>
        </div>

        {/* Journal functionality removed */}
        {/* <div>
          <label htmlFor="initial-journal" className="block text-sm font-medium text-foreground mb-2">
            Initial Thoughts (Optional):
          </label>
          <textarea 
            id="initial-journal"
            value={journalEntry}
            onChange={(e) => onJournalChange(e.target.value)}
            placeholder="What are your expectations for this adventure?"
            className="w-full h-24 px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
            data-testid="textarea-initial-journal"
          />
        </div>
        
        <button 
          onClick={onSaveJournal}
          disabled={!journalEntry.trim()}
          className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          data-testid="button-save-initial-journal">
          Save Journal Entry
        </button> */}
      </div>
    </div>
  );
}
