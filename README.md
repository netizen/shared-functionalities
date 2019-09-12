# shared-functionalities

Shared repository for all shared functionalities across multiple teams both on the client-side and server-side

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

### Start storybook on port 4000.

```
$ yarn components
```

### Run the example application using components and functions on port 8000.

```
$ yarn application
```

## Summary

The structure is designed as a monorepository containing following three packages:

1. abstractions package: all re-usable typescript interfaces, classes and functions that can be shared between the client and the server, and across pods as a single package with its own package.json

2. components package: all re-usable React UI components as a single package with its own package.json

3. application package: an example application showing the usage of components and abstractions from the application package.
