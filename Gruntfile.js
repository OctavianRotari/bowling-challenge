module.exports = function(grunt) {
	grunt.initConfig({
		coveralls: {
			options: {
				// LCOV coverage file relevant to every target 
				src: 'coverage-results/lcov.info',

				// When true, grunt-coveralls will only print a warning rather than 
				// an error, to prevent CI builds from failing unnecessarily (e.g. if 
				// coveralls.io is down). Optional, defaults to false. 
				force: false
			},
			your_target: {
				// Target-specific LCOV coverage file 
				src: 'coverage-results/extra-results-*.info'
			},
		},
	});
	grunt.loadNpmTasks('grunt-coveralls');
};
