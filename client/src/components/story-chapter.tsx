import { StoryChapter as StoryChapterType, UserData } from "@shared/schema";

interface StoryChapterProps {
  chapter: StoryChapterType;
  userData: UserData;
}

export function StoryChapter({ chapter, userData }: StoryChapterProps) {
  return (
    <div className="bg-card rounded-lg border border-border shadow-sm p-8 mb-8 fade-in" data-testid="story-chapter">
      <div className="story-prose max-w-none">
        <h1 data-testid="chapter-title">{chapter.title}</h1>
        
        {chapter.image && (
          <img 
            src={chapter.image}
            alt={chapter.imageAlt || "Story illustration"}
            className="rounded-lg shadow-md w-full h-64 object-cover my-6"
            data-testid="story-image"
          />
        )}

        <div data-testid="story-content">
          {typeof chapter.content === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: chapter.content }} />
          ) : (
            chapter.content
          )}
        </div>
      </div>
    </div>
  );
}
