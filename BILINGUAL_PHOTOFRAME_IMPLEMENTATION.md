# Math Adventure - Bilingual & Photo Frame Implementation

## Changes Made

### 1. **Bilingual Support (English & Vietnamese)**
The application now supports two languages:
- **English** - Default language
- **Vietnamese** (Tiếng Việt)

#### How it works:
- Language selection is stored in browser's localStorage
- Users can switch languages using the Language Switcher component in the top-right corner
- All UI text is automatically translated including:
  - Page titles and headings
  - Button labels
  - Navigation texts
  - Instructions and messages
- **Default language: Vietnamese (Tiếng Việt)**

#### Key Files Added:
- `src/i18n.ts` - i18next configuration with translation resources
- `src/locales/en.json` - English translations (no longer needed as translations are now inline)
- `src/locales/vi.json` - Vietnamese translations (no longer needed as translations are now inline)
- `src/components/LanguageSwitcher.tsx` - Language switcher component
- `src/styles/LanguageSwitcher.css` - Styling for language switcher

### 2. **Photo Frame Feature**
Two photo frames have been added to each page:
- **Home Page** - 2 photo frames displayed below the main navigation buttons
- **Plus/Minus/Test Pages** - 2 photo frames displayed in a sidebar on the right

#### How to Add Photos:
1. Navigate to the `/public/photos/` folder
2. Add image files (JPG, JPEG, PNG, GIF, WEBP formats supported)
3. Update the `knownPhotos` array in `src/components/PhotoFrame.tsx` to include your new image filenames
4. Example:
   ```typescript
   const knownPhotos = [
     'HAI_6345.jpg',
     'IMG_20240616_125336.jpg',
     'IMG_20250921_200939.jpg',
     'your-new-photo.jpg'  // Add your new photo here
   ];
   ```
5. The photo frames will automatically display the available photos in the dropdown

#### Key Files Added:
- `src/components/PhotoFrame.tsx` - Photo frame component with photo selection
- `src/styles/PhotoFrame.css` - Styling for photo frames
- `public/photos/` - Directory for storing photos

### 3. **Updated Pages with i18n & PhotoFrame**
All pages now include:
- Language switcher component
- Photo frame components (2 on each page)
- Translation support for all text

#### Updated Files:
- `src/pages/Home.tsx` - Home page with language switcher and photo frames
- `src/pages/Plus.tsx` - Addition practice page with i18n and sidebar layout
- `src/pages/Minus.tsx` - Subtraction practice page with i18n and sidebar layout
- `src/pages/Test.tsx` - Comparison test page with i18n and sidebar layout

### 4. **Styling Updates**
- All pages now use a responsive layout with header, main content, and sidebar
- Added `LanguageSwitcher.css` for language switcher styling
- Added `PhotoFrame.css` for photo frame styling
- Updated `MathPage.css` and `Test.css` for new layout structure
- Mobile-responsive design with media queries for tablets and phones

### 5. **Configuration Updates**
- `tsconfig.app.json` - Added `resolveJsonModule: true` for JSON support
- `main.tsx` - Added i18n initialization before app rendering
- `package.json` - Added dependencies: `i18next` and `react-i18next`

## Dependencies Added
```json
{
  "i18next": "^24.0.0+",
  "react-i18next": "^14.0.0+"
}
```

## How to Use

### To Add More Photos:
1. Copy your image files to `/public/photos/`
2. Supported formats: JPG, JPEG, PNG, GIF, WEBP
3. Refresh the browser - photos will appear automatically in the dropdown

### To Change Language:
1. Click the language selector in the top-right corner
2. Choose between "English" or "Tiếng Việt"
3. The preference is saved in browser storage and persists across sessions

### To Add More Translations:
1. Edit `src/i18n.ts`
2. Add new language objects with the same structure as `en` and `vi`
3. Update the LanguageSwitcher component to include the new language option

## Layout Changes

### Home Page:
```
[Home Button] [Language Switcher]
      Main Title & Navigation Buttons
      [Photo Frame 1] [Photo Frame 2]
      Stars Animation
```

### Math Pages (Plus/Minus/Test):
```
[Home Button] [Language Switcher]

[Settings Panel]
[Question Container] | [Photo Frame 1]
                     | [Photo Frame 2]
```

Mobile view stacks everything vertically for better usability on small screens.

## Browser Compatibility
- Chrome/Edge (v90+)
- Firefox (v87+)
- Safari (v14+)

## Future Enhancements
- Add more languages (Spanish, French, Chinese, etc.)
- Add photo upload feature instead of just selecting from folder
- Add photo editing/cropping functionality
- Store user's photo preferences
- Add photo galleries or slideshow mode
