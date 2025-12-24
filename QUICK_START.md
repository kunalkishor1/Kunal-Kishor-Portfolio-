# 🚀 Quick Start - Deploy to GitHub Pages

## Fast Track (5 Minutes)

### 1. Create GitHub Repository
- Go to [github.com/new](https://github.com/new)
- Name: `portfolio-main` (or your choice)
- Make it **Public**
- **Don't** initialize with README
- Click **Create repository**

### 2. Push Your Code

Open terminal in your project folder and run:

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-main.git

# Push
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**: Select **"GitHub Actions"**
4. Save

### 4. Enable GitHub Actions

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**: Select **"Read and write permissions"**
3. Click **Save**

### 5. Wait for Deployment

1. Go to **Actions** tab
2. Wait for workflow to complete (2-3 minutes)
3. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio-main/`

## Important Notes

### If Your Repository Name is Different

If you named your repository something other than `portfolio-main`, update `vite.config.ts`:

```typescript
base: process.env.GITHUB_PAGES === 'true' ? '/YOUR_REPO_NAME/' : '/',
```

Replace `YOUR_REPO_NAME` with your actual repository name.

### EmailJS Setup (Optional)

If you want the contact form to work:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

## That's It! 🎉

Your portfolio is now live! Every time you push changes, it will automatically update.

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

