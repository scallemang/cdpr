import { StoryChapter as StoryChapterType, UserData } from "@shared/schema";
import { generateDynamicEndingContent } from "@/lib/story-data";

interface StoryChapterProps {
  chapter: StoryChapterType;
  userData: UserData;
}

export function StoryChapter({ chapter, userData }: StoryChapterProps) {
  return (
    <div className="story-chapter bg-card rounded-lg shadow-lg p-8 mb-8 fade-in" data-testid="story-chapter">
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
          {chapter.id === "game-over" ? 
            generateDynamicEndingContent(userData) :
            (typeof chapter.content === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: chapter.content }} />
            ) : (
              chapter.content
            ))
          }
        </div>
      </div>
    </div>
  );
}
