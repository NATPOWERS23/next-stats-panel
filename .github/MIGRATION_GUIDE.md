# Next.js 14 → 15 Migration Guide

## Phase 1: Install Dependencies

Run the following commands to update your dependencies:

```bash
# Remove old packages
npm uninstall moment @babel/plugin-transform-react-jsx @babel/preset-env @babel/preset-typescript cross-spawn identity-obj-proxy npm babel-jest ts-jest ts-node

# Install updated packages
npm install next@^15.5.6 @clerk/nextjs@^6.33.7 @clerk/themes@^2.1.54 dayjs@^1.11.18 axios@^1.7.9 mongodb@^6.20.0 mongoose@^8.19.1 svix@^1.44.0 victory@^37.3.2

# Update FullCalendar
npm install @fullcalendar/core@^6.1.16 @fullcalendar/daygrid@^6.1.16 @fullcalendar/interaction@^6.1.16 @fullcalendar/react@^6.1.16

# Update dev dependencies  
npm install --save-dev @biomejs/biome@^1.9.7 eslint@^9.18.0 eslint-config-next@^15.5.6 @testing-library/jest-dom@^6.6.3 @testing-library/react@^16.1.0 @types/node@^22.10.6 @types/react@^18.3.18 @types/react-dom@^18.3.5 @types/lodash@^4.17.13 typescript@^5.7.2 identity-obj-proxy@^3.0.0

# Install day.js plugins
npm install dayjs/plugin/utc dayjs/plugin/duration
```

## Phase 2: Replace Configuration Files

### 1. Replace package.json
Copy the new package.json content provided above.

### 2. Update next.config.mjs
- Replace `domains` with `remotePatterns` for image configuration
- Enable React Strict Mode
- Add Turbopack configuration for faster development

### 3. Update tsconfig.json  
- Add `verbatimModuleSyntax` for better module handling
- Clean up include/exclude arrays

### 4. Migrate to ESLint 9 (Flat Config)
- Delete `.eslintrc.json` if it exists
- Create new `eslint.config.js` with flat config format

### 5. Update Jest Configuration
- Use Next.js Jest integration
- Add proper module mapping
- Create `jest.setup.js` file

## Phase 3: Code Migration

### 1. Clerk Authentication (v5 → v6)

**Middleware Changes:**
- `auth()` is now async - add `await` keyword
- `auth().protect()` is now `await auth.protect()`
- Update matcher configuration for better performance

**Key Changes in middleware.ts:**
```typescript
// OLD (v5)
export default clerkMiddleware((auth, request) => {
  const { userId } = auth();
  if (!isPublicRoute(request)) {
    auth().protect()
  }
});

// NEW (v6) 
export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth();
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});
```

### 2. Moment.js → Day.js Migration

**Files to Update:**
1. `src/utils/chartApiDataFormatter.ts`
2. `src/utils/dateFormatter.ts` 
3. `src/utils/chartApiDataFormatter.spec.ts`
4. `src/helpers/delay.spec.ts` (if it uses moment)

**Key API Changes:**
```typescript
// OLD (moment)
import moment from 'moment';
moment().format('MM-DD')
moment.utc(date).format('HH')
moment.duration(endDate.diff(startDate))

// NEW (dayjs)
import dayjs from './utils/dayjs';
dayjs().format('MM-DD') 
dayjs.utc(date).format('HH')
dayjs.duration(endDate.diff(startDate))
```

### 3. Component Updates

**Calendar Components:**
- Ensure FullCalendar components have `'use client'` directive
- Update import paths if needed
- Test event handling with new versions

**Chart Components (@nivo, victory):**
- Add `'use client'` directive to chart components
- Verify SSR compatibility 
- Consider lazy loading for better performance

## Phase 4: Database & API Updates

### 1. MongoDB/Mongoose Updates
- Update connection string handling for MongoDB 6.20.0
- Check for deprecated methods in Mongoose 8.19.1
- Update TypeScript types for models

### 2. API Routes
- Verify Route Handler compatibility with Next.js 15
- Update webhook handling with Svix 1.44.0
- Replace axios with native fetch where appropriate

## Phase 5: Testing & Validation

### 1. Update Test Files
- Replace moment imports with dayjs in test files
- Update Jest configuration for Next.js 15
- Fix any breaking test patterns

### 2. Type Checking
```bash
npm run type-check
```

### 3. Linting
```bash
npm run lint
```

### 4. Build Test
```bash
npm run build
```

## Breaking Changes Summary

### Critical Breaking Changes:
1. **Clerk v6**: `auth()` is now async
2. **Moment.js removal**: All date handling needs updating
3. **ESLint 9**: Completely new configuration format
4. **Next.js 15**: Image domains → remotePatterns

### Non-Breaking Updates:
- React stays at 18.x (compatible with Next.js 15)
- FullCalendar updates are patch versions
- Database drivers are minor updates
- Most dev tools are compatible

## File Replacement Order

Execute replacements in this order to avoid dependency issues:

1. Replace `package.json` and run `npm install`
2. Replace configuration files (`next.config.mjs`, `tsconfig.json`, etc.)
3. Create `src/utils/dayjs.ts` utility
4. Replace moment.js files with dayjs versions
5. Update `src/middleware.ts` for Clerk v6
6. Test and fix any remaining issues

## Post-Migration Checklist

- [ ] All packages installed successfully
- [ ] TypeScript compilation passes
- [ ] ESLint passes with new config
- [ ] Jest tests pass
- [ ] Development server starts
- [ ] Build completes successfully
- [ ] Authentication flows work
- [ ] Calendar components render
- [ ] Chart components render
- [ ] Date formatting works correctly
- [ ] Database connections work
- [ ] API routes respond correctly

## Rollback Strategy

If issues occur, you can rollback by:
1. Restore original `package.json`
2. Run `npm install`
3. Restore original configuration files
4. Restore original source files

Keep backups of all modified files before starting migration.