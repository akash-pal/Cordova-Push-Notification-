var http = require('http');
var apn = require('apn');
var url = require('url');
 
var iPhone6 = "";

var myDevice = new apn.Device(iPhone6);
 
var note = new apn.Notification();
note.badge = 1;
note.sound = "beep.wav"; //path to your sound
note.contentAvailable = 1;

// You could specify this way
note.alert = "Jennifer L commented on your photo:\n Congratulations!! \u270C\u2764\u263A ";

// Or this way below to set a certain phrase on the button if the user has alert set for the notifications on the app and not just banner
// and a custom image to show upon launch from the notification.

//note.alert = { "body" : "Jennifer L commented on your photo:\n Congratulations!! \u270C\u2764\u263A ", "action-loc-key" : "Show Me!" , "launch-image" : "mysplash.png"};

/* payload property is custom internal use data - use for alert title in my sample app when in the foreground 
Providers can specify custom payload values outside the Apple-reserved aps namespace. Custom values 
must use the JSON structured and primitive types: dictionary (object), array, string, number, and Boolean. 
You should not include customer information (or any sensitive data) as custom payload data. Instead, use it 
for such purposes as setting context (for the user interface) or internal metrics. For example, a custom payload 
value might be a conversation identifier for use by an instant-message client app or a timestamp identifying 
when the provider sent the notification. */

note.payload = {'messageFrom': 'Push Notification Sample App'}; // additional payload
 
note.device = myDevice;
 
var callback = function(errorNum, notification){
    console.log('Error is: %s', errorNum);
    console.log("Notification " + JSON.stringify(notification));
}
var options = {
    gateway: 'gateway.sandbox.push.apple.com', // this URL is different for Apple's Production Servers and changes when you go to production
    errorCallback: callback,
    cert: 'cert.pem', // ** NEED TO SET TO YOURS - see this tutorial - http://www.raywenderlich.com/32960/apple-push-notification-services-in-ios-6-tutorial-part-1
    key:  'key.pem',  // ** NEED TO SET TO YOURS
    passphrase: 'Temp1234', // ** NEED TO SET TO YOURS
    port: 2195,                       
    enhanced: true,                   
    cacheLength: 100,
    debug:true                  
}
var apnsConnection = new apn.Connection(options);
//console.log("apnsConnection " + JSON.stringify(apnsConnection));
console.log("Note " + JSON.stringify(note));
apnsConnection.sendNotification(note);
