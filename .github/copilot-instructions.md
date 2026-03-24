# Math Adventure - Copilot Instructions

## Project Overview
Math Adventure is a React + TypeScript + Vite web application designed to help 6-year-olds learn and practice basic math operations (addition, subtraction, and number comparison) through an interactive, kid-friendly interface. Features bilingual support (English/Vietnamese) with Vietnamese as the default language.

## Architecture

### Technology Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: CSS3 with custom variables and animations
- **Color Scheme**: Cream (#f5e6d3) and Violet (#9333ea)

### Project Structure
```
src/
├── pages/
│   ├── Home.tsx              # Main navigation hub
│   ├── Plus.tsx              # Addition problem generator
│   ├── Minus.tsx             # Subtraction problem generator
│   └── Test.tsx              # Comparison test page
├── styles/
│   ├── Home.css              # Home page styles
│   ├── MathPage.css          # Plus & Minus styles
│   └── Test.css              # Test page styles
├── App.tsx                   # Router configuration
├── App.css                   # Global styles
├── index.css                 # CSS variables & base styles
└── main.tsx                  # Entry point
```

## Key Features

### 1. Addition Practice (Plus Page)
- Randomly generates 1-99 addition problems
- User can set number of questions (1-50, default: 10)
- Vertical/Horizontal layout toggle
- Navigate through questions with Previous/Next buttons
- Instant answer checking and star-based scoring

### 2. Subtraction Practice (Minus Page)
- Same as Plus but ensures positive results
- Numbers arranged so first number ≥ second number

### 3. Comparison Test Page
- Mixes addition and subtraction (e.g., "11+12 [] 23-15")
- Three answer options: `<`, `=`, `>`
- Tests both calculation and logical comparison
- Comparison symbol displayed on separate line for better readability

## Development Guidelines

### Adding New Features
1. Create new page component in `src/pages/`
2. Create corresponding CSS file in `src/styles/`
3. Add route in `App.tsx`
4. Follow existing component patterns

### Styling Conventions
- Use CSS variables from `index.css` for colors
- Class names follow BEM-like naming: `.component-name`, `.component-name__element`
- Use flexbox/grid for layouts
- Include mobile responsiveness with @media queries

### Color System
```css
:root {
  --text: #6b21a8;           /* Main text */
  --text-h: #4c1d95;         /* Headings */
  --bg: #f5e6d3;             /* Background */
  --border: #d8b4fe;         /* Borders */
  --accent: #9333ea;         /* Primary accent */
}
```

### Component Patterns
- Use `useState` for local state management
- Use `useEffect` for question generation
- Use `Link` from React Router for navigation
- Always destructure props
- Use TypeScript interfaces for type safety

## Running the Project

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start Vite dev server (localhost:5173)
```

### Production
```bash
npm run build        # Build optimized bundle
npm run preview      # Preview production build
```

### Linting
```bash
npm run lint         # Run ESLint
```

## Common Tasks

### To Change Number Range
Edit the `generateQuestions()` function:
```typescript
const num1 = Math.floor(Math.random() * 99) + 1;  // Change 99 to desired max
```

### To Modify Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --accent: #9333ea;  /* Change primary color */
}
```

### To Add Settings
1. Add state variable in component
2. Add input in settings panel
3. Update generateQuestions() to use new setting
4. Persist in localStorage if needed

## Performance Considerations
- Questions are generated client-side, no API calls
- CSS animations use `transform` and `opacity` for smooth performance
- Bundle size is optimized with Vite tree-shaking

## Accessibility Notes
- Large buttons and input fields for small hands
- High contrast colors for visibility
- Clear emoji icons for non-readers
- Responsive design for various screen sizes

## Testing the App
1. Test each math mode (Plus, Minus, Test)
2. Verify number ranges are correct
3. Check layout toggle (vertical/horizontal)
4. Test answer validation
5. Verify responsive design on tablets

## Browser Compatibility
- Chrome/Edge (v90+)
- Firefox (v87+)
- Safari (v14+)

## Troubleshooting

### Build Errors
- Clear `node_modules` and run `npm install`
- Check for TypeScript errors with `npm run build`

### Dev Server Issues
- Kill any process on port 5173: `netstat -ano | findstr :5173`
- Clear `.vite` cache: delete `node_modules/.vite`

## Future Enhancement Ideas
- Multiplication/division modules
- User progress tracking with localStorage
- Sound effects and achievements
- Difficulty levels
- Custom number ranges
- Timed challenges
- Multi-user profiles

## Contributing Notes
- Keep components focused and reusable
- Write clear TypeScript types
- Test responsive design on multiple screen sizes
- Maintain the kid-friendly aesthetic
- Add comments for complex logic
