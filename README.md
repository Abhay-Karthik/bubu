# Valentine's Day Website 💕

A romantic website to ask your special someone to be your Valentine!

## Features

- 🔐 Secret login page (username: bubu, password: dudu)
- 📖 Cute rhyming story about two cats (Ongy and Grey)
- 💕 Floating heart animations
- 🎯 Interactive Yes/No buttons (No button runs away!)
- ⏰ Countdown timer to Valentine's Day 2026
- 📸 Photo gallery grid
- 🎵 Romantic background music

## Setup Instructions

### 1. Add Your Photos

Place your photos in the **dudu folder** (the folder that already exists on your computer). The website will automatically load photos from there.

The gallery.js file is set to look for photos named:
- photo1.jpg
- photo2.jpg
- photo3.jpg
- etc.

You can either:
- Rename your photos to match these names, OR
- Update the `photoFiles` array in `js/gallery.js` with your actual photo filenames

### 2. Add Background Music (Optional)

To add romantic background music:

1. Find a romantic song (MP3 format)
2. Rename it to `romantic-music.mp3`
3. Place it in the `audio` folder

**Recommended free music sources:**
- YouTube Audio Library (royalty-free)
- Free Music Archive
- Incompetech

If you don't add music, the website will still work perfectly without it!

### 3. Open the Website

Simply open `index.html` in your web browser:
- Double-click the file, OR
- Right-click and select "Open with" → Your browser

### 4. Share with Your Valentine

You can share the website by:
- Sending her the folder
- Hosting it on a free service like GitHub Pages or Netlify
- Opening it on your computer and letting her use your device

## Login Credentials

- **Username:** bubu
- **Password:** dudu

## The Flow

1. **Login Page** → She enters the secret code
2. **Story Page** → Cute rhyming story about Ongy (you) and Grey (her)
3. **Question Page** → The big question! (No button moves away when she hovers)
4. **Gallery Page** → Countdown + Photo memories when she says YES!

## Customization

### Change the Story

Edit `story.html` to customize the poem with your own words.

### Change Colors

Edit `css/style.css` to customize colors and styling.

### Change Valentine's Date

If you want to countdown to a different date, edit `js/gallery.js` and change:
```javascript
const valentinesDay = new Date('February 14, 2026 00:00:00').getTime();
```

## Tips

- Test the website yourself first!
- Make sure all your photos are in the dudu folder
- The "No" button will keep moving until she clicks "Yes"
- Music might not autoplay due to browser restrictions - she may need to click anywhere to start it

## Good Luck! 💕

I hope she says YES! 🎉

---

Made with ❤️ for your special Valentine's Day
