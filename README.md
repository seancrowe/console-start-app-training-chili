## Example Console Project
This application is set up for an example project for training purposes.

To set up the application all you need to do is install the packages:
```text
npm install
```

The script for modifying the code can be found in the ./src folder in index.ts

To run the application, you need to build the application using tsc. There is a script already available to transpile the TS to JS. 
You can run it with this small command:
```text
npm run build
```

Then you can run the application by using node:
```text
node ./dist/index.js
```

However, you will get an error because you are required to provide options to the script. The script uses commander.js, you can find the documentation on [github](https://github.com/tj/commander.js).

So, for example to run this script, you will need to provide the user, password, environment, address and documentId.

```text
node ./dist/index.js -u sean -p sean -e cool -a address -d document
```

Will return:
```json
{
  user: 'sean',
  password: 'sean',
  environment: 'cool',
  address: 'address',
  documentId: 'document'
}
```