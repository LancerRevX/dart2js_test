define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var main = Object.create(dart.library);
  var $text = dartx.text;
  const CT = Object.create(null);
  main.main = function main$() {
    html.querySelector("#output")[$text] = "Your Dart app is running.";
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;AAG6D,IAA3D,AAAyB,mBAAX,oBAAkB;EAClC","file":"main.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
