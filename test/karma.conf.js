basePath = '';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'libs/angular.min.js',
    'libs/angular-mocks.js',
    '../project/js/myPasswordController.js',
    'unit/*.js'
];

autoWatch = false;
singleRun = true;

browsers = ['PhantomJS'];

reporters = ['progress', 'junit'];

junitReporter = {
    outputFile: 'unit/unit-result.xml',
    suite: 'unit'
};