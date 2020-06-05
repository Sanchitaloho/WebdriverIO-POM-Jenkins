const homepage=require('../pages/homepage')
const loginpage=require('../pages/loginpage')
const configdata= require("../config")
const constants= require("../constants")


describe("Handling application Home page feature in webdriver IO", function(){
   // this.retries(2) ; // coming from mocha
    it("verify Home page title",function(){
        
       browser.url('/');
       browser.maximizeWindow();
       loginpage.doLogin(configdata.username,configdata.password);
       const title=homepage.getPageTitle();
       console.log('The home page title is ', title);
       assert.equal(constants.Home_Page_Title, title, 'title is not found'); // avoiding hard code data
    });
    it("verify Header text",function(){
        const headtext=homepage.getHeaderText()
        assert.equal(constants.Home_header, headtext, 'Header is incorrect')

    })
    it("verify logged in user name",function(){
        homepage.clickarrow();
        const name=homepage.getLoggedUserName()
        assert.equal(configdata.accountname, name, 'Logged in User name is incorrect')

    })

})