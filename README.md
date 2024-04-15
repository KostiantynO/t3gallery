# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with
`create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just
the scaffolding we set up for you, and add additional things later when they
become necessary.

If you are not familiar with the different technologies used in this project,
please refer to the respective docs. If you still are in the wind, please join
our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the
following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available)
  — Check out these awesome tutorials

You can check out the
[create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) —
your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for
[Vercel](https://create.t3.gg/en/deployment/vercel),
[Netlify](https://create.t3.gg/en/deployment/netlify) and
[Docker](https://create.t3.gg/en/deployment/docker) for more information.

# T3 Gallery

## TODO

- [x] `Deploy` it (Vercel)
- [x] Add `UI` + `mock data`
- [x] Tidy up build process
- [ ] Add `DB` (Vercel Postgres)
- [ ] Attach DB to UI
- [ ] Add `auth` (Clerk)
- [ ] Add `image upload`
- [ ] Add `error management` (Sentry)
- [ ] Add `routing`/`Image page` (parallel route)
- [ ] Add `Delete button` (Server Actions)
- [ ] Add `analytics` (Posthog)
- [ ] Add `rate limiting` (Upstash)

[Code commit conventions](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13):

- `feat` commits, that adds or remove a new feature
- `fix` commits, that fixes a bug
- `refactor` commits, that rewrite/restructure your code, however does not
  change any API behaviour
- `perf` commits are special refactor commits, that improve performance
- `style` commits, that do not affect the meaning (white-space, formatting,
  missing semi-colons, etc)
- `test` commits, that add missing tests or correcting existing tests
- `docs` commits, that affect documentation only
- `build` commits, that affect build components like build tool, ci pipeline,
  dependencies, project version, ...
- `ops` commits, that affect operational components like infrastructure,
  deployment, backup, recovery, ...
- `chore` miscellaneous commits e.g. modifying .gitignore
