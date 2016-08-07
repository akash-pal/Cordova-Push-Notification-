var gcm = require('node-gcm');
// Replace these with your own values.
var apiKey = "";
var deviceID="";

var service = new gcm.Sender(apiKey);
var message = new gcm.Message();
message.addData('title', 'My Title');
message.addData('message', 'My Message');

//image
message.addData('image', 'https://dl.dropboxusercontent.com/u/887989/antshot.png');

//sound
message.addData('soundname', 'default');
message.addData('soundname', 'ringtone');

//notId is used for stacking notifications
//message.addData('notId', 2);

//inbox stacking - 8 notificattions stacked
/*
message.addData('title', 'My Title');
message.addData('message', 'My 3 message');
message.addData('style', 'inbox');
message.addData('summaryText', 'There are %n% notifications');
*/

//action buttons
/*
message.addData('title', 'AUX Scrum');
message.addData('message', 'Scrum: Daily touchbase @ 10am Please be on time so we can cover everything on the agenda.');
message.addData('actions', [
    { "icon": "emailGuests", "title": "EMAIL GUESTS", "callback": "app.emailGuests", "foreground": true},
    { "icon": "snooze", "title": "SNOOZE", "callback": "app.snooze", "foreground": false},
]);
*/
//InLine replies- works only on Android N and above
/*
message.addData('title', 'AUX Scrum');
message.addData('message', 'Scrum: Daily touchbase @ 10am Please be on time so we can cover everything on the agenda.');
message.addData('actions', [
    { "icon": "emailGuests", "title": "EMAIL GUESTS", "callback": "app.emailGuests", "foreground": false, "inline": true},
    { "icon": "snooze", "title": "SNOOZE", "callback": "app.snooze", "foreground": false},
]);
*/
//color
/*
message.addData('title', 'Green LED');
message.addData('message', 'This is my message with a Green LED');
message.addData('ledColor', [0, 0, 255, 0]);
*/

//vibration pattern
/*
message.addData('title', 'Vibration Pattern');
message.addData('message', 'Device should wait for 2 seconds, vibrate for 1 second then be silent for 500 ms then vibrate for 500 ms');
message.addData('vibrationPattern', [2000, 1000, 500, 500]);
*/

//priority : order(-2,-1,0,1,2)
/*
message.addData('title', 'This is a min priority Notification');
message.addData('message', 'This notification should appear in last of all others');
message.addData('priority', -2);
*/

//Big Picture
/*
message.addData('title', 'Big Picture');
message.addData('message', 'This is my big picture message');
message.addData('style', 'picture');
message.addData('picture', 'http://36.media.tumblr.com/c066cc2238103856c9ac506faa6f3bc2/tumblr_nmstmqtuo81tssmyno1_1280.jpg');
message.addData('summaryText', 'The internet is built on cat pictures');
*/

//Background Notification - calls onNotification
/*
message.addData('title', 'Test Push');
message.addData('message', 'Push number 1');
message.addData('info', 'super secret info');
message.addData('content-available', '1');
*/

//visibility  notification. -1: secret, 0: private (default), 1: public. (NOT WORKING)

//message.addData('title', 'This is a secret Notification');
//message.addData('message', 'shows only the most minimal information, excluding even the notifications icon.');
//message.addData('visibility', -1);


//badges
/*
message.addData('title', 'Badge Test');
message.addData('message', 'Badges, we don\'t need no stinking badges');
message.addData('badge', 7);
*/


service.send(message, { registrationTokens: [ deviceID ] }, function (err, response) {
    if(err) console.error(err);
    else    console.log(response);
});