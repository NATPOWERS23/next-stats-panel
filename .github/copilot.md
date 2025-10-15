# GitHub Copilot Development Guidelines

## Project Overview

This is a Next.js 14+ stats panel application with authentication, dashboard, and data visualization features. The app integrates with Twitch, NASA APIs (current usage for News, update to the website news in the future), and provides event management capabilities.

## Tech Stack

### Core Framework
- **Next.js 14.2.7** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.x** - Type safety

### Authentication & Authorization
- **Clerk** (@clerk/nextjs) - Authentication and user management
- Role-based access control (member, channel_owner, admin)

### Database & Backend
- **MongoDB** with **Mongoose** - Database and ODM
- Next.js API routes for backend functionality

### UI & Styling
- **Tailwind CSS 3.4.16** - Utility-first CSS framework
- **CSS Modules** - Component-scoped styles
- Custom color palette and design system
- Local fonts (CoFo Sans family)

### Data Visualization
- **@nivo/bar** & **@nivo/core** - Chart libraries
- **Victory** - Additional charting library
- **FullCalendar** - Calendar components

### Development & Testing
- **Jest** - Testing framework
- **@testing-library/react** - Component testing
- **Biome** - Code formatting and linting
- **TypeScript** - Static type checking

### External APIs
- **NASA DONKI API** - Space weather data
- **Twitch API** - Channel integration
- **Axios** - HTTP client

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication routes (grouped)
│   ├── api/               # API route handlers
│   ├── client/            # Client dashboard
│   └── crm/               # CRM features
├── components/            # Reusable UI components
├── constants/             # Application constants
├── contexts/              # React Context providers
├── db/                    # Database configuration and models
│   ├── actions/          # Database action functions
│   └── models/           # Mongoose schemas
├── features/              # Feature-specific code
├── helpers/               # Utility helper functions
├── hooks/                 # Custom React hooks
├── mocks/                 # Mock data for development/testing
├── modals/                # Modal components
├── services/              # External API services
├── styles/                # Global styles and CSS modules
├── types/                 # TypeScript type definitions
└── utils/                 # General utility functions
```

## Component Architecture

### Component Patterns

#### 1. Functional Components with TypeScript
```tsx
export default function ComponentName({
  prop1,
  prop2 = "default",
}: {
  prop1: string;
  prop2?: string;
}) {
  return <div>{prop1}</div>;
}
```

#### 2. Props Interface Pattern
- Use inline type definitions for simple components
- Create separate interfaces in `/types` for complex shared types
- Always provide default values for optional props

#### 3. Client Components
- Use `"use client"` directive for components requiring browser APIs
- Common for components with state, event handlers, or context usage

#### 4. Component Structure
```
ComponentName/
├── ComponentName.tsx      # Main component
├── ComponentName.module.css # Component styles (if needed)
└── ComponentName.spec.tsx # Component tests
```

### Styling Guidelines

#### Tailwind Usage
- Primary approach using custom color palette:
  ```css
  colors: {
    'black': '#161616',
    'white': '#f5f5f5', 
    'grey': '#232323',
    'grey-light': '#444444',
    'green': '#1c9b56',
    'twitch': '#5c16c5'
  }
  ```

#### CSS Modules for Complex Styles
- Use for animations, complex layouts, or vendor overrides
- Naming: `ComponentName.module.css`

#### Style Organization
```css
@tailwind base;
@tailwind components; 
@tailwind utilities;

