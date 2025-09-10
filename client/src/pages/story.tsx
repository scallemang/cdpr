import { useState, useEffect } from "react";
import { StoryChapter } from "@/components/story-chapter";
import { ChoicePanel } from "@/components/choice-panel";
import { UserDataCollector } from "@/components/user-data-collector";
import { ProgressIndicator } from "@/components/progress-indicator";
import { KeyboardHelp } from "@/components/keyboard-help";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";
import { useStoryState } from "@/lib/story-state";
import { storyChapters } from "@/lib/story-data";
import { UserData } from "@shared/schema";

export default function Story() {
  const {
    currentChapterId,
    userData,
    visitedChapters,
    setCurrentChapter,
    updateUserData,
    // addJournalEntry, // Commented out - journal functionality removed
  } = useStoryState();

  const currentChapter = storyChapters.find(ch => ch.id === currentChapterId);
  
  // const [journalEntry, setJournalEntry] = useState(""); // Commented out - journal functionality removed

  const handleChoice = (choiceId: string) => {
    const choice = currentChapter?.choices.find(c => c.id === choiceId);
    if (choice) {
      setCurrentChapter(choice.nextChapterId);
    }
  };

  // const handleSaveJournal = () => { // Commented out - journal functionality removed
  //   if (journalEntry.trim()) {
  //     addJournalEntry(currentChapterId, journalEntry);
  //     setJournalEntry("");
  //   }
  // };

  const handleUserNameUpdate = (name: string) => {
    updateUserData({ ...userData, name });
  };

  useKeyboardNavigation({
    choices: currentChapter?.choices || [],
    onChoice: handleChoice,
    onSave: () => {}, // Dummy function - journal functionality removed
  });

  if (!currentChapter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Story Not Found</h1>
          <p className="text-muted-foreground">The requested chapter could not be loaded.</p>
        </div>
      </div>
    );
  }

  // Show welcome screen if no user name is set
  if (!userData.name) {
    return (
      <div className="min-h-screen bg-background">
        {/* Simple header for welcome screen */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-display font-bold text-foreground tracking-tight" data-testid="story-title">
              Story Engine
            </h1>
          </div>
        </header>

        {/* Welcome screen content */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          <UserDataCollector 
            onNameUpdate={handleUserNameUpdate}
          />
        </main>
      </div>
    );
  }

  const progressPercentage = Math.round((visitedChapters.length / storyChapters.length) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-display font-bold text-foreground tracking-tight" data-testid="story-title">
              Story Engine
            </h1>
            <span className="text-sm text-muted-foreground" data-testid="chapter-indicator">
              {currentChapter.title}
            </span>
          </div>
          
          {/* User Data Display */}
          <div className="flex items-center space-x-4">
            <div className="text-sm text-muted-foreground">
              <span>Player: </span>
              <span className="font-medium text-foreground" data-testid="player-name">
                {userData.name}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Story Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <StoryChapter chapter={currentChapter} userData={userData} />
        
        <ChoicePanel 
          choices={currentChapter.choices} 
          onChoice={handleChoice} 
        />

        {/* Journal Entry Section for Named Users - REMOVED */}
        {/* <div className="bg-muted/30 rounded-lg border border-border p-6 mb-8">
          <h3 className="text-lg font-medium text-foreground mb-4">Update Your Journal</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Record your thoughts about this part of your journey. This information will be remembered throughout your adventure.
          </p>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="journal-entry" className="block text-sm font-medium text-foreground mb-2">
                Journal Entry:
              </label>
              <textarea 
                id="journal-entry"
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                placeholder="What do you make of this situation? Your observations might prove useful later..."
                className="w-full h-24 px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
                data-testid="textarea-journal"
              />
            </div>
            
            <button 
              onClick={handleSaveJournal}
              disabled={!journalEntry.trim()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-save-journal">
              Save Entry
            </button>
          </div>
        </div> */}

        <ProgressIndicator 
          currentChapter={visitedChapters.length}
          totalChapters={storyChapters.length}
          progressPercentage={progressPercentage}
          chaptersVisited={visitedChapters.length}
          entriesCount={0} /* Journal functionality removed */
        />
      </main>

      <KeyboardHelp />
    </div>
  );
}
