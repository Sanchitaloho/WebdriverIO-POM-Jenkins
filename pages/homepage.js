const elementutil=require('../utils/elementutil');
const constants= require("../constants")

class HomePage{

    get header(){ return $('h1.dashboard-selector__title')}
    get accountName(){return $('div.user-info-name')}
    get downArrow(){return $('img.nav-avatar ')}

    getPageTitle(){
        return elementutil.doGetPagetitle(constants.Home_Page_Title)
    }
    getHeaderText(){
        return elementutil.doGetText(this.header)
    }
    clickarrow(){
        elementutil.doClick(this.downArrow);
    }
    
    getLoggedUserName(){
        
        return elementutil.doGetText(this.accountName)

    }
}
module.exports=new HomePage