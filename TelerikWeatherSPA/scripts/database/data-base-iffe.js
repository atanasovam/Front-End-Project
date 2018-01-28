
var destination = (function () {
    
     // privates
     var name;
     var country;
     var id;
     var location;
     var categoryType = [{historical: false}, {seaside: false}, 
        {mountain: false}];

     var temperatureHistory = [];
     var currentTemperature;

     return {
        
       addItem: function( values ) {
         basket.push(values);
       },
    
       // Get the count of items in the basket
       getItemCount: function () {
         return basket.length;
       }
    };
})();