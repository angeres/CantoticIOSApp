var facebook = Alloy.Globals.Facebook;
//facebook.appid = 111606515549851;
facebook.appid = Ti.App.Properties.getString("ti.facebook.appid");
//facebook.permissions = ['user_friends','user_photos'];
$.fbButton.style = facebook.BUTTON_STYLE_WIDE;
facebook.authorize();

function validateUser(e) {
    var win=Alloy.createController('ProfileWin').getView();
 	win.open();
}

$.index.open();
