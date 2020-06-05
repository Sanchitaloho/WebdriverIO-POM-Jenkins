const loginpage=require('../pages/loginpage')
const configdata= require("../config")

describe("Handling application login page feature in webdriver IO", function(){
    this.retries(2) ; // coming from mocha
    it("verify login page title",function(){
        
       browser.url('/');
       browser.maximizeWindow();
       const title=loginpage.getPageTitle();
       console.log('the page title is ', title);
       assert.equal(configdata.Login_Page_Title, title, 'title is not found'); // avoiding hard code data
    });

    it("verify signup link",function(){
        assert.equal(true, loginpage.isSignuplinkDisplayed(), 'signup link is not present')

    })
    it("verify Login",function(){
        loginpage.doLogin(configdata.username,configdata.password)
    })

});