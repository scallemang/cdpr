# Interactive Story Engine

A TypeScript-based choose-your-own-adventure story application built with React, Express, and Vite. This application presents users with an immersive storytelling experience where choices shape the narrative journey, complete with keyboard navigation and persistent user data.

## Features

- **Interactive Storytelling**: Rich, branching narratives with multiple paths
- **Keyboard Navigation**: Navigate choices using number keys (1, 2, 3) or mouse clicks
- **User Data Persistence**: Player name and journal entries are saved across sessions
- **Progress Tracking**: Visual progress indicators showing story completion
- **Journal System**: Players can record thoughts and observations at each chapter
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Rich Content**: Support for text, images, and custom JSX content

## Getting Started

### Running the Application

The application uses a single workflow that starts both the frontend and backend:

```bash
npm run dev
```

This command:
- Starts the Express server on port 5000
- Serves the React frontend through Vite
- Enables hot module replacement for development

### Project Structure

```
├── client/                     # Frontend React application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── ui/            # Shadcn/ui component library
│   │   │   ├── story-chapter.tsx      # Story content display
│   │   │   ├── choice-panel.tsx       # Interactive choice buttons
│   │   │   ├── user-data-collector.tsx # Name and journal input
│   │   │   ├── progress-indicator.tsx  # Progress visualization
│   │   │   └── keyboard-help.tsx      # Keyboard shortcuts help
│   │   ├── hooks/             # Custom React hooks
│   │   │   ├── use-keyboard-navigation.tsx # Keyboard event handling
│   │   │   └── use-toast.ts           # Toast notifications
│   │   ├── lib/               # Utility libraries and data
│   │   │   ├── story-data.tsx         # Story content and chapters
│   │   │   ├── story-state.ts         # State management with localStorage
│   │   │   ├── queryClient.ts         # TanStack Query configuration
│   │   │   └── utils.ts               # General utilities
│   │   ├── pages/             # Application pages
│   │   │   ├── story.tsx              # Main story page
│   │   │   └── not-found.tsx          # 404 page
│   │   ├── App.tsx            # Root application component
│   │   ├── main.tsx           # Application entry point
│   │   └── index.css          # Global styles and CSS variables
│   └── index.html             # HTML template
├── server/                     # Backend Express application
│   ├── index.ts               # Server entry point
│   ├── routes.ts              # API route definitions
│   ├── storage.ts             # Data storage interface and implementation
│   └── vite.ts                # Vite development middleware
├── shared/                     # Shared TypeScript types and schemas
│   └── schema.ts              # Database schemas and story types
├── package.json               # Dependencies and scripts
├── vite.config.ts             # Vite configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## Updating Story Content

### Adding New Chapters

Story content is defined in `client/src/lib/story-data.tsx`. Each chapter is a `StoryChapter` object with the following structure:

```typescript
{
  id: "unique-chapter-id",
  title: "Chapter Title",
  content: (
    <>
      <p>Your story content goes here. You can use JSX!</p>
      <p>Add multiple paragraphs, <strong>bold text</strong>, or any HTML.</p>
    </>
  ),
  image: "https://example.com/image.jpg", // Optional
  imageAlt: "Description of the image",    // Optional
  choices: [
    {
      id: "choice-1",
      text: "Choice text that appears on the button",
      description: "Optional description for more context",
      nextChapterId: "where-this-choice-leads",
      keyboardKey: "1"
    }
  ]
}
```

### Story Structure Guidelines

1. **Chapter IDs**: Use descriptive, kebab-case IDs (e.g., "forest-entrance", "mountain-peak")
2. **Choice Keys**: Assign keyboard shortcuts ("1", "2", "3", etc.) for each choice
3. **Branching**: Each choice's `nextChapterId` should match an existing chapter's `id`
4. **End Chapters**: Chapters with no choices represent story endings
5. **Images**: Use publicly accessible URLs or place images in the `attached_assets` folder

### Content Tips

- Use JSX for rich formatting: `<strong>`, `<em>`, `<p>`, etc.
- Break up long paragraphs for better readability
- Include 2-4 choices per chapter for optimal user experience
- Write descriptive choice text that hints at consequences
- Use images sparingly to enhance key moments

## Technical Architecture

### Frontend
- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS** with custom design system
- **Shadcn/ui** for consistent, accessible components
- **TanStack Query** for server state management
- **Wouter** for lightweight client-side routing

### Backend
- **Express** server with TypeScript
- **In-memory storage** for development (easily replaceable with database)
- **Zod** for request/response validation
- **RESTful API** design for story progress management

### Data Persistence
- **LocalStorage** for client-side state persistence
- **Story Progress API** for future server-side persistence
- **JSON-based** storage for flexibility

## Customization

### Styling and Theming

The application uses CSS custom properties for theming. Update colors in `client/src/index.css`:

```css
:root {
  --background: hsl(0 0% 100%);
  --foreground: hsl(224 71% 4%);
  --primary: hsl(262 83% 58%);
  /* ... more variables */
}
```

### Adding Features

1. **New Data Fields**: Update the `UserData` interface in `shared/schema.ts`
2. **Additional UI Components**: Create new components in `client/src/components/`
3. **Custom Hooks**: Add reusable logic in `client/src/hooks/`
4. **API Endpoints**: Extend `server/routes.ts` for new functionality

### Keyboard Shortcuts

Current shortcuts are defined in `client/src/hooks/use-keyboard-navigation.tsx`:
- **1, 2, 3**: Select story choices
- **Ctrl+S**: Save journal entry
- **Ctrl+R**: Reset story (placeholder)

## Development Notes

### File Naming
- Components use PascalCase: `StoryChapter.tsx`
- Utilities use kebab-case: `story-data.tsx`
- Hooks use camelCase with "use" prefix: `useKeyboardNavigation.tsx`

### State Management
- Story progress is managed through `useStoryState()` hook
- Data persists automatically to localStorage
- Server endpoints are ready for database integration

### Performance
- Images are lazy-loaded and optimized
- State updates are batched for efficiency
- Components use proper React patterns to prevent unnecessary rerenders

## Future Enhancements

- Database integration for persistent storage
- User authentication and accounts
- Story analytics and progress tracking
- Multiplayer or collaborative storytelling
- Story editor interface for non-technical users
- Audio narration support
- Achievement system
- Story sharing and community features

## Troubleshooting

### Common Issues

1. **Port 5000 in use**: Kill existing processes or restart the workflow
2. **TypeScript errors**: Check imports and ensure all dependencies are installed
3. **Story not updating**: Clear localStorage or check for JavaScript errors
4. **Images not loading**: Verify image URLs are accessible

### Debug Mode

Enable additional logging by setting environment variables in development:
```bash
DEBUG=true npm run dev
```

## Contributing

When modifying the story or adding features:
1. Test all story paths to ensure no broken links
2. Verify keyboard navigation works for new choices
3. Check that progress tracking updates correctly
4. Ensure mobile responsiveness is maintained
5. Update this README if you add new features or change the structure