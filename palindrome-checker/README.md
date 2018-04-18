# Palindrome Checker


## API with a Web View to check palindrome strings

### Considerations about this projet: 
  > Used a standard directory structure for scalable APIs  
  > Also split the routes by feature and version
  > Using Unit Tests  
  > Created a simple file for the View using Vue.js


#

- ## What I used in this project
 > - NodeJS
 > - ExpressJS
 > - Eslint
 > - Husky
 > - Mocha and Chai
 > - EditorConfig
 > - DotEnv
 > - NPM Scripts
 > - Vue.js for the View

# 

## How to run this project

1- Clone this project
```shell
git@github.com:cotts/palindrome-checker.git
```

2- Install the Dependencies
```shell
npm install
```

3- Run the script to initialize the API and webview
```shell
npm run start
```

#

## To access the view

```
http://localhost:3000
```

## You can also try to check direct inside the API

## Usage
```
http://localhost:3000/api/v1/check/{string}
```
- If you get a `OK ` response, it means that the string is palindrome, or if you get a `Bad Request`, it means that the string isn't palindrome.

<br> 
<br>

## OBS.:  When you access the webview, the check button will only work if you type something inside the text input

