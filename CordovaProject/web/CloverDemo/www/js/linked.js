/* Copyright (c) 2012-2014 Adobe Systems Incorporated. All rights reserved.
 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function () {
		alert('On Device Ready...');
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        //Initializing extensions
        SocialGap.Facebook_ChangeSettings('283699821966116', 'a231e8270c1b918fd63bfc7c7900cfe1', 'http://www.cloverinfotech.com/', '6b9d6de51c5d2aa29baccd2f0cf512f5');
        SocialGap.Linkedin_ChangeSettings('75jnn6f32k4th8', '8RI5o4BkPZcJYYt2', 'http://www.cloverinfotech.com', '');

        // SocialGap.Facebook_ChangeSettings('appID', 'appSecret', 'fbAppDomain', 'fbScopes');
        //SocialGap.Linkedin_ChangeSettings('apiKey', 'secretKey', 'ldAppDomain', 'ldScopes');	  


        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        alert('Received Event: ' + id);
    },
    logonSuccess: function (accessToken)
    {
        alert(accessToken);
    },
    logonFailure: function () {
        alert('Fail');
    },
    Share: function shareContent(accessToken) {
       alert('calling Share');
        // Build the JSON payload containing the content to be shared
        var payload = {
            
            "comment": "Check out developer.linkedin.com! http://linkd.in/1FC2PyG",
            "visibility": {
                "code": "anyone"
            }
        };
        alert('pay load'+JSON.stringify(payload));
try{
        IN.API.Raw("/people/~/shares?format=json")
                .method("POST")
                .body(JSON.stringify(payload))
                .result(onSuccess)
                .error(onError);
         alert('pay load after api..'+ JSON.stringify(payload));
     }catch(e){
       alert('try catch '+e);  
     }
    }
           

    

};
