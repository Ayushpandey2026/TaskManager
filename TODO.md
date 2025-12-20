# TODO: Fix TypeScript Build Errors

## Step 1: Update type-only imports
- [x] Update Button.tsx: Change `import { ButtonHTMLAttributes }` to `import type { ButtonHTMLAttributes }`
- [x] Update Input.tsx: Change `import { InputHTMLAttributes }` to `import type { InputHTMLAttributes }`
- [x] Update Modal.tsx: Change `import { ReactNode }` to `import type { ReactNode }`
- [x] Update ProtectedRoute.tsx: Change `import { ReactNode }` to `import type { ReactNode }`

## Step 2: Fix task schema
- [x] Update task.schema.ts: Remove `.default("To Do")` from status to make it required

## Step 3: Remove unused variables
- [x] Update useSocket.ts: Remove unused 'data' parameter in callback
- [x] Update Dashboard.tsx: Remove unused 'isLoading' variable

## Step 4: Update TaskList component
- [x] Update TaskList.tsx: Add props interface to accept tasks: Task[] and showFilters?: boolean, use props if provided else use useTasks
