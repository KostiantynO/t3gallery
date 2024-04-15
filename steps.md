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


```

`.eslintrc.cjs`

```jsonc
// https://typescript-eslint.io/rules/consistent-type-imports/
{ "fixStyle": "separate-type-imports" }
```
