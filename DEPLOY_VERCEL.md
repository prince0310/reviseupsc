# Deploy on Vercel

## Option A: Deploy with Vercel CLI (no Git needed)

1. Open a terminal in this folder (`mygov`).
2. Run:
   ```bash
   npx vercel
   ```
3. When prompted:
   - **Log in** to Vercel (browser will open if first time).
   - **Link to existing project?** → No (first time) or Yes (if you already created one).
   - **Project name** → accept `mygov` or type another name.
   - **Directory** → press Enter (use current folder).
4. Vercel will build and give you a URL like `https://mygov-xxx.vercel.app`.

To deploy again after changes:
```bash
npx vercel --prod
```

---

## Option B: Deploy with GitHub (best for updates)

1. **Install Git** (if needed): https://git-scm.com/download/win

2. **Create a GitHub repo** at https://github.com/new  
   - Name it e.g. `mygov`, leave it empty (no README).

3. **Push your code** (in this folder):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/mygov.git
   git push -u origin main
   ```

4. **Connect to Vercel**  
   - Go to https://vercel.com/new  
   - Click **Import** next to your `mygov` repo.  
   - Leave settings as default, click **Deploy**.  
   - Every push to `main` will auto-deploy.

---

Your app is ready for Vercel (Next.js build already verified).
