# @techdocs/cli

## 0.8.7

### Patch Changes

- e7230ef814: Bump react-dev-utils to v12
- Updated dependencies
  - @backstage/backend-common@0.9.12

## 0.8.6

### Patch Changes

- e21e3c6102: Bumping minimum requirements for `dockerode` and `testcontainers`
- 1578ad341b: Add support for specifying bucketRootPath for AWS and GCS publishers
- f2694e3750: Adds ability to use encrypted S3 buckets by utilizing the SSE option in the AWS SDK
- Updated dependencies
  - @backstage/catalog-model@0.9.7
  - @backstage/backend-common@0.9.10
  - @backstage/techdocs-common@0.10.7

## 0.8.5

### Patch Changes

- Reunified the [techdocs-cli](https://github.com/backstage/techdocs-cli) monorepo code back into the main [backstage](https://github.com/backstage/backstage) repo

  See [7288](https://github.com/backstage/backstage/issues/7288)). The changes include some internal refactoring that do not affect functionality beyond the local development setup.

## 0.8.4

### Patch Changes

- 8333394: The [change](https://github.com/backstage/techdocs-cli/commit/b25014cec313d46ce1c9b4f324cc09047a00fc1f) updated the `@backstage/techdocs-common` from version `0.9.0` to `0.10.2` and one of the intermediate versions, the [0.10.0](https://github.com/backstage/backstage/blob/cac4afb95fdbd130a66e53a1b0430a1e62787a7f/packages/techdocs-common/CHANGELOG.md#patch-changes-2), introduced the use of search in context that requires an implementation for the Search API.

  Created a custom techdocs page to disable search in the Reader component, preventing it from using the Search API, as we don't want to provide search in preview mode.

## 0.8.3

### Patch Changes

- edbb988: Upgrades the techdocs common page to the latest version 0.10.2.

  See [@backstage/techdocs-common changelog](https://github.com/backstage/backstage/blob/cac4afb95fdbd130a66e53a1b0430a1e62787a7f/packages/techdocs-common/CHANGELOG.md#L3).

- db4ebfc: Add an `etag` flag to the `generate` command that is stored in the `techdocs_metadata.json` file.

## 0.8.2

### Patch Changes

- 8fc7384: Allow to execute techdocs-cli serve using docker techdocs-container on Windows

## 0.8.1

### Patch Changes

- 0187424: Separate build and publish release steps

## 0.8.0

### Minor Changes

- c6f437a: OpenStack Swift configuration changed due to OSS SDK Client change in @backstage/techdocs-common, it was a breaking change.
  PR Reference: https://github.com/backstage/backstage/pull/6839

### Patch Changes

- 05f0409: Merge Jobs for Release Pull Requests and Package Publishes

## 0.7.0

### Minor Changes

- 9d1f8d8: The `techdocs-cli publish` command will now publish TechDocs content to remote
  storage using the lowercase'd entity triplet as the storage path. This is in
  line with the beta release of the TechDocs plugin (`v0.11.0`).

  If you have been running `techdocs-cli` prior to this version, you will need to
  follow this [migration guide](https://backstage.io/docs/features/techdocs/how-to-guides#how-to-migrate-from-techdocs-alpha-to-beta).

## 0.6.2

### Patch Changes

- f1bcf1a: Changelog (from v0.6.1 to v0.6.2)

  #### :bug: Bug Fix

  - `techdocs-cli`
    - [#105](https://github.com/backstage/techdocs-cli/pull/105) Add azureAccountKey parameter back to the publish command ([@emmaindal](https://github.com/emmaindal))

  #### :house: Internal

  - `embedded-techdocs-app`
    - [#122](https://github.com/backstage/techdocs-cli/pull/122) chore(deps-dev): bump @types/node from 12.20.20 to 16.7.1 in /packages/embedded-techdocs-app ([@dependabot[bot]](https://github.com/apps/dependabot))
    - [#120](https://github.com/backstage/techdocs-cli/pull/120) chore(deps-dev): bump @types/react-dom from 16.9.14 to 17.0.9 in /packages/embedded-techdocs-app ([@dependabot[bot]](https://github.com/apps/dependabot))
    - [#119](https://github.com/backstage/techdocs-cli/pull/119) chore(deps-dev): bump @testing-library/user-event from 12.8.3 to 13.2.1 in /packages/embedded-techdocs-app ([@dependabot[bot]](https://github.com/apps/dependabot))
    - [#118](https://github.com/backstage/techdocs-cli/pull/118) chore(deps-dev): bump @testing-library/react from 10.4.9 to 12.0.0 ([@dependabot[bot]](https://github.com/apps/dependabot))
  - Other
    - [#117](https://github.com/backstage/techdocs-cli/pull/117) chore(deps): bump @backstage/plugin-catalog from 0.6.11 to 0.6.12 ([@dependabot[bot]](https://github.com/apps/dependabot))
    - [#124](https://github.com/backstage/techdocs-cli/pull/124) Update release process docs ([@emmaindal](https://github.com/emmaindal))
    - [#116](https://github.com/backstage/techdocs-cli/pull/116) ignore dependabot branches for project board workflow ([@emmaindal](https://github.com/emmaindal))
    - [#106](https://github.com/backstage/techdocs-cli/pull/106) Configure dependabot for all packages ([@emmaindal](https://github.com/emmaindal))
    - [#102](https://github.com/backstage/techdocs-cli/pull/102) readme: add information about running techdocs-common locally ([@vcapretz](https://github.com/vcapretz))
    - [#103](https://github.com/backstage/techdocs-cli/pull/103) Introduce changesets and improve the publish workflow ([@minkimcello](https://github.com/minkimcello))
    - [#101](https://github.com/backstage/techdocs-cli/pull/101) update yarn lockfile to get rid of old version of node-forge ([@emmaindal](https://github.com/emmaindal))

  #### Committers: 3

  Thank you for contributing ❤️

  - `Emma Indal` ([@emmaindal](https://github.com/emmaindal))
  - `Min Kim` ([@minkimcello](https://github.com/minkimcello))
  - `Vitor Capretz` ([@vcapretz](https://github.com/vcapretz))
