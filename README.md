# jasmineExample angularjs application.
This is an angularjs application that runs each example on an angularjs view.  The application is encapsulated in a visual studio solution for ease of use.  The project uses jasmine, ngMock to create the unit tests and then to run them it uses nodejs and karma. 

## To run it on your machine do the following:

## First: Install pre-requisites:
Install node.js and karma to run tests.  **You only do this once. if you have done before skip this step.**.  
1. Install **node.js** as cited **[here](http://blog.teamtreehouse.com/install-node-js-npm-windows)**
2. Install **karma**
```
npm install -g karma
```
3. Install angular-cli
```
npm install -g @angular/cli
```
4. install **[git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)**

> There are also a few ways to install Git on Windows. The most official build is available for download on the Git website. Just go to http://git-scm.com/download/win and the download will start automatically. Note that this is a project called Git for Windows, which is separate from Git itself; for more information on it, go to https://git-for-windows.github.io/.

## Second: Clone the source code in you computer with git
1. clone this project by opening command prompt.
2. cd to the folder where you want to place the project. for example :
```
cd c:\temp
```
3. clone the example from git
```
git clone https://github.com/jorgeperez99/jasmineExample.git
```
4. Navigate to the directory that was created
```
cd <directory name>
```
## Third: Run the tests
To run the tests, simply do a `npm test` in the command prompt.  A browser window will open with a **debug** button.  Click on the button and another window will open.  Open the developer window and check the console window.  you will see all tests that ran.
