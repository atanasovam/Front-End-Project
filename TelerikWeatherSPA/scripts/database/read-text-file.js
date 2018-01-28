var myDB = (function () {
    var dataFile = [];
        $.ajax({
            url: '../data/sample.txt',
            dataType: "text",  
            async: false,
            error: function() {
            dataFile.push({error: true,
                sampleData: null});
            },
            success: function(data) {
                dataFile.push({error: false,
                    sampleData: data});
            },
            type: 'GET'
            });
        
    if (dataFile[0].error == false) {
        return {
            getError: dataFile[0].error,
            getData: dataFile[0].sampleData,

        }
    } else {
        return {
            getError: dataFile[0].erro,
            getData: ""
        }
    }
   
})();
