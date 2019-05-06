// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#modal").hide();

$("#search-button").click(function(){
    var choice = $("#search-term").val();
  $.ajax({
        url:  "https://api.giphy.com/v1/gifs/search?q="+choice +"&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response) {
            var myImg = "";
            var width = $("#body").width() / 4;
            console.log(width);
            function modalDisplay(imgUrl){
                console.log("trigger");
                $("#modal").show();
                let mWidth = $("#modal").width();
                let IMG = "<img src=" + imgUrl + " width=" + mWidth + ">";
                $("#modal").html(IMG);
            
            };

            for(var i = 0; i < response.data.length; i++){
               var originalImgUrl = response.data[i].images.original.url;
                //Display
               var img = document.createElement('img');
               img.src = originalImgUrl;
               img.width = width;
               var onClick = function(){
                 modalDisplay(originalImgUrl);
                 };
               img.onclick = onClick;

               $('#body').append(img)
            //   myImg += "<img src=" + originalImgUrl + " width=" + width + " onclick=" + onClick + ">"
               
            }
        },
    }); 
  
});

$("#randomBtn").click(function(){
     var choice = $("#search-term").val();
     
  $.ajax({
        url:  "https://api.giphy.com/v1/gifs/search?q="+choice +"&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response) {
            let random = Math.floor(Math.random() * response.data.length);
            console.log(response.data.length);
            var originalImgUrl=response.data[random].images.original.url
  
            
            $('#body').html("<img src=" + originalImgUrl + ">");
            
        },
    }); 
})