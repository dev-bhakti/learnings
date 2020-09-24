-The task is to create new files like main.ts file,index.html file,new module and new component and bind them together.

-I have created new module file named as first using,
ng g m first

-Created new component named as firstn using,
ng g c first

-When the angular app runs, firstly main.ts file run i.e. control goes in  main.ts.
-So created new file which is same as main.ts and named it as bhakti.ts and bootstraped FirstModule or AppModule in it.
-And to load the bhakti.ts file instead of main.ts,so have changed the option of main file in angular.json. so changed "main": "src/main.ts" to "main": "src/bhakti.ts". So whenever I run the angular app, this bhakti.ts file get loaded.
-And also main.ts is mentioned in tsconfig.app.json file which has basic details of angular app, so in the tsconfig.app.json there is  files array in which "src/main.ts" is there,so changed it to "src/bhakti.ts".

-So, now when the angular app runs,bhakti.ts is load and the control goes to  FirstModule, which is imported and bootstraped in the bhakti.ts.

-Now, go the first.module.ts file and import the first component that we have created. so import and bootstrap the FirstComponent in the first.module.ts. 
-Also import BrowserModule in the first.module.ts. from 
import { BrowserModule } from '@angular/platform-browser';

-So,the FirstComponent is loaded from the first.module.ts.
So i have written some lines of code in the first.component.ts

-So, when we build the angular project again using ng s, the app is run with the new files that is bhakti.ts get loaded when the application run and all the files i.e. first.module.ts, first.component.html that binded together.

-Also we can have multiple index files in the project.
So if i want to replace the basic index.html file with new file, Create new html file named as bhakti.html. Add this bhakti.html file in the CLI configurations written in angular.json. Previously the basic index file is "index": "src/index.html", so changed it to the "index": "src/bhakti.html", and to load the newly created file bhakti.ts insted of index.html, we have to replace the previous file with new file. So in the angular.json there is configuration for the file replacement as fileReplacements and add the code for the replacing the old file with new. So, in fileReplacements, add
  {
                  "replace": "src/bhakti.html",
                  "with": "src/index.html"
  }
and build the app again using ng s.

-Also we can add the stylings to the code. so there is the style.css file already created in the project. So if we want to use new css file, so Create new css file and name it as styles-new.css and add the css code in it.And mention the styles-new.css in the angular.json file in the styles array.

-So,the thing we done is, 
	-Created new .ts file(bhakti.ts)which is same as main.ts
	 and mentioned it in angular.json and tsconfig.app.json
	-Created  new .html file(bhakti.html) which is same as 	 	 index.html and mentioned it in the angular.json
	- Also created the new module(first.module.ts) 
	-Created new component as first component.