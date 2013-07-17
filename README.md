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
