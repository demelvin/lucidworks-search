# `lucidworks-search` - The Lucidworks Coding Challenge
This project is a search application that was built for the [Lucidworks][lucidworks] Coding challenge. It was built to demonstrate some of the required coding abilities needed to perform well within a position at Lucidworks as well as make use of their newley released [Fusion Server 4.0][fusion server].

The application itself is called Qvino and allows users to search for wine reviews by title, taster, winery, or any.

The project structure is rather common but the JavaScript architecture is based on most of the best practices found witihn the [Angular Style Guide][angular style guide]. [Kaggle][kaggle] is the awesome site used to find the [Wine Review Dataset][dataset] which I imported into the Fusion Server.

## Getting Started
To get started you can simply clone the `lucidworks-search` repository, install its dependencies, and fire up a [Fusion Server][fusion server] locally.

## Prerequisistes

You need to clone the `lucidworks-search` (this) repository. You can download git from [here][git].

This project also makes use of Node.js tools to initialize and test `lucidworks-search`. You must have Node.js
and its package manager ([npm]) installed. You can get them from [here][node].

The latest version of [Fusion Server][fusion server] also needs to be installed, started. The [Quick Start][fusion quick start] is an excellent resource for this. 

Once started the qvino application needs to be imported. This is will provide the search results. Find instructions on how to do that [here][fusion import].

### Clone `lucidworks-search`

Clone the `lucidworks-search` repository using git:

```
git clone https://github.com/demelvin/lucidworks-search.git
cd lucidworks-search
```

### Install Dependencies
```
npm install
```

### Setup Fusion
Download, Install, and Setup the Fusion Server by following the [Quick Start][fusion quick start] guide.


### Run the Application

The project is preconfigured to run on a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now open a browser to the app at [`localhost:8000`][local-app-url].

### Running Unit Tests

The `lucidworks-search` app comes preconfigured with unit tests. These are written in [Jasmine][jasmine],
which run with the [Karma][karma] test runner.

To run the unit tests is to use the supplied npm script:

```
npm test
```


## Resources

[Lucidworks][lucidworks]

[Fusion Server 4.0.0][fusion server]

[Fusion Quick Start][fusion quick start]

[AngularJS Style Guide][angular style guide]

[Webpack][webpack]

[AngularJS][angularjs]

[Sass][sass]

[Kaggle][kaggle]

[Wine Review Dataset][dataset]

[Git][git]

[Node.js][node]

[NPM][npm]

[Jasmine][jasmine]

[Karma][karma]


[lucidworks]: https://lucidworks.com/
[fusion server]: https://doc.lucidworks.com/fusion-server/4.0/index.html
[fusion import]: https://doc.lucidworks.com/fusion-server/4.0/search-development/app-management.html#import-an-app
[fusion quick start]: https://doc.lucidworks.com/fusion-server/4.0/getting-started/quick-start.html
[angular style guide]: https://github.com/toddmotto/angularjs-styleguide
[webpack]: https://webpack.js.org/
[angularjs]: https://angularjs.org/
[sass]: http://sass-lang.com/
[kaggle]: https://www.kaggle.com
[dataset]: https://www.kaggle.com/zynicide/wine-reviews/data
[git]: https://git-scm.com/
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[local-app-url]: http://localhost:8000/
[jasmine]: https://jasmine.github.io/
[karma]: https://karma-runner.github.io/
