/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { Application } from '@nativescript/core';

Application.run({ moduleName: 'app-root' })

/*  ************************ VIJAY  ************************ 
This is your entry point for NativeScript to start running your JavaScript code 
    ********************************************************
*/

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
