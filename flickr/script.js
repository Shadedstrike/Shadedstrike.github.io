



  $(document).ready(function() {
    var already_searched = 0; //bool to know whether to clear cards on new search or not
    var num_pics = 0; //user requested num


    $("#opt1").click(function() {     //handle each possibility
        console.log("option 1 select")
         num_pics = 10; //get the user inputs
        //console.log("text is " + $("#dropdown").text());
        $("#dropdown").text("load 10 pics")
    });
    $("#opt2").click(function() {
        console.log("option 2 select")
         num_pics = 50;
        $("#dropdown").text("load 50.0 pics")
    });
    $("#opt3").click(function() {
        console.log("option 3 select")
         num_pics = 100;
        $("#dropdown").text("load 100 pics")
    });


    //load pics, etc
    $( "#search_button" ).click(function() {
      var query = $("#query").val()

      console.log("checking search status... " + already_searched)

      //delete cards on new search
      if(already_searched == 1){
        console.log("clearing cards....")
        document.getElementById("cards_here").innerHTML -= ""
        already_searched == 0;
      }

       console.log("clicked, query val = " + query + ", it is: " +typeof(query) + ", pics req'd = " + num_pics);

       var url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=113bf62ab98fa1d05bb8bd132bc59751&tags='+query+'&privacy_filter=1&safe_search=1&extras=&format=json&nojsoncallback=1';

         $.ajax({url:url, dataType:"json"}).then(function(data) {
           console.log(data);//Review all of the data returned

           for(var x = 0; x<num_pics; x++) // loop through each card then
           {
              if(typeof(data.photos.photo[x]) == 'undefined'){ //attempt to handle strange undefined error
                console.log("error: its undefined?")
                 x ++;
                 break;
               };
                if(num_pics == 0){
                 break;
               }
               //Review all of the data returned};
             //https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg'
             var img_link = 'https://live.staticflickr.com/'+data.photos.photo[x].server+'/'+data.photos.photo[x].id+'_'+data.photos.photo[x].secret+'_'+'q.jpg'
               //    console.log("current img link is " + img_link);
              //     console.log("iteration x is : "+ x);
               var fore = document.getElementById("cards_here"); //pull it on
               var html ="";
               var descriptions = data.photos.photo[x].title;
               var new_title = descriptions.substring(0,100); //we need to make it fit on the card, and some descriptions are really long.
               console.log("calculated description = ", descriptions)


              //html to be added
            //   html += "<div class='card bg-dark' >"
            //   html += "<div style='width:200px;'>";
            //   html += "<div style='height:200px;'>";
            //   html += "<div class='card-body'>";
          //     html += "<img src = "+img_link+" class = card-img-top>";

            //   html += "<div class='card-img-overlay'>"
            //   html += "<br><br><br><br><br>"
            //   html += "<p class='card-text text-light'>"+new_title+"<br>";
            //   html += "</div>";
            ///   html += "</div>";
            //   html += "</div>";
            //   html += "</div>";


        html +=    "<div class='card' style='width: 18rem;'>"
        html +=      "<img class='card-img-top' src="+img_link+" alt='Card image cap'>"
        html +=     " <div class='card-body'>"
        html +=       " <p class='card-text'>"+new_title+"</p>"
        html +=      "</div>"
      html +=      "</div>"


               fore.innerHTML += html;
          }
          already_searched = 1;  //so we delete cards when a new search is called
          console.log("set already_searched  to true");
     });
});
})
