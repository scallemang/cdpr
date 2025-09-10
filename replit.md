# Interactive Story Engine

## Overview

This is a full-stack interactive story application built with React, Express, and TypeScript. The application presents users with an immersive choose-your-own-adventure experience where players make decisions that shape their narrative journey. The system tracks user progress, maintains journal entries, and provides a rich UI with keyboard navigation support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React hooks with localStorage persistence for story state
- **Data Fetching**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for story progress management
- **Storage Strategy**: Dual storage implementation with in-memory storage for development and database-ready interfaces
- **Validation**: Zod schemas for request/response validation
- **Development**: Vite middleware integration for hot module replacement

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Migration Management**: Drizzle Kit for schema migrations
- **Schema Design**: 
  - Users table with authentication fields
  - Story progress table with JSON fields for flexible data storage
  - Support for visited chapters, user data, and journal entries
- **Development Storage**: In-memory storage implementation for rapid development

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Model**: Simple username/password authentication system
- **Progress Tracking**: User-specific story progress and journal entries

### Story Content Architecture
- **Content Structure**: Modular chapter system with choices and branching narratives
- **Media Support**: Image integration with alt text for accessibility
- **Interactive Elements**: Keyboard-driven choice selection with visual feedback
- **Progress Tracking**: Comprehensive progress indicators and achievement tracking

### User Experience Features
- **Keyboard Navigation**: Full keyboard support with customizable hotkeys
- **Progress Visualization**: Real-time progress bars and chapter tracking
- **Journal System**: User-generated content storage and retrieval
- **Responsive Design**: Mobile-first design with adaptive layouts
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Connection**: Environment-based DATABASE_URL configuration

### UI and Styling Libraries
- **Radix UI**: Comprehensive component primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants

### Development Tools
- **Vite**: Fast build tool with HMR support
- **ESBuild**: Bundle optimization for production
- **Replit Integration**: Development environment specific tooling

### Utility Libraries
- **Date-fns**: Date manipulation and formatting
- **Clsx**: Conditional className utilities
- **Nanoid**: Unique ID generation
- **Zod**: Runtime type validation and schema definition

### State Management
- **TanStack Query**: Server state synchronization and caching
- **React Hook Form**: Form state management with validation
- **Local Storage**: Client-side persistence for story progress