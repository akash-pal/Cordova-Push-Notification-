# Cordova-Push-Notification
Push Notification

For the purpose of sending push notifications to cordova apps. 
The first step is to obtain a device token. A "device token" is specific to each device and each project.

<b><i>Pre-requisite:</i></b>

Google Cloud Messaging Project Number
For this go to Google Developer Console and create a new project.
Under Project Information is the Project Number

Google Cloud Messaging API Key for above Project (needed for server)
Go to Library -> Google Cloud Messaging -> Enable. Go to Credentials to create an API key of Type server.


<b><i>Adding the push-plugin to project:</i></b>

cordova plugin add https://github.com/phonegap/phonegap-plugin-push --variable SENDER_ID="XXXXXXX"

SENDER_ID represents the Project Id

Place the following code inside receivedEvent function within index.js

     var push = PushNotification.init({
        android: {
            senderID: "XXXXXX"
        },
        ios: {
            alert: "true",
            badge: "true",
            sound: "true"
        },
        windows: {}
    });

    push.on('registration', function(data) {
        console.log("device token: " + data.registrationId);
    });

    push.on('notification', function(data) {
           console.log(data.message);
           console.log(data.title);
           console.log(data.count);
           console.log(data.sound);
           console.log(data.image);
           console.log(data.additionalData);
    });

    push.on('error', function(e) {
           console.log(e.message)
    });
On running the above code from an Android or iOS device gives a device token.

NOTE: Device token shall be generated only on a real device not a virtual device.

For testing push notification go to this link [http://apns-gcm.bryantan.info/] Online Push Notification Test

For Android: Enter the Device token, Message and API key

For iOS: Enter the Device token, Message , choose PEM file and the environment (sandbox/production)  

