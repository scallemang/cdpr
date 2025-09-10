interface ProgressIndicatorProps {
  currentChapter: number;
  totalChapters: number;
  progressPercentage: number;
  chaptersVisited: number;
  entriesCount: number;
}

export function ProgressIndicator({ 
  currentChapter, 
  totalChapters, 
  progressPercentage, 
  chaptersVisited, 
  entriesCount 
}: ProgressIndicatorProps) {
  return (
    <div className="bg-card rounded-lg border border-border p-4" data-testid="progress-indicator">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">Story Progress</span>
        <span className="text-xs text-muted-foreground" data-testid="progress-chapters">
          Chapter {currentChapter} of {totalChapters}
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-300" 
          style={{ width: `${progressPercentage}%` }}
          data-testid="progress-bar"
        />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground mt-2">
        <span data-testid="text-chapters-visited">
          Chapters visited: <span className="font-medium">{chaptersVisited}</span>
        </span>
        <span data-testid="text-entries-count">
          Journal entries: <span className="font-medium">{entriesCount}</span>
        </span>
      </div>
    </div>
  );
}