/* Import organized styles */
@import 'base/_reset.css';
@import 'components/_card.css';
@import 'utilities/_helpers.css';
```

## API Design Patterns

### API Route Structure
```typescript
// app/api/[resource]/route.ts
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const param = searchParams.get('param');
    
    // Validation
    if (!param) {
      return new Response(JSON.stringify({ error: 'Param required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Business logic
    const result = await someAction(param);
    
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
```

### Database Actions Pattern
```typescript
// db/actions/resource.action.ts
export async function createResource(data: ResourceData) {
  try {
    await connect();
    
    // Validation
    if (!data.userId || !Types.ObjectId.isValid(data.userId)) {
      throw new Error("Invalid User ID");
    }
    
    const result = await ResourceModel.create(data);
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.error("Create Resource Error: ", error);
    throw error;
  }
}
```

## TypeScript Patterns

### Interface Naming
- Use PascalCase: `UserEvent`, `ChartData`
- Suffix with descriptive words: `EventInterface`, `ResponseData`

### Type Definitions
```typescript
// types/resource.interface.ts
export interface UserEvent {
  _id?: string;
  userId: string;
  title: string;
  description?: string;
  startDate: string;
  endDate?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface NewEventState {
  title: string;
  startDate: string;
  startTime: string;
  endDate?: string;
  endTime?: string;
  description?: string;
}
```

### Generic Response Types
```typescript
export interface Response<T> { 
  data: T
}

export interface PaginateResponse<T> extends Response<T> {
  pagination: PaginationInfo
}
```

## State Management

### Context Pattern
```tsx
// contexts/useResource.tsx
"use client";

const ResourceContext = createContext({
  resource: null,
  setResource: () => {},
});

const ResourceProvider = ({ children }: { children: React.ReactNode }) => {
  const [resource, setResource] = useState(null);
  
  return (
    <ResourceContext.Provider value={{ resource, setResource }}>
      {children}
    </ResourceContext.Provider>
  );
};
```

### Custom Hooks Pattern
```typescript
// hooks/useResource.ts
export const useResource = (id?: string) => {
  const [resource, setResource] = useState<ResourceType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchResource = useCallback(async () => {
    if (!id) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/resource?id=${id}`);
      if (!response.ok) throw new Error("Failed to fetch");
      
      const data = await response.json();
      setResource(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  return { resource, isLoading, error, fetchResource };
};
```

## Testing Patterns

### Component Testing
```tsx
// ComponentName.spec.tsx
import React from 'react';
import { render } from '@testing-library/react';
import ComponentName from './ComponentName';

// Mock CSS modules
jest.mock('./ComponentName.module.css', () => ({
  className: 'mockClassName',
}));

describe('ComponentName', () => {
  it('renders without crashing', () => {
    const { container } = render(<ComponentName />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders with correct props', () => {
    const { getByText } = render(
      <ComponentName prop="test value" />
    );
    expect(getByText('test value')).toBeInTheDocument();
  });
});
```

### Utility Testing
```typescript
// utils/utility.spec.ts
import { utilityFunction } from './utility';

describe('utilityFunction', () => {
  it('returns expected result for valid input', () => {
    const result = utilityFunction('input');
    expect(result).toBe('expected');
  });

  it('handles edge cases correctly', () => {
    expect(utilityFunction('')).toBe('default');
    expect(utilityFunction(null)).toBe('default');
  });
});
```

## Code Conventions

### File Naming
- **Components**: PascalCase (`Button.tsx`, `UserCard.tsx`)
- **Pages**: lowercase (`page.tsx`, `layout.tsx`) 
- **Hooks**: camelCase with `use` prefix (`useEvents.ts`)
- **Types**: kebab-case (`user-event.interface.ts`)
- **Actions**: kebab-case (`event.action.ts`)

### Import Organization
```typescript
// 1. React/Next imports
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

// 2. Third-party libraries
import axios from 'axios';
import { useUser } from '@clerk/nextjs';

// 3. Internal imports (use @ alias)
import Button from '@/components/Button/Button';
import { UserEvent } from '@/types/event.interface';
import { createEvent } from '@/db/actions/event.action';

// 4. Relative imports
import styles from './Component.module.css';
```

### Error Handling
- Always use try-catch in async functions
- Provide meaningful error messages
- Log errors with context
- Return proper HTTP status codes in API routes

### Constants
```typescript
// constants/errors.ts
export const ERROR_MESSAGES = {
  USER_NOT_FOUND: 'User not found',
  INVALID_ID: 'Invalid ID provided',
} as const;

// constants/roles.ts
export const ROLES = {
  ADMIN: 'org:admin',
  MEMBER: 'org:member',
  CHANNEL_OWNER: 'org:channel_owner',
} as const;
```

## Development Workflow

### Branching Strategy

#### Master Branch - Structure Only
- **Purpose**: Contains only the structural/functional implementation of features
- **What to include**:
  - Component logic and functionality
  - TypeScript interfaces and types
  - Database models and actions
  - API routes and business logic
  - Custom hooks for state management
  - Basic HTML structure with semantic elements
  - Minimal or no styling classes
- **What to avoid**: Tailwind CSS classes, styling-specific code

#### UI Branch - Styling Implementation  
- **Purpose**: Adds Tailwind CSS styling to the structural components from master
- **What to include**:
  - Tailwind CSS classes for visual design
  - Component styling and layout
  - Color schemes and design tokens
  - Responsive design classes
  - Animation and transition classes
- **Benefits**:
  - Easy switching to different styling approaches (CSS-in-JS, Styled Components, etc.)
  - Clean separation of concerns
  - Ability to completely redesign UI without touching core functionality
  - Multiple UI themes/variants possible from same structural base

#### Branch Workflow
1. **New Features**: Implement structure and logic on `master` branch first
2. **Styling**: Switch to `UI` branch to add Tailwind classes and visual design
3. **Testing**: Test functionality on `master`, visual design on `UI`
4. **Deployment**: Deploy from `UI` branch for styled version

### Adding New Features
1. **On Master Branch**:
   - Create types in `/types` if needed
   - Add database models/actions in `/db`
   - Create API routes in `/app/api`
   - Build UI components in `/components` (structure only)
   - Create custom hooks in `/hooks` for state management
   - Add tests for components and utilities
   - Use semantic HTML without styling classes

2. **On UI Branch**:
   - Add Tailwind CSS classes to components
   - Implement responsive design
   - Add animations and visual polish
   - Test visual design and user experience

### Code Quality
- Use TypeScript strict mode
- Format with Biome
- Write tests for new components and utilities
- Follow established naming conventions
- Use semantic HTML elements
- Ensure accessibility with proper ARIA labels

This guide should be updated as new patterns emerge or existing patterns evolve.