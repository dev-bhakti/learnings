1)index.html- This is main html page when someone visits the site. All JS and CSS files are added automatically when the App is build

2)main.ts- Main entry point of the application.Compiles the application usind bootstrap in main module of application(app.module.ts). Also AOT compiler is used here without changing code i,e using --aot flag to build and serve commands.

3)polyfills.ts- It contains scripts that supports browser.

4)styles.css- It contains CSS files that usees styles for the project.

5)test.ts- This is main entry point for unit testing of the project.It contains some Angular-specific configuration.Basically we don't need to edit this file.

6).editorconfig- It has configuration for editors.This file maintains coding styles.It has file format that defines coding styles and also has text editor plugins.It is easily readable and maintains or do the version control.

7).gitignore- This specifies the files that should be ignored.

8)angular.json- It contains CLI configuration,including options like build, serve, test that used by CLI.This file has many configurations like:
i. version: It maintains configuration-file versions.
ii. newProjectRoot: This is the path where new projects are 
    created.
iii. defaultProject:When new project is created using ng 	              	new,that app is the default project and we can change it   	here from here. The defaultproject name is may use in 	commands and not provided as argument.
iv. schematics: The set of schematic is used with the CLI.It         	is a function that used in file to create,delete, or    	modify files in particular way.

9)package-lock.json- It contains the version information for all the packages installed when the node_modules are getting installed.The file format of the package-lock.json is having:
i. name: The name of package.Those packages also in  	 package.json
ii. version: The version of package.This is also present in the  package.json
iii. lockfileVersion: It is an integer version start with 1,and schemantics of this file is used when package-lock.json file
iv.dependencies: This is used to map package name to dependency object.It has following properties like:
	a)version:It is a specifier that uniquely identifies 	   	 	  package and used to fetch new copy of it
	b)Integrity: This is  standard subresource integrity
	c)resolved: It is path where Registry URL is present
	d)dev: If the dev value is true then the dev dependency is 	  transitive. if the dev value is false for dependencies 	   	  that are both development dependency and transitive 		  dependency of non dev dependency.
	e)requires: This is used to map module name to version.It 	   	  has list of all things that the module requires.

10)package.json: It is used for the configuring the dependencies that will be available  for the projects.The CLI command ng new creates the package.json file. npm and yarn install the packages that are identified in a package.json file.
In the package.json file, there are two groups of package
	1)Dependencies: It is used to run the application
	2)DevDependencies:It is used when we have to develop 	application

11)tsconfig.app.json: It is application specific Typescript configurations including the Typescript and Angular template compiler option.
The typescript configuration is primary language  of angular app development.Browsers can't execute TS directly,so it is transpiled into JS using tsc compiler.The TS envt that are importat are:tsconfig.json-Typescript compiler configuration, typings-typescript declaration files

12)tsconfig.json: It is the base Typescript configuration for all the projects.Other config files are inherit from this file.When input files are specified on Command Line,then tsconfig.json files are ignored

13)tsconfig.spec.json: It is Typescript configuration for application  tests.

14)tslint.json: It is file where Application Specific TsLint configuration.















