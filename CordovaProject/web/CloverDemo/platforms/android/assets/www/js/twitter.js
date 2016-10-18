var oauth;
var requestParams;
var options = {
    consumerKey: 'xWN4IKaNPbmaVhVAyTADVLmiJ',
    consumerSecret: 'xZBS1WIiQrDj9I57ee0uEF0Gf6lV7EVt3O8Jo5PXpEwZ52C0na',
    callbackUrl: "http://example.com/auth/twitter/callback/"
};
/*
 var obj1={"id":732825338691080192,
 "id_str":"732825338691080192",
 "name":"jwala",
 "screen_name":"jwala01278",
 "location":" ",
 "description":"",
 "url":null,
 "\entities":{"description":{"urls":[]}},
 "protected":false,
 "followers_count":3,
 "friends_count":23,
 "listed_count":0,
 "created_at":"Wed May 18 06:49:10 +0000 2016",
 "favourites_count":0,
 "utc_offset":null,
 "time_zone":null,
 "geo_enabled":true,
 "verified":false,
 "statuses_count":18,
 "lang":"en",
 "status":{"created_at":"Tue Jun 07 04:25:33 +0000 2016","id":740036951365976066,"id_str":"740036951365976066","text":"http:\/\/localhost:8080\/socialSharing\/test.html via @jwala01278dfdfdfdf","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":0,"favorited":false,"retweeted":false,"lang":"und"},"contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"F5F8FA","profile_background_image_url":null,"profile_background_image_url_https":null,"profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/732825806079184896\/a1nJbA-M_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/732825806079184896\/a1nJbA-M_normal.jpg","profile_link_color":"2B7BB9","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":true,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false} ;
 alert('idd'+obj1.id);
 alert('nmae'+obj1.name);*/

var tok = {
    "text": "{\"id\":732825338691080192,\"id_str\":\"732825338691080192\",\"name\":\"jwala\",\"screen_name\":\"jwala01278\",\"location\":\"\",\"description\":\"\",\"url\":null,\"entities\":{\"description\":{\"urls\":[]}},\"protected\":false,\"followers_count\":3,\"friends_count\":23,\"listed_count\":0,\"created_at\":\"Wed May 18 06:49:10 +0000 2016\",\"favourites_count\":0,\"utc_offset\":null,\"time_zone\":null,\"geo_enabled\":true,\"verified\":false,\"statuses_count\":18,\"lang\":\"en\",\"status\":{\"created_at\":\"Tue Jun 07 04:25:33 +0000 2016\",\"id\":740036951365976066,\"id_str\":\"740036951365976066\",\"text\":\"http:\\/\\/localhost:8080\\/socialSharing\\/test.html via @jwala01278dfdfdfdf\",\"truncated\":false,\"entities\":{\"hashtags\":[],\"symbols\":[],\"user_mentions\":[],\"urls\":[]},\"source\":\"\\u003ca href=\\\"http:\\/\\/twitter.com\\\" rel=\\\"nofollow\\\"\\u003eTwitter Web Client\\u003c\\/a\\u003e\",\"in_reply_to_status_id\":null,\"in_reply_to_status_id_str\":null,\"in_reply_to_user_id\":null,\"in_reply_to_user_id_str\":null,\"in_reply_to_screen_name\":null,\"geo\":null,\"coordinates\":null,\"place\":null,\"contributors\":null,\"is_quote_status\":false,\"retweet_count\":0,\"favorite_count\":0,\"favorited\":false,\"retweeted\":false,\"lang\":\"und\"},\"contributors_enabled\":false,\"is_translator\":false,\"is_translation_enabled\":false,\"profile_background_color\":\"F5F8FA\",\"profile_background_image_url\":null,\"profile_background_image_url_https\":null,\"profile_background_tile\":false,\"profile_image_url\":\"http:\\/\\/pbs.twimg.com\\/profile_images\\/732825806079184896\\/a1nJbA-M_normal.jpg\",\"profile_image_url_https\":\"https:\\/\\/pbs.twimg.com\\/profile_images\\/732825806079184896\\/a1nJbA-M_normal.jpg\",\"profile_link_color\":\"2B7BB9\",\"profile_sidebar_border_color\":\"C0DEED\",\"profile_sidebar_fill_color\":\"DDEEF6\",\"profile_text_color\":\"333333\",\"profile_use_background_image\":true,\"has_extended_profile\":false,\"default_profile\":true,\"default_profile_image\":false,\"following\":false,\"follow_request_sent\":false,\"notifications\":false}",
    "xml": "",
    "requestHeaders": {},
    "responseHeaders": {
        "date": "Tue, 07 Jun 2016 09:15:20 GMT",
        "content-encoding": "gzip",
        "x-content-type-options": "nosniff",
        "x-rate-limit-remaining": "13",
        "x-rate-limit-limit": "15",
        "status": "200 OK",
        "x-twitter-response-tags": "BouncerExempt, BouncerCompliant",
        "content-disposition": "attachment; filename=json.json",
        "strict-transport-security": "max-age=631138519",
        "x-access-level": "read-write-directmessages",
        "content-length": "799",
        "x-xss-protection": "1; mode=block",
        "x-response-time": "37",
        "pragma": "no-cache",
        "last-modified": "Tue, 07 Jun 2016 09:15:20 GMT",
        "server": "tsa_a",
        "x-frame-options": "SAMEORIGIN",
        "content-type": "application/json;charset=utf-8",
        "cache-control": "no-cache, no-store, must-revalidate, pre-check=0, post-check=0",
        "x-rate-limit-reset": "1465291818",
        "x-connection-hash": "7fecf9a84a0f3371247c476f08839286",
        "x-transaction": "e33ce2bf36a9436e",
        "expires": "Tue, 31 Mar 1981 05:00:00 GMT"
    }
}
//alert('text' + tok.text);
var tez = tok.text;
var res = tez.split(",");
var strName;
var tempName;
var name;
alert("0th..." + res[0]);
alert("id,,,,," + res);
for (i = 0; i < res.length; i++) {
    alert("for..."+res[i]);
    if (i == 2) {
        strName = res[i].split(":");
        alert("strName: " + strName);
        tempName = strName[1];
        alert("tempName: " + tempName);
        name = tempName.replace(/(^"|"$)/g, '');
        alert('tnameee...' + name);
    }
}
//var twitterKey = "732825338691080192-XSnLdufTtx5lqEFFeIfsuMTGb4YHrDU";
//var twitterKey = "twitter_token";
var twitterKey = "732825338691080192-C4RZ4k379ClnWF2vfFbAhhxLCAsi7iw";

