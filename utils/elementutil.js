const configdata= require("../config")

class ElementUtil{

    doClick(element){
        element.waitForDisplayed()
        element.click()
    }

    doSetValue(element,value){
        element.waitForDisplayed()
        element.setValue(value)
    }
    doGetText(element){
        element.waitForDisplayed()
        return element.getText()
    }
    doIsDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()
    }
    doGetPagetitle(pagetitle){
        browser.waitUntil(function(){
            return (browser.getTitle()=== pagetitle)
            },10000, 'Title is not displayed within given time'
        )
        return browser.getTitle()
    }
}
module.exports=new ElementUtil()