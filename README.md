# gateway-shared

Shared repository for all common code in the Gateway projects

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

1. components package: all re-usable React UI components as a single package with its own package.json

2. functions package: all re-usable typescript functions that can be shared between client and server like validation functions as a single package with its own package.json

3. example package: an example showing the usage of components and functions package together in an application.
