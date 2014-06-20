var repos = $.getJSON('https://api.mongolab.com/api/1/databases/feedbackforms/collections/aineforms?apiKey=qAFrws2KkmfZCyl6U2aZbn8N7EU2v0xu');

repos.done(function (repos) {
  var c = [];
  $.each(repos, function(key, value) {     
    c.push("<tr><th>" + "First Name" + "</th>");  
    c.push("<th>" + "Last Name" + "</th>");   
    c.push("<th>" + "Gender" + "</th>");
    c.push("<th>" + "DOB" + "</th>");
    c.push("<th>" + "H + C Number" + "</th>");
    c.push("<th>" + "Ward" + "</th>");
    c.push("<th>" + "Consultant" + "</th>");
    c.push("<th>" + "GP Name" + "</th>");  
    c.push("<th>" + "Practice" + "</th>"); 
    c.push("<th>" + "Care Rating" + "</th>"); 
    c.push("<th>" + "Cleanliness Rating" + "</th>"); 
    c.push("<th>" + "Carevisit From" + "</th>"); 
    c.push("<th>" + "Carevisit To" + "</th>"); 
    c.push("<th>" + "Services" + "</th>"); 
    c.push("<th>" + "Comments" + "</th></tr>"); 


    c.push("<tr><td>" + value.First_Name + "</td>");
    c.push("<td>" + value.Last_Name+ "</td>");
    c.push("<td>" + value.Gender+ "</td>");
    c.push("<td>" + value.DOB+ "</td>");
    c.push("<td>" + value.HC_Number+ "</td>");
    c.push("<td>" + value.Ward+ "</td>");
    c.push("<td>" + value.Consultant+ "</td>");
    c.push("<td>" + value.GP+ "</td>");
    c.push("<td>" + value.Practice+ "</td>");
    c.push("<td>" + value.Care_rating+ "</td>");
    c.push("<td>" + value.Cleanliness_rating+ "</td>");
    c.push("<td>" + value.carevisit_1+ "</td>");
    c.push("<td>" + value.carevisit_2+ "</td>");
    c.push("<td>" + value.Services+ "</td>");
    c.push("<td>" + value.Comments + "</td></tr>");    
  });
  $('#records_table').html(c.join(""));
});