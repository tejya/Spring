/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var report=angular.module('report1',[]);
report.controller('reportCtrl1',function($scope,$http,$sce){
    $scope.downloaddata;
    console.log('report controller srtated');
    var DOWNLOAD_FILE='http://192.168.6.145:8080/WebApplication1/rest/Audio/Conversion';
    init();
     function init()
     {
          try
          {
         // $scope.file = $sce.trustAsResourceUrl('loading.html' );
        $http.post(DOWNLOAD_FILE,{},{responseType: 'arraybuffer'}).success(function(data,status){
          if(data!=undefined)
          {
            $scope.downloaddata=data;
            printAlert('data checked----- from server '+$scope.downloaddata);
        }
//        var file = new Blob([data], {type: 'video/mp4' });
//               //  var file = new Blob([data], {type: 'video/wmv' });
//         var fileURL = URL.createObjectURL(file);
//         printAlert('before file ----'+fileURL);
//         $scope.file = $sce.trustAsResourceUrl(fileURL);
//           printAlert('before file ----'+ $scope.file);
//         window.open(fileURL);
//            console.log('data from server'+$scope.file);
//       var fileName='testaudio.mp3';
        printAlert('inside onload event --');
   // writeAudioToFile(fileName,data);
      
      
      
      
    }).error(function(data,status){
        
        
    });

     
     
     //call back for storaing local storage
  }
 catch(Error)
 {
     printAlert(Error);
 }

 };//init
    
    
    
    $scope.play=function()
    {
   //   var   fileName='Test.pdf';
      // var fileName='testaudio.mp3';
   var fileName='test.mp4';
      printAlert('before call function');
     // writeAudioToFile(fileName,data);
     var data=$scope.downloaddata;
     console.log('data byte array---'+data)
     //writeVideoToFile(fileName,data);
       writeAudioToFile(fileName,data);
      // writePdfToFile(fileName,data);
       printAlert('after call function');
    };
    
    
    
        function  writeAudioToFile(fileName, data) {

try {
      printAlert('inside try block');
    window.resolveLocalFileSystemURL(cordova.file.externalApplicationStorageDirectory, function (directoryEntry) {
         printAlert('after window block'+fileName+'   data from server'+data);
        directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {

            fileEntry.createWriter(function (fileWriter) {
                fileWriter.onwriteend = function (e) {

                    //window.open(cordova.file.externalApplicationStorageDirectory + fileName, '_system', 'location=yes');

                    cordova.plugins.fileOpener2.open(cordova.file.externalApplicationStorageDirectory + fileName, 'audio/mp3',
                        {
                            error: function (e) {
                               printAlert('Error status: ' + e.status + ' - Error message: ' + e.message);
                            },
                            success: function (data) {
                                 printAlert('after success  blockdata from server'+data);
                                printAlert('file opened successfully');
                            }
                        }
                    );
                };

                fileWriter.onerror = function (e) {
                    printAlert(e);
                };

                var blob = new Blob([data], { type: 'audio/mp3' });
           printAlert('after blob  for audio '+blob);
                fileWriter.write(blob);
                  printAlert('after filewriter'+blob);

            }, function onerror(e) {
                printAlert(e);
            });
        }, function onerror(e) {

            printAlert(e);
        });
    }, function onerror(e) {            
        printAlert(e);
    });

} catch (e) {
     printAlert(e);
}
}


//function for video

   function  writeVideoToFile(fileName, data) {

try {
      printAlert('inside try block');
    window.resolveLocalFileSystemURL(cordova.file.externalApplicationStorageDirectory, function (directoryEntry) {
         printAlert('after window block'+fileName+'   data from server'+data);
        directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {

            fileEntry.createWriter(function (fileWriter) {
                fileWriter.onwriteend = function (e) {

                    //window.open(cordova.file.externalApplicationStorageDirectory + fileName, '_system', 'location=yes');

                    cordova.plugins.fileOpener2.open(cordova.file.externalApplicationStorageDirectory + fileName, 'video/mp4',
                        {
                            error: function (e) {
                               printAlert('Error status: '+e+" " + e.status + ' - Error message: ' + e.message);
                            },
                            success: function (data) {
                                 printAlert('after success  blockdata from server'+data);
                                printAlert('file opened successfully');
                            }
                        }
                    );
                };

                fileWriter.onerror = function (e) {
                    printAlert('filewriter error:'+e);
                };

                var blob = new Blob([data], { type: 'video/mp4' });
           printAlert('after blob  for audio '+blob);
                fileWriter.write(blob);
                  printAlert('after filewriter'+blob);

            }, function onerror(e) {
                printAlert(e);
            });
        }, function onerror(e) {

            printAlert(e);
        });
    }, function onerror(e) {            
        printAlert(e);
    });

} catch (e) {
     printAlert(e);
}
}


//pdf
   function  writePdfToFile(fileName, data) {

try {
      printAlert('inside try block');
    window.resolveLocalFileSystemURL(cordova.file.externalApplicationStorageDirectory, function (directoryEntry) {
         printAlert('after window block'+fileName+'   data from server'+data);
        directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {

            fileEntry.createWriter(function (fileWriter) {
                fileWriter.onwriteend = function (e) {

                    //window.open(cordova.file.externalApplicationStorageDirectory + fileName, '_system', 'location=yes');

                    cordova.plugins.fileOpener2.open(cordova.file.externalApplicationStorageDirectory + fileName, 'application/pdf',
                        {
                            error: function (e) {
                               printAlert('Error status: ' + e.status + ' - Error message: ' + e.message);
                            },
                            success: function (data) {
                                 printAlert('after success  blockdata from server'+data);
                                printAlert('file opened successfully');
                            }
                        }
                    );
                };

                fileWriter.onerror = function (e) {
                    printAlert(e);
                };

                var blob = new Blob([data], { type: 'application/pdf' });
           printAlert('after blob  for audio '+blob);
                fileWriter.write(blob);
                  printAlert('after filewriter'+blob);

            }, function onerror(e) {
                printAlert(e);
            });
        }, function onerror(e) {

            printAlert(e);
        });
    }, function onerror(e) {            
        printAlert(e);
    });

} catch (e) {
     printAlert(e);
}
}

    function  printAlert(msg)
    {
     //   alert(msg);
    }

});