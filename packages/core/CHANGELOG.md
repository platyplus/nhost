# @nhost/core

## 0.5.4

### Patch Changes

- 9d32314: Improve error codes
  The errors of `signUp`, `signIn`, `signOut`, and `refreshSession` now always include an `error` field that contains a machine-readable error code.
- 236ce72: Correct email verification states
  email verification returns `false` when the client has started and it is still undetermined

## 0.5.3

### Patch Changes

- 584976d: - publishable directory structure changes (ESM, CJS and UMD included in the output)
  - build system improvements
  - fixed some bundling concerns (https://github.com/nhost/nhost/issues/428)

## 0.5.2

### Patch Changes

- 65a3061: correct cookie storage type

## 0.5.1

### Patch Changes

- 58fa2a2: Improve loading status
  The `loading` status indicates the authentication is not yet known to the client when it starts. Once the client is ready, the authentication status is either signed in, or signed out.
  When the user was trying to authenticate, the `loading` status was set to `true` until the result of the authentication was known.
  The client now only return `loading: true` on startup, and in no other cases.
- 58fa2a2: Look for a valid refresh token both the URL and local storage
  When auto-signin was activated, the client was not taking into account the refresh token in the URL if a token was already stored locally.
  The user was then not able to authenticate from a link when the refresh token stored locally was invalid or expired.
  When auto-signin is activated, the client now checks and tries tokens from both the URL and the local storage, starting with the URL.

## 0.5.0

### Minor Changes

- b56162a: Introduce 'custom' client storage type
- b56162a: Introduce a new 'cookie' client storage type

### Patch Changes

- b56162a: prefer clientStorage/clientStorageType to clientStorageGetter/clientStorageSetter

## 0.4.1

### Patch Changes

- 7b23d33: Clean `refreshToken` and `type` from the url when the user is already signed in

## 0.4.0

### Minor Changes

- 616e320: Remove `refreshToken` from the url when `autoSignIn` is set
  On startup, when the `autoSignIn` option is set to `true`, the client now removes it from the URL when the page loads.
- 53f5226: Capture hasura-auth errors from the url
  When using social providers (Oauth) or email links, Hasura-Auth adds potential error codes and messages to the url.
  When the Nhost client loads, it now reads these errors and stores them in the authentication state.
- 616e320: Look for the refresh token both in the query parameters and in the hash
  Until now, after redirecting from an email, Hasura-auth puts refresh tokens in the hash part of the url. It is a problem when using SSR as the hash is not accessible to the server. This behaviour is likely to change. As a result, the client now parses both the hash and the query parameters of the url.
  See [this issue](https://github.com/nhost/hasura-auth/issues/148) to keep track of the progress on Hasura-auth.

### Patch Changes

- 616e320: Improve startup
  When `autoSignin` was active, the client was fetching the refresh token twice on startup. This behaviour has been corrected.
- b52b4fc: Rename `AuthClientSSR` to `AuthCookieClient`
  `AuthClientSSR` has been renamed to `AuthCookieClient` and is now deprecated
- b52b4fc: Bump xstate to latest version (`4.31.0`)

## 0.3.13

### Patch Changes

- 5ee395e: Ensure the session is destroyed when signout is done
  The user session, in particular the access token (JWT), was still available after sign out.
  Any information about user session is now removed from the auth state as soon as the sign out action is called.
- e0cfcaf: fix and improve `nhost.auth.refreshSession`
  `nhost.auth.refreshSession` is now functional and returns possible errors, or the user session if the token has been sucessfully refreshed.
  If the user was previously not authenticated, it will sign them in. See [#286](https://github.com/nhost/nhost/issues/286)
- 7b7527a: Improve reliability of the token refresher
  The token refresher had an unreliable behaviour, leading to too many refreshes, or refreshes that are missed, leading to an expired access token (JWT).

  The internal refresher rules have been made more explicit in the code. Every second, this runs:

  - If the client defined a `refreshIntervalTime` and the interval between when the last access token has been created and now is more than this value, then it triggers a refresh
  - If the access token expires in less than five minutes, then it triggers a refresh

  If a refresh fails, then it switches to a specific rule: it will make an attempt to refresh the token every five seconds

## 0.3.12

### Patch Changes

- 7b5f00d: Avoid error when BroadcastChannell is not available
- 58e1485: Fix invalid password and email errors on sign up
  When signin up, an invalid password was returning the `invalid-email` error, and an invalid email was returning `invalid-password`.
  This is now in order.

## 0.3.11

### Patch Changes

- 0b1cb62: Use native `BroadcastChannel` instead of the `broadcast-channel` package
  The `broadcast-channel` depends on `node-gyp-build`, which can cause issues when deploying on Vercel as it is a native dependency.
  The added value of `broadcast-channel` is to be able to communicate the change of authentication state accross processes in a NodeJs / Electron environment, but this is considered an edge case for now.
  See [Vercel official documentation](https://vercel.com/support/articles/why-does-my-serverless-function-work-locally-but-not-when-deployed#native-dependencies).

## 0.3.10

### Patch Changes

- 63d6059: Set onTokenChanged before the state interpreter started
  Fixes [#384](https://github.com/nhost/nhost/issues/384), thanks [@noverby](https://github.com/noverby)
- 63d6059: Trigger onTokenChanged when token changes
  Fixes [#373](https://github.com/nhost/nhost/issues/373), thanks [@yureckey](https://github.com/yureckey)

## 0.3.9

### Patch Changes

- 2c97db6: Keep authentication status and access token in sync
  The authentication events where not set correctly, leading the main Nhost client not to update internal states of storage/graphql/functions sub-clients when using non-react clients.
  The use of private fields (`#`) is also avoided as they conflict with the use of proxies in Vue, leading to errors in the upcoming Vue library.
  Fixes #373 and #378

## 0.3.8

### Patch Changes

- 058956b: Add missing provider types
  `strava`, `gitlab`, and `bitbucket` were missing from the list of providers in Typescript and are now available.
- 058956b: Add `emailVerified`, `phoneNumber`, `phoneNumberVerified`, and `activeMfaType` to User type

  Some information is missing in the `User` payload (see [this issue](https://github.com/nhost/nhost/issues/306)). The above properties have been added in the Typescript `User` type and are available when using Hasura Auth versions from [this pull request](https://github.com/nhost/hasura-auth/pull/128) (tentative version number: `0.5.1`)

- 7cf875f: Export error code payloads and type

## 0.3.7

### Patch Changes

- 16a6c50: Correct autoSignIn

## 0.3.3

### Patch Changes

- correct dependencies

  See this related issues:

  - [nhost](https://github.com/nhost/nhost/issues/326)
  - [pnpm](https://github.com/pnpm/pnpm/issues/4348)

## 0.3.1

### Patch Changes

- 4420c0e: Check if `window.location` exists

  When using [Expo](https://expo.dev/), `window` can be an object while `window.location` is `undefined`. It lead to [this issue](https://github.com/nhost/nhost/issues/309).

## 0.3.0

### Minor Changes

- 744fd69: Unify vanilla, react and next APIs so they can work together
  React and NextJS libraries now works together with `@nhost/nhost-js`. It also means the Nhost client needs to be initiated before passing it to the React provider.
  See the [React](https://docs.nhost.io/reference/react#configuration) and [NextJS](https://docs.nhost.io/reference/nextjs/configuration) configuration documentation for additional information.

### Patch Changes

- 744fd69: Rename `@nhost/client` to `@nhost/core`
  The `@nhost/client` name was somehow misleading, as it was implying it could somehow work as a vanilla client, whereas it only contained the state machine that could be used for vanilla or framework specific libraries e.g. `@nhost/react`.

  It is therefore renamed to `@nhost/core`, and keeps the same versionning and changelog.

## 0.2.1

### Patch Changes

- 0d8afde: Bump xstate version 4.30.5

## 0.2.0

### Minor Changes

- 207ae38: Improvements on `autoSignIn`

  Auto login enables authentication from a link sent by email.
  It parses the url query parameters of the browser and looks for a possible refresh token to consume and authenticate.
  Although the mechanism existed already, it now broadcasts the refresh token to other tabs in the same browser, so they can also authenticate automatically.

- 207ae38: Improvements on `autoRefreshToken`

  Auto refresh now uses a client-side timestamp from the instant of its creation to the access token expiration interval. As a result, there is less change of refresh and access token becoming stale or out of sync.

- 207ae38: Tree-shakable API

  The new `@nhost/client` package is written with tree-shakability in mind. No dead code should be included by a subsequent bundler.

  See [#198](https://github.com/nhost/nhost/issues/198)

- 207ae38: ## Stable authentication state

  Until now, the Nhost SDK authentication state and its context (access Token, refresh token...) was not held with a reliable system, ending in unconsistencies e.g. [#189](https://github.com/nhost/nhost/issues/189), [#202](https://github.com/nhost/nhost/issues/202), [#186](https://github.com/nhost/nhost/issues/186), [#195](https://github.com/nhost/nhost/issues/195).
  The `@nhost/client` handles authentication state as a finite state machine with [xstate](https://github.com/statelyai/xstate). Xstate is framework agnostic and the authentication state will be easily plugable in most reactive frameworks such as React, Vue and Svelte.
