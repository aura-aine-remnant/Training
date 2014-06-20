$(document).ready(function(){  

                console.log("Testing");

        $("#myform").submit(function(event){
                console.log("Loading");
               
 
                var frm = $('#myform');
                var basicFormatArray = frm.serializeArray();
                var wantedFormatArray = {};
               
                $.map(basicFormatArray, function(x, y) 
                                                                {
                                                                        wantedFormatArray[x['name']] = x['value'];
                                                                });
               
                var data = JSON.stringify(wantedFormatArray, null, "\t");
                               
            $.ajax({
                type: "POST",
                url: "https://api.mongolab.com/api/1/databases/feedbackforms/collections/aineforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu",
                data: data,
                dataType: 'json',
                contentType: "application/json",
                success: function (data) {
                    console.log('Sent');
                }
            });
            
 
            event.preventDefault();
            
        });
});



