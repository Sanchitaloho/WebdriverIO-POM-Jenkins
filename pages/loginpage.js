const elementutil=require('../utils/elementutil');
const configdata= require("../config")

class LoginPage{


    //page locators
    get username(){return $('#username') } 
    get password(){return $('#password') } 
    get loginButton(){return $('#loginBtn') } 
    get signuplink(){return $('=Sign up')}
        // page actions

    getPageTitle(){
           return elementutil.doGetPagetitle(configdata.Login_Page_Title)
    }
    
    isSignuplinkDisplayed(){
        elementutil.doIsDisplayed(this.signuplink)
    }
     
    doLogin(emailID,pwd){
        elementutil.doSetValue(this.username,emailID)
        elementutil.doSetValue(this.password,pwd)
        elementutil.doClick(this.loginButton)

    }

}
module.exports=new  LoginPage();
