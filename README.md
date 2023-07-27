# ceredian-interview-task  
uses typescript  
uses WebdriverIO framework
  
to run the test  
clone/check out project  
go to root dir  
npm i

npm run wdio

uses Page objects to open ceridian.com/support
then search 'Mobile'
click first result in list
confirm /hr/mobile is landing page

would have used this in interview but theres a bug regarding the need to add  
the chrome binary path to the config file manually that was introduced late last week and I didn't want to deal with it for a simple selenium test.  
  
  
actual test is the test.ts
