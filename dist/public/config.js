System.config({
  "paths": {
    "*": "*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "github:components/jquery": "github:components/jquery@^2.1.1",
    "npm:lodash-node": "npm:lodash-node@^2.4.1",
    "npm:lodash-node@2.4.1": {},
    "github:jspm/nodelibs@0.0.2": {
      "base64-js": "npm:base64-js@^0.0.4",
      "ieee754": "npm:ieee754@^1.1.1",
      "json": "github:systemjs/plugin-json@master",
      "inherits": "npm:inherits@^2.0.1",
      "Base64": "npm:Base64@0.2"
    },
    "npm:inherits@2.0.1": {},
    "npm:base64-js@0.0.4": {},
    "npm:ieee754@1.1.3": {},
    "npm:Base64@0.2.1": {},
    "angular": "github:angular/bower-angular@^1.2.19",
    "angular/resource": "github:angular/bower-angular@^1.2.19",
    "github:components/angular-resource": "github:components/angular-resource@^1.2.0"
  }
});

System.config({
  "versions": {
    "github:components/jquery": "2.1.1",
    "npm:lodash-node": "2.4.1",
    "github:jspm/nodelibs": "0.0.2",
    "npm:base64-js": "0.0.4",
    "npm:ieee754": "1.1.3",
    "github:systemjs/plugin-json": "master",
    "npm:inherits": "2.0.1",
    "npm:Base64": "0.2.1",
    "github:angular/bower-angular": "1.2.19",
    "github:components/angular-resource": "1.2.0"
  }
});

