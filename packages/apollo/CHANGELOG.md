# @nhost/apollo

## 0.5.4

### Patch Changes

- @nhost/nhost-js@1.1.11

## 0.5.3

### Patch Changes

- 584976d: - publishable directory structure changes (ESM, CJS and UMD included in the output)
  - build system improvements
  - fixed some bundling concerns (https://github.com/nhost/nhost/issues/428)
- Updated dependencies [584976d]
  - @nhost/nhost-js@1.1.10

## 0.5.2

### Patch Changes

- Updated dependencies [65a3061]
  - @nhost/core@0.5.2

## 0.5.1

### Patch Changes

- Updated dependencies [58fa2a2]
- Updated dependencies [58fa2a2]
  - @nhost/core@0.5.1

## 0.5.0

### Minor Changes

- 42edb74: Bump to Apollo client 3.6.2

### Patch Changes

- Updated dependencies [b56162a]
  - @nhost/core@0.5.0

## 0.4.5

### Patch Changes

- Updated dependencies [7b23d33]
  - @nhost/core@0.4.1

## 0.4.4

### Patch Changes

- b52b4fc: Bump xstate to latest version (`4.31.0`)
- Updated dependencies [b52b4fc]
  - @nhost/core@0.4.0

## 0.4.3

### Patch Changes

- Updated dependencies [7b7527a]
  - @nhost/core@0.3.13

## 0.4.2

### Patch Changes

- Updated dependencies [58e1485]
  - @nhost/core@0.3.12

## 0.4.1

### Patch Changes

- Updated dependencies [0b1cb62]
  - @nhost/core@0.3.11

## 0.4.0

### Minor Changes

- f6093a6: Use graphql-ws instead of subscriptions-transport-ws

## 0.3.9

### Patch Changes

- Updated dependencies [63d6059]
  - @nhost/core@0.3.10

## 0.3.8

### Patch Changes

- Updated dependencies [2c97db6]
  - @nhost/core@0.3.9

## 0.3.7

### Patch Changes

- Updated dependencies [7cf875f]
  - @nhost/core@0.3.8

## 0.3.5

### Patch Changes

- Updated dependencies [16a6c50]
  - @nhost/core@0.3.4

## 0.3.3

### Patch Changes

- correct dependencies

  See this related issues:

  - [nhost](https://github.com/nhost/nhost/issues/326)
  - [pnpm](https://github.com/pnpm/pnpm/issues/4348)

- Updated dependencies
  - @nhost/core@0.3.2

## 0.3.1

### Patch Changes

- 113beed: fix: Refetched queries and leaking subscriptions [#301](https://github.com/nhost/nhost/issues/301)
- Updated dependencies [4420c0e]
  - @nhost/core@0.3.1

## 0.3.0

### Minor Changes

- 744fd69: Unify vanilla, react and next APIs so they can work together
  React and NextJS libraries now works together with `@nhost/nhost-js`. It also means the Nhost client needs to be initiated before passing it to the React provider.
  See the [React](https://docs.nhost.io/reference/react#configuration) and [NextJS](https://docs.nhost.io/reference/nextjs/configuration) configuration documentation for additional information.

### Patch Changes

- Updated dependencies [744fd69]
  - @nhost/core@0.3.0

## 0.2.1

### Patch Changes

- 0d8afde: Bump xstate version 4.30.5
- Updated dependencies [0d8afde]
  - @nhost/client@0.2.1

## 0.2.0

### Minor Changes

- 207ae38: Rewrite of the Apollo GraphQL client

  - Introducing a new `@nhost/apollo` that will be reusable by other frameworks than React e.g. Vue
  - The new package works together with the `@nhost/client` and its new state management system
  - **BREACKING CHANGE** The react client `@nhost/react-apollo` is set to use the new `@nhost/client` package and won't work anymore with `@nhost/nhost-js`. See the [documentation](https://docs.nhost.io/reference/react/apollo) for further information.

  Closes [#8](https://github.com/nhost/nhost/issues/8)

### Patch Changes

- Updated dependencies [207ae38]
  - @nhost/client@0.2.0