var twitter = {
    login: function () {
        //alert('in to login....');
        if (localStorage.getItem('pKey') !== null) {
            var storedAccessData = localStorage.getItem('pKey');
            var rawData = storedAccessData;
            //alert('pkey....' + pkey);
            storedAccessData = JSON.parse(rawData);
            options.accessTokenKey = storedAccessData.accessTokenKey;
            options.accessTokenSecret = storedAccessData.accessTokenSecret;

            oauth = OAuth(options);
            //alert('option.....' + JSON.stringify(option));
            oauth.get('https://api.twitter.com/1.1/account/verify_credentials.json?skip_status=true');
           // alert('url redirection......');
        }
        else {
            try {
                //alert('coming else');
                // we have no data for save user
                oauth = OAuth(options);
                oauth.get('https://api.twitter.com/oauth/request_token', function (data) {
                    requestParams = data.text;
                    //alert('request Data.....' + data.text);
                    var appInBrowser = window.open('https://api.twitter.com/oauth/authorize?' + data.text, '_blank', 'hidden=no,location=no');
                    //alert('window Opened....');
                    appInBrowser.addEventListener('loadstart', function (location) {
                        //alert('load started....');
                        var loc = location.url;
                        if (loc.indexOf(options.callbackUrl + "?") >= 0) {
                            //alert('IF loop started');
                            // Parse the returned URL
                            var index, verifier = '';
                            var params = loc.substr(loc.indexOf('?') + 1);
                            //alert('ifffff...');
                            params = params.split('&');
                            for (var i = 0; i < params.length; i++) {
                                var y = params[i].split('=');
                                if (y[0] === 'oauth_verifier') {
                                    verifier = y[1];
                                }
                            }
                            //alert('befoe url');
                            // Here we are going to change token for request with token for access
                            oauth.get('https://api.twitter.com/oauth/access_token?oauth_verifier=' + verifier + '&' + requestParams, function (data) {
                                var accessParams = {};
                                var qvars_tmp = data.text.split('&');
                                //alert('befor for....');
                                for (var i = 0; i < qvars_tmp.length; i++) {
                                    var y = qvars_tmp[i].split('=');
                                    accessParams[y[0]] = decodeURIComponent(y[1]);
                                }

                                // Saving token of access in Local_Storage
                                var accessData = {};
                                accessData.accessTokenKey = accessParams.oauth_token;
                                accessData.accessTokenSecret = accessParams.oauth_token_secret;
                                localStorage.setItem('pKey', JSON.stringify(accessData));
                                //alert('pkeyy......'+pkey);
                                //CLOSE
                                appInBrowser.close();
                            });
                        }
                    });
                });
            }
            catch (e)
            {
                alert('erorrr' + e);
            }
        }
    },
    //tweet: function (object) {
    tweet: function () {

        var status = document.getElementById('twitid').value;
        document.getElementById('twitid').value = '';
        //alert("statuss" + status);
        var trim_user = true;
        var object = {};
        object.status = status;
        object.trim_user = 'true';
        //alert('object...' + JSON.stringify(object));

        //  {'status':document.getElementById('twittext').value, 'trim_user': 'true'}

//         var twittext = document.getElementById('twittext').value;
//         alert('twiterrrr' +twittext);

//        var storedAccessData= localStorage.getItem(twitterKey);
//            var rawData = storedAccessData;
//            storedAccessData = JSON.parse(rawData);
//            options.accessTokenKey = storedAccessData.accessTokenKey;
//            options.accessTokenSecret = storedAccessData.accessTokenSecret;

        var storedAccessData = localStorage.getItem('pKey');
        var rawData = storedAccessData;
        //var  rawData = storedAccessData;
        //alert('twitt...' + storedAccessData);
        //alert('raw data' + rawData);
        storedAccessData = JSON.parse(rawData);
        options.accessTokenKey = storedAccessData.accessTokenKey;
        options.accessTokenSecret = storedAccessData.accessTokenSecret;
        // alert('object data post......' + JSON.stringify(object));
        //alert('object data post......' + JSON.stringify(object));
        oauth = OAuth(options);

//        https://api.twitter.com/1.1/statuses/retweets_of_me.json?count=50&since_id=259320959964680190&max_id=259320959964680500
        oauth.get('https://api.twitter.com/1.1/account/verify_credentials.json?skip_status=true', function (data) {
            oauth.post('https://api.twitter.com/1.1/statuses/update.json', object);

        });
//        https://api.twitter.com/1.1/statuses/update.json
        //alert('complete posting.........');

    },
    Profile: function () {
        //alert('in to profile........');
        var storedAccessData = localStorage.getItem('pKey');
        var rawData = storedAccessData;
        //var  rawData = storedAccessData;
        //alert('twitt...' + storedAccessData);
        //alert('raw data' + rawData);
        storedAccessData = JSON.parse(rawData);
        options.accessTokenKey = storedAccessData.accessTokenKey;
        options.accessTokenSecret = storedAccessData.accessTokenSecret;
        // alert('object data post......' + JSON.stringify(object));
        //alert('object data post......' + JSON.stringify(object));
        oauth = OAuth(options);
        //alert('optionnn...');

//        https://api.twitter.com/1.1/statuses/retweets_of_me.json?count=50&since_id=259320959964680190&max_id=259320959964680500
        try {

            oauth.get('https://api.twitter.com/1.1/account/verify_credentials.json?skip_status=true', function (data) {
                //alert('validation...');
                oauth.get('https://api.twitter.com/1.1/account/verify_credentials.json', function (data) {
//                https://api.twitter.com/1.1/users/lookup.json?screen_name=twitterapi,twitter
//https://api.twitter.com/1.1/users/show.json?screen_name=twitterdev    
//https://api.twitter.com/1.1/users/lookup.json?screen_name=twitterapi,twitter
                    //alert('in to get...');
                    alert('timeline...' + JSON.stringify(data));
                    var Sdata = JSON.stringify(data);
					var splitData = '';
					var Name = '';
					var tempName = '';
					var splitName = '';
					if(Sdata != null && Sdata != "")
					{
						alert('007 Not null is coming');
						splitData = Sdata.split(",");
						for(var i=0; i<splitData.length; i++)
						{
							if(i == 2)
							{
								splitName = splitData[i].split(":");
								alert('007 Split Name....'+splitName);
								tempName = splitName[1];
								alert('007 Temp Name....'+tempName);
								Name = tempName.replace(/(^"|"$)/g, '');
								alert('007 Actula Name....'+Name);
							}								
						}
					}
                    var Pdata = JSON.parse(Sdata);
                    alert('Parse Data.....' + Pdata);
                    var name = Pdata.text;
                    alert('naam' + name);
                    var id1 = name.id;
                    // alert('id' + id1+JSON.);

                    //alert('pdata..' + JSON.stringify(Pdata));
                    console.log(Pdata);
                    //alert('data .text...' + JSON.stringify(data.text));
                    console.log(data.text);
                    console.log('sdsddfdf...............');
                    console.log(JSON.stringify(data))
                    var getText = JSON.stringify(data);

//                    for(var k=0; k<getText.length; k++)
//                    {
//                        alert("Index lopp...."+getText[k]);
//                        alert("Loo Name....."+getText[k].screen_name);
//                    }


                    //alert('Stringfy getText.....' + JSON.stringify(getText));
                    //alert('Stringfy getText Name.....' + JSON.stringify(getText).screen_name);
                    //alert('screen Name...' + JSON.stringify(data.text.screen_name));
                   // alert(' text.name...' + JSON.stringify(data.text.name));
                    document.getElementById('severdata').innerHTML = tempName;
                    document.getElementById('severdata1').innerHTML = Name;
                }
                );


            });
        }
        catch (e) {
            alert('try catch.....' + e);
        }
//        https://api.twitter.com/1.1/statuses/update.json
        alert('complete posting.........');








//        var xmlHttp = new XMLHttpRequest();
//        alert ('in to profile.....');
//        xmlHttp.open("GET", "https://api.twitter.com/1.1//users/lookup.json", false);
//        
////        https://api.twitter.com/1.1/statuses/user_timeline.json
//
//// Make sure you set the appropriate headers
//        xmlHttp.setRequestHeader("Header Goes Here");
//
//        xmlHttp.send(null);
//
//        var response = xmlHttp.responseText;
//        alert ('info .....'+response);
    },
    logout: function () {
        alert('logoutttt....');
        options.accessTokenKey = null;
        options.accessTokenSecret = null;
        window.localStorage.removeItem('pkey');
        alert('logout option' + JSON.stringify(option));
    },
    Prof: function () {
        alert('in to profile........');
        var storedAccessData = localStorage.getItem('pKey');
        var rawData = storedAccessData;
        //var  rawData = storedAccessData;
        alert('twitt...' + storedAccessData);
        alert('raw data' + rawData);
        storedAccessData = JSON.parse(rawData);
        options.accessTokenKey = storedAccessData.accessTokenKey;
        options.accessTokenSecret = storedAccessData.accessTokenSecret;
        // alert('object data post......' + JSON.stringify(object));
        //alert('object data post......' + JSON.stringify(object));
        oauth = OAuth(options);
        alert('optionnn...');

//        https://api.twitter.com/1.1/statuses/retweets_of_me.json?count=50&since_id=259320959964680190&max_id=259320959964680500
        try {

            oauth.get('https://api.twitter.com/1.1/account/verify_credentials.json?skip_status=true', function (data) {
                alert('validation...');
                oauth.get(' https://api.twitter.com/1.1/users/lookup.json?screen_name=twitterapi,twitter', function (data) {
//                https://api.twitter.com/1.1/users/lookup.json?screen_name=twitterapi,twitter
//                https://api.twitter.com/1.1/account/verify_credentials.json
//https://api.twitter.com/1.1/users/show.json?screen_name=twitterdev    
//https://api.twitter.com/1.1/users/lookup.json?screen_name=twitterapi,twitter
                    alert('in to validation....');
                    alert('dta in pro....' + data);
                    var twiUser = data;
                    alert('text' + twiUser.text);
                    var tez = twiUser.text;
                    var res = tez.split(",");
                    var strName;
                    var tempName;
                    var name;
                    alert("0th..." + res[0]);
                    alert("id,,,,," + res);
                    for (i = 0; i < res.length; i++) {
                        //alert("for..."+res[i]);
                        if (i == 2) {
                            strName = res[i].split(":");
                            alert("strName: " + strName);
                            tempName = strName[1];
                            alert("tempName: " + tempName);
                            name = tempName.replace(/(^"|"$)/g, '');
                            alert('tnameee...' + name);
                        }
                    }

                }
                );


            });
        }
        catch (e) {
            alert('try catch.....' + e);
        }
//        https://api.twitter.com/1.1/statuses/update.json
        alert('complete posting.........');








//        var xmlHttp = new XMLHttpRequest();
//        alert ('in to profile.....');
//        xmlHttp.open("GET", "https://api.twitter.com/1.1//users/lookup.json", false);
//        
////        https://api.twitter.com/1.1/statuses/user_timeline.json
//
//// Make sure you set the appropriate headers
//        xmlHttp.setRequestHeader("Header Goes Here");
//
//        xmlHttp.send(null);
//
//        var response = xmlHttp.responseText;
//        alert ('info .....'+response);
    }

};