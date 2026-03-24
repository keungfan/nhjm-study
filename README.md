# 🌈 Math Adventure - A Fun Math Learning App for Kids

A colorful, kid-friendly web application designed to help 6-year-olds learn and practice math through interactive exercises. Built with React, TypeScript, and Vite.

## ✨ Features

### 📚 Three Main Learning Modes

1. **Addition (Plus Page)**
   - Randomly generates addition problems with numbers 1-99
   - Interactive number input for answers
   - Visual horizontal and vertical layout options
   - Adjustable number of questions (default: 10)
   - Instant answer checking with score calculation
   - Star rewards (up to 5 stars based on performance)

2. **Subtraction (Minus Page)**
   - Similar to addition with subtraction problems
   - Ensures all problems result in positive numbers
   - Same interactive features as addition

3. **Comparison Test**
   - Compares two math expressions (mix of addition and subtraction)
   - Example: 11 + 12 [?] 23 - 15
   - Three comparison options: `<`, `=`, `>`
   - Tests understanding of calculation and comparison

### 🎨 Kid-Friendly Design

- **Color Scheme:** Cream (#f5e6d3) and violet (#9333ea) gradient background
- **Cartoon Elements:** Rounded corners, colorful buttons, emoji icons
- **Animations:** Bouncing text, floating stars, smooth transitions
- **Responsive Layout:** Works on desktop and tablets
- **Large, Clear Numbers:** Easy to read for young learners
- **Bilingual Support:** English and Vietnamese (default: Vietnamese)
- **Photo Frames:** Display personal photos to make learning more engaging

### ⚙️ Settings & Customization

- Adjustable number of questions (1-50)
- Toggle between vertical and horizontal layout for math problems
- Generate new question sets anytime
- Navigate between questions with Previous/Next buttons

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone or navigate to the project directory:
```bash
cd nhjm-study
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.tsx          # Navigation to all features
│   ├── Plus.tsx          # Addition problems
│   ├── Minus.tsx         # Subtraction problems
│   └── Test.tsx          # Comparison test
├── styles/
│   ├── Home.css          # Home page styling
│   ├── MathPage.css      # Plus & Minus page styling
│   └── Test.css          # Test page styling
├── App.tsx               # Main app with routing
├── App.css               # Global app styles
├── index.css             # Base styles and variables
└── main.tsx              # React entry point
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 How to Use

### For Addition/Subtraction Practice:
1. Click on "Addition" or "Subtraction" button from home
2. Adjust the number of questions if desired
3. Choose vertical or horizontal layout
4. Enter your answer in the input box
5. Navigate through questions using Previous/Next
6. Click "Check Answers" to see your score
7. View your star reward!

### For Comparison Tests:
1. Click on "Test" button from home
2. Look at the two math expressions
3. Click the correct comparison symbol (`<`, `=`, or `>`)
4. Navigate through questions
5. Click "Check Answers" to see how many you got right

### Adding Personal Photos:
1. Add your photos to the `/public/photos/` folder
2. Update `src/components/PhotoFrame.tsx` to include your photo filenames
3. Photos will appear in the photo frames on all pages
4. Kids can select different photos from the dropdown menu

## 🎨 Customization

### Colors
All color variables are defined in `src/index.css`:
- Primary Purple: #9333ea
- Cream Background: #f5e6d3
- Light Violet: #d8b4fe

### Fonts
The app uses "Segoe UI" as the primary font family, which is clean and readable for children.

### Number Range
To change the range of numbers used in problems:
1. Open `src/pages/Plus.tsx`, `src/pages/Minus.tsx`, or `src/pages/Test.tsx`
2. Modify the line with `Math.random() * 99` to your desired range
3. Example: `Math.random() * 50` for numbers 1-50

## 🌐 Browser Support

Works on all modern browsers including:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## 📱 Responsive Design

The app is designed to work on:
- Desktop (1024px and up)
- Tablets (768px - 1024px)
- Large tablets (iPad Pro and similar)

## 🔧 Built With

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **React Router** - Navigation between pages
- **CSS3** - Modern styling with animations

## 📝 License

This project is open source and available for educational use.

## 💡 Tips for Using with Kids

1. Start with fewer questions (5-10) for beginners
2. Use vertical layout for traditional workbook feel
3. Encourage kids to calculate mentally before using paper
4. Celebrate the star achievements!
5. Mix addition and subtraction practice for variety

## 🐛 Known Issues

None currently. Please report any bugs!

## 🚀 Future Enhancements

Potential features for future versions:
- Multiplication and division problems
- Progress tracking and statistics
- Sound effects and additional animations
- Difficulty levels
- Time-based challenges
- Leaderboard system
- Dark mode for evening study sessions

## 👨‍👩‍👧‍👦 For Parents & Teachers

This app is designed to supplement regular math instruction. It's best used:
- For 5-15 minutes daily
- As a fun review activity
- Combined with hands-on math learning
- Not as a replacement for proper instruction

Enjoy learning math together! 🎉

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
