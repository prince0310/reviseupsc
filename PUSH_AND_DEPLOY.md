# Push to GitHub & deploy

You're on `main` with a clean working tree. Follow these steps to push and deploy.

---

## Step 1: Create a repo on GitHub

1. Open **https://github.com/new**
2. **Repository name:** `mygov` (or any name you like)
3. Leave **Public** selected
4. **Do not** add README, .gitignore, or license (you already have code)
5. Click **Create repository**

---

## Step 2: Add the remote and push (first time only)

GitHub will show something like:  
`https://github.com/YOUR_USERNAME/mygov.git`

In PowerShell, in your project folder, run (replace `YOUR_USERNAME` with your GitHub username):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/mygov.git
git push -u origin main
```

If you already added `origin` before, just push:

```powershell
git push -u origin main
```

Enter your GitHub username and **Personal Access Token** (not your password) when asked.

---

## Step 3: Deploy on Vercel

1. Go to **https://vercel.com/new**
2. Click **Import** next to your **mygov** repository
3. Leave settings as default → **Deploy**
4. After the build, you’ll get a URL like `https://mygov-xxx.vercel.app`

Every time you run `git push` to `main`, Vercel will auto-deploy.

---

## Later: after you change code

```powershell
git add .
git commit -m "Describe your change"
git push
```

That’s it.
