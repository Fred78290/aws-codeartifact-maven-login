/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 428:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const core = __nccwpck_require__(757);
const exec = __nccwpck_require__(372);
const io = __nccwpck_require__(447);
const fs = __nccwpck_require__(147);
const codeArtifact = __nccwpck_require__(11);

async function run() {
  const region = core.getInput('region', { required: true });
  const domain = core.getInput('repo-domain', { required: true });
  const account = core.getInput('account-number', { required: true });
  const duration = core.getInput('duration', { required: false });
  const repo = core.getInput('repo-name', { required: true });
  const path = core.getInput('settings-xml-path', { required: true });
  const mirror = core.getInput('mirror', { required: false });
  
  const client = new codeArtifact.CodeartifactClient({ region: region });
  const authCommand = new codeArtifact.GetAuthorizationTokenCommand({
    domain: domain,
    domainOwner: account,
    durationSeconds: duration
  });

  const response = await client.send(authCommand);
  const authToken = response.authorizationToken;
  if (response.authorizationToken === undefined) {
    throw Error(`Auth Failed: ${response.$metadata.httpStatusCode} (${response.$metadata.requestId})`);
  }

  maven(domain, account, region, repo, authToken, path, mirror);
  
  core.setOutput('registry', `https://${domain}-${account}.d.codeartifact.${region}.amazonaws.com`);
  core.setSecret(authToken);
}

async function maven(domain, account, region, repo, authToken, path, mirror) {
  
  await io.rmRF(path);
  fs.exists(path, function(exists) {

  if(exists) {
      console.log('File exists. Deleting now ...');
      fs.unlinkSync(path);
  } else {
      console.log('File not found, so not deleting.');
  }

  });

  let file;

  if (mirror.toLowerCase() == 'true') {
   file = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<settings xmlns=\"http://maven.apache.org/SETTINGS/1.0.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://maven.apache.org/SETTINGS/1.0.0 https://maven.apache.org/xsd/settings-1.0.0.xsd\">
   <servers>
      <server>
         <id>${domain}-${repo}</id>
         <username>aws</username>
         <password>${authToken}</password>
      </server>
   </servers>
   <profiles>
        <profile>
         <id>${domain}-${repo}</id>
         <activation>
            <activeByDefault>true</activeByDefault>
         </activation>
         <repositories>
            <repository>
               <id>${domain}-${repo}</id>
               <url>https://${domain}-${account}.d.codeartifact.${region}.amazonaws.com/maven/${repo}/</url>
            </repository>
                </repositories>
      </profile>
   </profiles>
   <mirrors>
      <mirror>
         <id>${domain}-${repo}</id>
         <name>${domain}-${repo}</name>
         <url>https://${domain}-${account}.d.codeartifact.${region}.amazonaws.com/maven/${repo}/</url>
         <mirrorOf>*</mirrorOf>
      </mirror>
   </mirrors>
</settings>     
`;
  } else {
   file = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<settings xmlns=\"http://maven.apache.org/SETTINGS/1.0.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://maven.apache.org/SETTINGS/1.0.0 https://maven.apache.org/xsd/settings-1.0.0.xsd\">
   <servers>
      <server>
         <id>${domain}-${repo}</id>
         <username>aws</username>
         <password>${authToken}</password>
      </server>
   </servers>
   <profiles>
        <profile>
         <id>${domain}-${repo}</id>
         <activation>
            <activeByDefault>true</activeByDefault>
         </activation>
         <repositories>
            <repository>
               <id>${domain}-${repo}</id>
               <url>https://${domain}-${account}.d.codeartifact.${region}.amazonaws.com/maven/${repo}/</url>
            </repository>
                </repositories>
      </profile>
   </profiles>
</settings>     
`;     
  }

  fs.writeFile(path, file, { flag: 'wx' }, (callback) => {
    if (callback) core.setFailed(callback);
  });
}

module.exports = run;

if (require.main === require.cache[eval('__filename')]) {
    run();
}


/***/ }),

/***/ 757:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = eval("require")("@actions/exec");


/***/ }),

/***/ 447:
/***/ ((module) => {

module.exports = eval("require")("@actions/io");


/***/ }),

/***/ 11:
/***/ ((module) => {

module.exports = eval("require")("@aws-sdk/client-codeartifact");


/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(428);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;