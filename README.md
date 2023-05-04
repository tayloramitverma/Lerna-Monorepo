# Lerna Getting Started Example

This repo is a small example of using Lerna 5+.

Watch this [10-minute walkthrough](https://youtu.be/1oxFYphTS4Y) to see how new versions of Lerna work.

This repo contains three packages or projects:

- `header` (a library of React components)
- `footer` (a library of React components)
- `remixapp` (an app written using the Remix framework which depends on both `header` and `footer`)

```
packages/
    header/
        src/
            ...
        package.json
        rollup.config.json
        jest.config.js

    footer/
        src/
            ...
        package.json
        rollup.config.json
        jest.config.js

    remixapp/
        app/
            ...
        public/
        package.json
        remix.config.js

package.json
```

Commands for setup and run:

- `npx lerna@latest init` 
- `npx lerna run build`
- `npx lerna run build --scope=header` run for any package
- `npx lerna run test`
- `npx lerna run test --scope=header`
- `npx lerna add-caching`
- `npx lerna run dev --scope=remixapp`
- `npx lerna publish --no-private`
- `lerna version --no-private` Manage all packages versions
- `npx nx graph`