# Deployment

The portfolio is hosted on Netlify and uses Git-based deployment from
`heatherwoods93/portfolio`.

- Production branch: `main`.
- Build command: `npm run build`.
- Publish directory: `dist`.
- Production URL: https://heatherwoods.dev/
- Branch deploys: enabled for the non-production branches configured in Netlify.
  The exact enabled-branch list is managed in Netlify and is not recorded in this
  repository. Do not assume that every new branch will receive a branch deploy.

Netlify builds and deploys after a push to a configured branch. A manual upload
of `dist` is not required for the normal workflow. The local `dist` directory is
generated output and is ignored by Git.

## Review the current temporary content change on a branch

The content-withholding changes are on
`chore/temporarily-hide-agency-work` for branch-deploy review. Run these commands
from the repository root in PowerShell:

```powershell
git status
git branch --show-current
npm.cmd run lint
npm.cmd run build
```

Confirm that the branch is `chore/temporarily-hide-agency-work`, review the
intended changes, and stage only the files for this update:

```powershell
git add .gitignore src/pages/Home.jsx src/components/ProfessionalWork.jsx docs/content-visibility.md
git add README.md docs/deployment.md
git diff --cached --stat
git commit -m "Temporarily withhold agency portfolio examples"
git push -u origin chore/temporarily-hide-agency-work
```

If the branch is enabled for branch deploys in Netlify, pushing it triggers a
branch deployment. Check the Netlify deploy log, wait for it to finish, and
verify the branch URL. The website examples and "Behind the implementation"
galleries should be absent; Capabilities, About, contact, and the resume should
remain available. Production stays on `main` until the reviewed changes are
merged there.

## Start a future change on a branch

To use a branch deploy for an unpublished change, create or switch to the
intended non-production branch before committing. For example, while the current
changes are still uncommitted:

```powershell
git switch -c feature/your-change
```

Run the checks, stage the intended files, commit, and push that branch:

```powershell
git push -u origin feature/your-change
```

Confirm that this branch is enabled for branch deploys in Netlify. Review its
deployment URL, then merge the reviewed change into `main` through a GitHub pull
request. Updating `main` triggers the production deployment. A branch deploy
does not update the main production site.

## Promote reviewed changes to production

Merge the reviewed branch into `main` through a GitHub pull request. Netlify's
production deployment is triggered by the resulting update to `main`. Check
the production deploy log and verify https://heatherwoods.dev/ after it
publishes. Merging to `main` is a separate publication step from requesting a
branch deploy.

## Temporary visibility and retained copies

See [content-visibility.md](content-visibility.md) for what is withheld and how
to restore it after review. The handbook is retained locally and ignored by Git.

Deploying the new build does not remove repository source/history, older
deployment URLs, or cached copies of previous content. Manage those separately
if removal is needed.
