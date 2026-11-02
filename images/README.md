# Site Images

To swap a photo, replace the file here and keep the **exact same filename**.

| File        | Where it appears                  | Recommended size              |
|-------------|-----------------------------------|-------------------------------|
| `hero.jpg`  | Full-screen photo at top of page  | 1920×1280 (landscape), < 600 KB |
| `about.jpg` | Portrait in the "About" section   | 800×1000 (4:5 portrait), < 250 KB |

Tips:
- Use `.jpg` and keep the lowercase filename. Vercel is case-sensitive.
- Compress photos before adding them, for example at https://squoosh.app.
- If you don't see the new photo, hard-refresh the browser (Cmd+Shift+R).
- Filenames are referenced in `css/styles.css` (`.hero` rule → hero.jpg)
  and `index.html` (About section `<img>` → about.jpg).
