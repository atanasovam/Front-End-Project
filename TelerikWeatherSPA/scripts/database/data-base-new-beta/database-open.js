//iffe that will connect locally or to online database - ajax request with the loading of the website

var database = (function (online = true) {
    var databaseURL;
    var systemFile = 'system-check.json';
    if(online === true) {
        //will connect to the online database
        databaseURL = 'google.drive' + '...';
        } else { 
        //will connect to the locally based file system
        databaseURL = '../data/' + 
    // }
    
    $.ajax({
        url: databaseUrl+systemFile, 
        dataType: 'JSON',
        success: function(data) {
            console.log(data.system.condition)
        }, 
        type: 'GET'
    });
    // $.ajax({
    //     url: '../data/'+name+'.json',
    //     dataType: "JSON",  
    //     async: false,
    //     error: function() {
            
    //             dataFile.push({error: true,
    //                     sampleData: null});
    //                 },
    //                 success: function(data) {
    //                     dataFile.push({error: false,
    //                         sampleData: data});
    //                 },
    //                 type: 'GET'
    //                 });
                
}

// var myDB = (function (name) {
//     console.log('../data/'+name+'.json')
//     var dataFile = [];
//         $.ajax({
//             url: '../data/'+name+'.json',
//             dataType: "JSON",  
//             async: false,
//             error: function() {
//             dataFile.push({error: true,
//                 sampleData: null});
//             },
//             success: function(data) {
//                 dataFile.push({error: false,
//                     sampleData: data});
//             },
//             type: 'GET'
//             });
        
//     if (dataFile[0].error == false) {
//         return {
//             getError: dataFile[0].error,
//             getData: dataFile[0].sampleData,

//         }
//     } else {
//         return {
//             getError: dataFile[0].error,
//             getData: ""
//         }
//     }
   
// });