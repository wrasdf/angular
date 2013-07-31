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

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};