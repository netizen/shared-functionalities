Coding Guidelines

1. First wrap a thin layer on top of RMWC components or any other open source third party library component which does nothing extra, but just wraps over. Then iterate and add functionalities as and when required so that we can keep the implementation light, maintainable and performant.
2. Always write unit tests and stories for each component being developed. No exceptions, please! :-)
3. For styling customizations, please use SCSS and CSS since we are embracing the clean and clear separation of style, structure and content, so that we conform to the Design-Develop workflow implemented through Google Material Design Components and RMWC.
4. Since the components are shared across the pods and teams, please make sure that you always strive for backwards compatibility while extending the component functionalities.
