# badge

Badge - JavaScript client for badge
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 0.0.1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install badge --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your badge from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('badge')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/badge
then install it via:

```shell
    npm install YOUR_USERNAME/badge --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Badge = require('badge');

var api = new Badge.ProfilesApi()

var authorization = "authorization_example"; // {String} An API token that authenticates and authorizes an API user. Passed as 'Authorization: [api_token]'.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getV1Profiles(authorization, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://badge-referrals-staging.herokuapp.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Badge.ProfilesApi* | [**getV1Profiles**](docs/ProfilesApi.md#getV1Profiles) | **GET** /v1/profiles | List Profiles


## Documentation for Models

 - [Badge.AuthenticationErrorEntity](docs/AuthenticationErrorEntity.md)
 - [Badge.ErrorEntity](docs/ErrorEntity.md)
 - [Badge.ProfileEntity](docs/ProfileEntity.md)


## Documentation for Authorization

 All endpoints do not require authorization.

