# Publish the GitHub Organization Profile

This folder becomes the public repository **`Delta-Innovations-ORG/.github`**.  
Once pushed, GitHub shows [`profile/README.md`](profile/README.md) on the [organization homepage](https://github.com/Delta-Innovations-ORG).

---

## One-time setup

### 1. Create the repository on GitHub

1. Sign in as an **org owner** for [Delta-Innovations-ORG](https://github.com/Delta-Innovations-ORG).
2. Click **New repository**.
3. Set:
   - **Owner:** `Delta-Innovations-ORG`
   - **Repository name:** `.github` (exactly â€” including the dot)
   - **Visibility:** Public
4. Do **not** add a README, `.gitignore`, or license (this folder already has them).
5. Click **Create repository**.

### 2. Push from your machine

Open a terminal in this folder (`Delta-Innovations-ORG/.github`) and run:

```bash
git init
git add .
git commit -m "docs(org): add animated organization profile README"
git branch -M main
git remote add origin https://github.com/Delta-Innovations-ORG/.github.git
git push -u origin main
```

**Windows tip:** If your path contains an apostrophe (`Project's`), use:

```bash
git -C "E:/Project's/Dalta-Innovations/Delta-Innovations-ORG/.github" init
git -C "E:/Project's/Dalta-Innovations/Delta-Innovations-ORG/.github" add .
git -C "E:/Project's/Dalta-Innovations/Delta-Innovations-ORG/.github" commit -m "docs(org): add animated organization profile README"
git -C "E:/Project's/Dalta-Innovations/Delta-Innovations-ORG/.github" branch -M main
git -C "E:/Project's/Dalta-Innovations/Delta-Innovations-ORG/.github" remote add origin https://github.com/Delta-Innovations-ORG/.github.git
git -C "E:/Project's/Dalta-Innovations/Delta-Innovations-ORG/.github" push -u origin main
```

### 3. Verify the org profile

1. Open https://github.com/Delta-Innovations-ORG
2. Within ~1 minute you should see the animated header, logo, badges, and company sections â€” **not** the default â€œWe think you're gonna like it hereâ€ screen.
3. Confirm images load:
   - Logo: `https://raw.githubusercontent.com/Delta-Innovations-ORG/.github/main/assets/logo10.png`
   - Preview: `https://raw.githubusercontent.com/Delta-Innovations-ORG/.github/main/assets/screenshots/website-preview.png`

---

## Organization settings (recommended)

In **Organization settings â†’ Profile**:

| Field | Value |
|-------|-------|
| Display name | Delta Innovations |
| Description | Digital product engineering â€” web, mobile, AI, cloud, DevOps, data, cybersecurity |
| Location | Pakistan & Egypt |
| Website | https://delta-innovations-website.vercel.app |
| Email | deltainnovations.co@gmail.com |

**Pin repositories:** `delta-innovations-website` (and future public repos as you publish them).

---

## Updating the profile later

1. Edit [`profile/README.md`](profile/README.md) or replace assets in [`assets/`](assets/).
2. To refresh the website screenshot, replace `assets/screenshots/website-preview.png` with a new capture from the live site.
3. Commit and push to `main` â€” the org homepage updates automatically.

### Refresh assets from the website repo

```bash
node scripts/copy-assets.mjs
node scripts/capture-website-preview.mjs
git add assets/
git commit -m "chore(org): refresh profile assets"
git push
```

---


---

## Common mistakes

### Wrong \git init\ location (nested \.github/\ paths)

Git always uses the **repository root** (the folder that contains \.git\). If you run \git init\ in \Delta-Innovations-ORG\ (the parent) but work inside the \.github\ subfolder, every commit will track paths like \.github/profile/README.md\ instead of \profile/README.md\ at the repo root. GitHub's org profile **requires** \profile/README.md\ at the **root** of \Delta-Innovations-ORG/.github\.

**Symptoms:**

- \git ls-files\ shows \.github/profile/README.md\ (wrong) instead of \profile/README.md\ (correct)
- \git rev-parse --show-toplevel\ prints \.../Delta-Innovations-ORG\ instead of \.../Delta-Innovations-ORG/.github\

**Fix:**

1. Delete only the misplaced repo: remove \Delta-Innovations-ORG/.git\ (do **not** delete \DeltaInnovations-Website/.git\ or other project repos).
2. Initialize inside the profile folder:

\\\ash
git -C "E:/Project's/Dalta-Innovations/Delta-Innovations-ORG/.github" init
git -C "E:/Project's/Dalta-Innovations/Delta-Innovations-ORG/.github" add .
git -C "E:/Project's/Dalta-Innovations/Delta-Innovations-ORG/.github" commit -m "docs(org): add animated organization profile README"
git -C "E:/Project's/Dalta-Innovations/Delta-Innovations-ORG/.github" branch -M main
git -C "E:/Project's/Dalta-Innovations/Delta-Innovations-ORG/.github" remote add origin https://github.com/Delta-Innovations-ORG/.github.git
\\\

3. Confirm: \git -C ".../.github" rev-parse --show-toplevel\ ends with \.github\.

### \Repository not found\ on push

This usually means the GitHub repo **does not exist yet** (create \Delta-Innovations-ORG/.github\ on GitHub first), or you are not signed in / lack org permission. Create the empty public repo named \.github\ under the org, then push again.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Org still shows default welcome | Repo must be named **`.github`** under the org, with `profile/README.md` on `main` |
| Broken logo / screenshot | Push `assets/` first; raw URLs only work after files are on `main` |
| Typing animation not loading | External `readme-typing-svg` service may be slow â€” refresh the page |
| Stats pin card empty | `delta-innovations-website` must be public under the same org |

---

## Related

- Website repo: [delta-innovations-website](https://github.com/Delta-Innovations-ORG/delta-innovations-website)
- Live site: https://delta-innovations-website.vercel.app/
