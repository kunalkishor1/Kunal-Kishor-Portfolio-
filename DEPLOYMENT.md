# 🚀 GitHub Pages Deployment Guide

This guide will walk you through deploying your portfolio to GitHub Pages step by step.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Instructions

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `portfolio-main` (or your preferred name)
   - **Description**: "My Portfolio Website"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Step 2: Initialize Git in Your Project (if not already done)

Open your terminal/command prompt in the project folder and run:

```bash
# Check if git is already initialized
git status

# If not initialized, run:
git init
```

### Step 4: Add All Files to Git

```bash
# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Portfolio website"
```

### Step 5: Connect to GitHub Repository

```bash
# Replace YOUR_USERNAME with your GitHub username
# Replace portfolio-main with your repository name if different
git remote add origin https://github.com/YOUR_USERNAME/portfolio-main.git

# Verify the remote was added
git remote -v
```

### Step 6: Push to GitHub

```bash
# Push to main branch
git branch -M main
git push -u origin main
```

### Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** tab (at the top of the repository)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)` or `/docs` (if you want to use docs folder)
5. Click **"Save"**

### Step 8: Configure GitHub Actions (Automatic Deployment)

The workflow file (`.github/workflows/deploy.yml`) is already created. You need to:

1. Go to your repository **Settings**
2. Click on **"Actions"** → **"General"** in the left sidebar
3. Under **"Workflow permissions"**, select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
4. Click **"Save"**

### Step 9: Set Up Environment Variables (For EmailJS - Optional)

If you're using EmailJS for the contact form:

1. Go to repository **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"** for each:
   - Name: `VITE_EMAILJS_SERVICE_ID` → Value: Your EmailJS Service ID
   - Name: `VITE_EMAILJS_TEMPLATE_ID` → Value: Your EmailJS Template ID
   - Name: `VITE_EMAILJS_PUBLIC_KEY` → Value: Your EmailJS Public Key

### Step 10: Update Base Path (Important!)

**If your repository name is NOT `portfolio-main`**, you need to update the base path:

1. Open `vite.config.ts`
2. Find the line: `base: process.env.GITHUB_PAGES === 'true' ? '/portfolio-main/' : '/',`
3. Replace `portfolio-main` with your actual repository name
4. Commit and push the change:

```bash
git add vite.config.ts
git commit -m "Update base path for GitHub Pages"
git push
```

### Step 11: Trigger Deployment

1. Go to your repository on GitHub
2. Click on **"Actions"** tab
3. You should see the workflow running
4. Wait for it to complete (usually 2-3 minutes)
5. Once done, go to **Settings** → **Pages**
6. Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio-main/`

## Updating Your Site

Every time you push changes to the `main` branch, GitHub Actions will automatically:
1. Build your site
2. Deploy it to GitHub Pages

Just run:
```bash
git add .
git commit -m "Your commit message"
git push
```

## Troubleshooting

### Site shows 404 or blank page
- Check that the base path in `vite.config.ts` matches your repository name
- Wait a few minutes after deployment (GitHub Pages can take time to update)
- Clear your browser cache

### Build fails
- Check the **Actions** tab for error messages
- Ensure all dependencies are in `package.json`
- Make sure Node.js version is compatible

### Assets not loading
- Verify the base path is correct
- Check that images are in the `attached_assets` folder
- Ensure paths use relative URLs

## Custom Domain (Optional)

If you want to use a custom domain:

1. Go to repository **Settings** → **Pages**
2. Under **"Custom domain"**, enter your domain
3. Add a `CNAME` file in your repository root with your domain name
4. Configure DNS records with your domain provider

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Your portfolio will be live at:** `https://YOUR_USERNAME.github.io/portfolio-main/`

Replace `YOUR_USERNAME` with your actual GitHub username!

