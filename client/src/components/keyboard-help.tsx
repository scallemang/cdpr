export function KeyboardHelp() {
  return (
    <div className="fixed bottom-4 right-4 bg-card border border-border rounded-lg p-4 shadow-lg max-w-xs" data-testid="keyboard-help">
      <h4 className="text-sm font-medium text-foreground mb-2">Keyboard Navigation</h4>
      <div className="space-y-1 text-xs text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Make choice:</span>
          <div className="flex space-x-1">
            <span className="kbd">1</span>
            <span className="kbd">2</span>
            <span className="kbd">3</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>Save journal:</span>
          <span className="kbd">Ctrl+S</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Reset story:</span>
          <span className="kbd">Ctrl+R</span>
        </div>
      </div>
    </div>
  );
}
