// typescriptlang.org
<!-- tsc topic.js

npm i typescript -->

<!--npx create-react-app react-demos--> (react-demos is the file name or project name where we create our project)
<!--npx create -react-app react-demos-ts --template=typescript--> (this option sets of react application to use the ts compiler)



pwd               // to check path

npm init -y      // for created a local package.json file

npm i --save-dev typescript   // for dependencies for ts

./node_modules/.bin/tsc src/hello.ts              // path of file need to write to exectue function 


./node_modules/.bin/tsc --init    //create a new tsconfig.json file to read 

 "rootDir": "./src",    // in tsconfig file and write src soo the compiler read the changes in src file                           (Specify  the root folder within your source files. )

 "outDir": "./dist",   // create path file for output js file ( Specify an output folder for all emitted files.)

   "noEmitOnError": true,      // Disable emitting files if any type checking errors are reported.


   // so instead of writing path( ./node_modules/.bin/tsc ) for comand runing in compiler what we do we create a script called start in package.json 

   "scripts": {
    "build": "./node_modules/.bin/tsc"
  },

  // for all auto compiling and keep watching if changes happen

  "scripts": {
    "build": "tsc --watch",
    "start": "http-server -c-1 ./src"
  },