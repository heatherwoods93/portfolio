# Temporary professional-work visibility

The professional website examples and the entire "Behind the implementation"
gallery are temporarily withheld pending agreement and publication-permission
review. This is a reversible content change.

`src/components/ProfessionalWork.jsx` preserves both sections, including the
original project descriptions, links, screenshots, and gallery components.
`src/components/SystemsShowcase.jsx` and all original assets remain unchanged.
The active application does not import `ProfessionalWork`, so Vite excludes it
and its project/gallery assets from the production build. Do not implement this
with CSS hiding or an eagerly imported component: that would still ship the
withheld content or assets.

The existing capability cards, tools, About, contact links, and resume remain
visible. Navigation points to `#systems` while the work sections are withheld.

## Restore after review

1. Review which specific examples and materials may be published, and update
   their attribution or contents as needed before restoring them.
2. Add this import to `src/pages/Home.jsx`:

   ```jsx
   import ProfessionalWork from '../components/ProfessionalWork'
   ```

3. Replace the restoration comment between the systems section and About with:

   ```jsx
   <ProfessionalWork />
   ```

4. Restore the header navigation link to `<a href="#work">Work</a>` and the
   primary hero button's link/text to `#work` / `View My Work`.
5. Run `npm run lint` and `npm run build`, inspect desktop and mobile layouts,
   and follow [deployment.md](deployment.md) to publish through Netlify's
   Git-based workflow.

## Deployment and source visibility

Netlify builds the configured Git branch and publishes only the generated
`dist` directory; `main` is the production branch. Rebuilding locally does not
update the live site or remove previously published files, deployment previews,
caches, or repository history. Check the hosting provider's retention and
removal controls when publishing the change.

Withheld source files and images are still in the repository for restoration.
This change does not make a public repository or its history private. Keep the
handbook and other private employment documents out of public commits.
