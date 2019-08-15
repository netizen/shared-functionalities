# gateway-shared

Shared repository for all shared functionalities in the Gateway projects.

## How to use?

### Bootstrap all dependencies:

```
$ yarn install
$ yarn bootstrap
```

### Build all the packages

```
$ yarn build
```

### Start storybook on port 9001.

```
$ yarn components
```

### Run the example application using components and functions on port 9000.

```
$ yarn example
```

## Summary

The structure is designed as a monorepository containing following three packages:

```
1. components package: all re-usable React UI components as a single package with its own package.json

2. abstractions package: all re-usable typescript interfaces, classes and functions that can be shared between the client and the server, and across pods as a single package with its own package.json

3. example package: an example showing the usage of components and abstractions from the example package.

```
