/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app=angular.module('audioapp',[]);

app.controller('audioCtrl',function($scope, $http){
    console.log('audio started')
//   $scope.start=function() 
//           {
//               alert('angular started')
//           // document.addEventListener("deviceready", onDeviceReady, false);
//
//            // device APIs are available
//            //
//          // function onDeviceReady() {
//                
//                console.log('Requesting file system');
//                alert('inside device ready');
//                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
//                  alert('inside device ready');
//          //  }
//
//         
//            
//    };
     function gotFS(fileSystem) {
            alert('started got fs')
                fileSystem.root.getDirectory("vids", {create: true}, gotDir);
            }

            function gotDir(dirEntry) {
                 alert('calling  got file');
                dirEntry.getFile("audio.mp3", {create: true, exclusive: false}, gotFile);
            }

            function gotFile(fileEntry) {
                var localPath = fileEntry.fullPath;
                var localUrl = fileEntry.toURL();
               alert('local path--'+localPath);
                 alert('local url--'+localUrl);
               
                console.log('Loaded local path: ' + localPath);
                console.log('Loaded local url: ' + localUrl);

//
//                  fileTransfer.download(IMG_DOWN_URL+"aid="+imageID+"&leadid="+$scope.leadid+"", 
//                             fileSystem.root.toURL() + '/'+imgName,



                var fileTransfer = new FileTransfer();
                var uri = encodeURI('http://192.168.6.224:8080/ekycmob/webresources/Audio/Convert?status=val123');
                alert('Downloading ' + uri + ' to ' + localPath);
              alert('server ulr.....'+uri);
                fileTransfer.download(
                    uri,
                    localUrl,
                    function(entry) {
                        alert('inside-- entry'+entry.fullPath)
                        alert('download complete (path): ' + entry.fullPath);
                        alert('download complete (url): ' + entry.toURL());
                        alert('download complete (native): ' + entry.toNativeURL());
                        document.getElementById('messages').innerHTML = 
                        'Downloaded Video path: ' + entry.fullPath + '<br />'
                        + 'Downloaded Video url: ' + entry.toURL() + '<br />'
                        + 'Downloaded Video Native url: ' + entry.toNativeURL() + '<br />';
                        var videoNode = document.querySelector('audio');
                        videoNode.src = entry.toNativeURL();
                    },
                    function(error) {
                       alert('download error source..... ' + error.source);
                        alert('download error target....' + error.target);
                        alert('download error code......'+error.code);
                    }
                );
            }

            function fail(error) {
                alert('Error creating file [' + error.name + ']: ' + error.message);
            }
    

   $scope.start = function ()
    {
        
         audioAlert('Angular Start Called');
        //http://192.168.6.76:8080/rest/downloadAudioFile/upload   http://192.168.6.224:8080/rest/Audio/Conversion?aid=test  responseType: 'arraybuffer'
        $http.post('http://192.168.6.224:8080/ekycmob/webresources/Audio/Convert', {'status':'val123'}).success(function (data, status, headers, config)
            {
                audioAlert('Sucesss DATA....'+data);
                var blob = new Blob([data], { type: 'audio/mp3' });
                var reader = new window.FileReader();
              reader.readAsDataURL(blob); 
            reader.onloadend = function() {
              $scope.base64data = reader.result;                
                console.log(  $scope.base64data );
                var fileName='audiodemo.mp3';
                writePDFToFile(fileName,data);
          }
                var videoNode = document.querySelector('audio');
                videoNode.src = blob;
            }).error(function (data, status, headers, config)
            {
                audioAlert('Error Data.....'+data);
            });
        
        
      function     writePDFToFile(fileName, data) {
         audioAlert('inside write --'); 

try {
     audioAlert('inside write --'); 
    window.resolveLocalFileSystemURL(cordova.file.externalApplicationStorageDirectory, function (directoryEntry) {
        directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {

            fileEntry.createWriter(function (fileWriter) {
                fileWriter.onwriteend = function (e) {

                    //window.open(cordova.file.externalApplicationStorageDirectory + fileName, '_system', 'location=yes');

                    cordova.plugins.fileOpener2.open(cordova.file.externalApplicationStorageDirectory + fileName, 'audio/mp3',
                        {
                            error: function (e) {
                               audioAlert('Error status: ' + e.status + ' - Error message: ' + e.message);
                            },
                            success: function () {
                                audioAlert('file opened successfully');
                            }
                        }
                    );
                };

                fileWriter.onerror = function (e) {
                    alert(e);
                };

                var blob = new Blob([data], { type: 'application/pdf' });

                fileWriter.write(blob);

            }, function onerror(e) {
                alert(e);
            });
        }, function onerror(e) {

            alert(e);
        });
    }, function onerror(e) {            
        alert(e);
    });

} catch (e) {
     alert(e);
}
}
        
        
       
        
//        var options = new FileUploadOptions();
//                     options.chunkedMode = false;
//                     window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
//                       audioAlert('Inside Window....');
//                         var fileTransfer;
//                             try {
//                                 fileTransfer = new FileTransfer();
//                            }catch(Err)
//                            {
//                                audioAlert('Error.....'+Err);
//                            }
//                             //fileTransfer.download("http://192.168.6.224:8080/rest/Audio/Conversion?aid="+imageID+"&leadid="+$scope.leadid+"",
//                             //fileSystem.root.toURL() + '/'+imgName,
//
//                             fileTransfer.download("http://192.168.6.224:8080/rest/Audio/Conversion?aid=test",
//                             fileSystem.root.toURL() + '/'+'',
//                             function (entry)
//                             {
//                                audioAlert('coming file download successs');
//                                audioAlert('File....'+entry.toURI());
//                             },
//                             function (error)
//                             {
//                                 audioAlert("Error during download....."+error.code);
//                                 audioAlert("Error Source....."+error.source);
//                                 audioAlert("Error Target....."+error.target);
//                             }, true, options);
//
//                                          })
   }

    function audioAlert(pMsg)
    {
        alert(pMsg);
    }








})