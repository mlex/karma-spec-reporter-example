# Example for usage of karma-spec-reporter

Just a small example to show the usage of the [karma-spec-reporter](http://github.com/mlex/karma-spec-reporter).

To run the tests, you first need to install the npm dependencies:

```
npm install
```

You can run the tests either with karma command line utility:
```
# make sure to have the karma-cli installed
npm install -g karma-cli

# run the tests (config is in karma.conf.js)
karma start karma.conf.js
```

Or you can use grunt to execute the karma tests
```
# make sure to have grunt-cli installed
npm install -g grunt-cli

# run the tests
grunt test
```

The last test fails intentionally (to see the error-message-formatter in action).


# Output of a test-run
```
DEBUG [config]: autoWatch set to false, because of singleRun
DEBUG [plugin]: Loading plugin karma-mocha.
DEBUG [plugin]: Loading plugin karma-chrome-launcher.
DEBUG [plugin]: Loading plugin karma-firefox-launcher.
DEBUG [plugin]: Loading plugin karma-phantomjs-launcher.
DEBUG [plugin]: Loading plugin karma-spec-reporter.
DEBUG [plugin]: Loading inlined plugin (defining ).
INFO [karma]: Karma v0.9.4 server started at http://localhost:9876/
INFO [launcher]: Starting browser PhantomJS
DEBUG [launcher]: Creating temp dir at /tmp/karma-78327798
DEBUG [launcher]: phantomjs /tmp/karma-78327798/capture.js
DEBUG [watcher]: Resolved files:
        /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma-mocha/lib/mocha.js
        /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma-mocha/lib/adapter.js
        /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/chai/chai.js
        /home/michael/development/codecentric/karma-spec-reporter-example/test/example.spec.js
DEBUG [web server]: serving: /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma/static/client.html
DEBUG [web server]: serving: /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma/static/karma.js
DEBUG [karma]: New browser has connected on socket LR1iPCX1n_IJ8ek42aA5
INFO [PhantomJS 1.8.1 (Linux)]: Connected on socket id LR1iPCX1n_IJ8ek42aA5
DEBUG [karma]: All browsers are ready, executing
DEBUG [web server]: serving: /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma/static/context.html
DEBUG [web server]: serving: /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma-mocha/lib/mocha.js
DEBUG [web server]: serving: /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma-mocha/lib/adapter.js
DEBUG [web server]: serving: /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/chai/chai.js
DEBUG [web server]: serving: /home/michael/development/codecentric/karma-spec-reporter-example/test/example.spec.js

array:
    push:
          PASSED  - should add an element
          PASSED  - should remove an element
          FAILED  - should do magic (this test will fail)       expected [] to include 'magic'
            at /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/chai/chai.js:401
            at include (/home/michael/development/codecentric/karma-spec-reporter-example/node_modules/chai/chai.js:639)
            at /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/chai/chai.js:2983
            at /home/michael/development/codecentric/karma-spec-reporter-example/test/example.spec.js:26
            at /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma-mocha/lib/mocha.js:3621
            at /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma-mocha/lib/mocha.js:3940
            at /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma-mocha/lib/mocha.js:3999
            at next (/home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma-mocha/lib/mocha.js:3868)
            at /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma-mocha/lib/mocha.js:3877
            at next (/home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma-mocha/lib/mocha.js:3825)
            at /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma-mocha/lib/mocha.js:3845
            at /home/michael/development/codecentric/karma-spec-reporter-example/node_modules/karma-mocha/lib/mocha.js:4790

PhantomJS 1.8.1 (Linux): Executed 3 of 3 (1 FAILED) (0.086 secs / NaN secs)

DEBUG [launcher]: Disconnecting all browsers
DEBUG [launcher]: Killing PhantomJS
DEBUG [launcher]: Process PhantomJS exitted with code 0
DEBUG [launcher]: Cleaning temp dir /tmp/karma-78327798
```
