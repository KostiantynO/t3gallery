```bash
npm i -g pnpm
npm cache clean -f
code ~/.bash_profile
pn create t3-app@latest
   ___ ___ ___   __ _____ ___   _____ ____    __   ___ ___
  / __| _ \ __| /  \_   _| __| |_   _|__ /   /  \ | _ \ _ \
 | (__|   / _| / /\ \| | | _|    | |  |_ \  / /\ \|  _/  _/
  \___|_|_\___|_/‾‾\_\_| |___|   |_| |___/ /_/‾‾\_\_| |_|

│
◇  What will your project be called? # .
◇  Will you be using TypeScript or JavaScript? # TypeScript
◇  Will you be using Tailwind CSS for styling? # Yes
◇  Would you like to use tRPC? # No
◇  What authentication provider would you like to use? # None
◇  What database ORM would you like to use? # Drizzle
◇   EXPERIMENTAL  Would you like to use Next.js App Router? # Yes
◇  What database provider would you like to use? # PostgreSQL
◇  Should we initialize a Git repository and stage the changes? # Yes
◇  Should we run 'pnpm install' for you? # Yes
◇  What import alias would you like to use? # ~/

Using: pnpm # ✔ App scaffolded successfully!
Adding boilerplate... # ✔ Successfully setup boilerplate for drizzle, tailwind, dbContainer, envVariables, eslint
Installing dependencies... # ✔ Successfully installed dependencies!
Initializing Git... # ✔ Successfully initialized and staged git

Next steps:
Start up a database, if needed using './start-database.sh'
# pnpm db:push
# pnpm dev
# git commit -m "initial commit"

# Thank you for trying out the "App Router" and new "Drizzle" options. If you encounter any issues, please open an issue!
code ~/.bash_profile
grv
start chrome https://github.com/new
gra https://github.com/KostiantynO/t3gallery.git
grv
# origin  https://github.com/KostiantynO/t3gallery.git (fetch)
# origin  https://github.com/KostiantynO/t3gallery.git (push)
gca "init"
gph
# Writing objects: 100% (28/28), 55.91 KiB | 5.08 MiB/s, done.
# https://github.com/KostiantynO/t3gallery.git
# * [new branch]      HEAD -> main
# Branch 'main' set up to track remote branch 'main' from 'origin'.
code ~/.bash_profile
  alias pd="pnpm dev"
source ~/.bash_profile

git rm --cached pnpm-lock.yaml

pa @vercel/postgres
pa @clerk/nextjs@beta
pa uploadthing @uploadthing/react
pa server-only

pa @sentry/wizard@latest
pn list --depth 0
pn sentry-wizard
Running Sentry Wizard... # version: 3.22.0 | sentry-cli version: 1.77.3
# Sentry Wizard will help you to configure your project Thank you for using Sentry :)
? What platform do you want to set up? # Next.js
# Skipping connection to Sentry due files already patched
┌   Sentry Next.js Wizard # Version: 3.22.0
◇  Are you using Sentry SaaS or self-hosted Sentry? # Sentry SaaS (sentry.io)
◇  Do you already have a Sentry account? # Yes
◇  Login complete.
◇  Select your Sentry project. # kostiantyn-ochenash/t3-gallery-video
# ◇  Installed @sentry/nextjs@^7.105.0 with PNPM.
◇  Do you want to route Sentry requests in the browser through your NextJS server to avoid ad blockers? # Yes
◆  Created fresh sentry.server.config.ts, sentry.client.config.ts, sentry.edge.config.ts│
◆  Added Sentry configuration to next.config.js.
◆  Created `src/app/global-error.jsx`.
◇  Do you want to create an example page `/sentry-example-page` to test your Sentry setup? # Yes
◆  Created `src/app/sentry-example-page/page.jsx`
◆  Created `src/app/api/sentry-example-api/route.js`
◆  Added auth token to `.sentryclirc` to test uploading source maps locally.
◆  Created `.sentryclirc`, and added to `.gitignore`.│
◇  Are you using a CI/CD tool to build and deploy your application? # Yes
◇  Add the Sentry authentication token as an environment variable to your CI setup:
    SENTRY_AUTH_TOKEN="xxx"
◇  Did you configure CI as shown above? # Yes, continue!
Successfully installed the Sentry Next.js SDK!
visit `/sentry-example-page`
[issues](https://github.com/getsentry/sentry-javascript/issues)
#🎉  Successfully set up Sentry for your project 🎉

pnpm dlx shadcn-ui@latest init



```

`.eslintrc.cjs`

```jsonc
// https://typescript-eslint.io/rules/consistent-type-imports/
{ "fixStyle": "separate-type-imports" }
```

[`Vercel`](https://vercel.com/)

```bash
Function region # Frankfurt, Germany (West) – fra1
PG DB (Neon) # Frankfurt, Germany - (fra1)
```
