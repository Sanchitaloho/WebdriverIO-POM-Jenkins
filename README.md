# WebdriverIO-POM-Jenkins
This is POM framework using webdriver io and integration with git and jenkins

create workspace:
npm init
npm install webdriverio --save-dev  
npm install @wdio/cli --save-dev  
.node_modules/.bin/wdio config
npm install chai --save -dev
npm install chai-webdriverio --save -dev
npm install local-runner --save -dev

retry logic:
retry logic: testng use listeners
in webdriverio- use this.retries(2)

Mocha is a JavaScript test framework running on Node. ... Mocha allows asynchronous testing, test coverage reports, and use of any assertion library. 
Chai is a BDD / TDD assertion library for NodeJS and the browser that can be delightfully paired with any javascript testing framework
