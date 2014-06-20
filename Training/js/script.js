//validation scripts-->
function validate()
{
 
  //first and last name validation
  if( document.myform.First_Name.value == "" )
   {
     alert( "Please provide your First Name!" );
     document.myform.First_Name.focus() ;
     return false;
 }

  if( document.myform.Last_Name.value == "" )
   {
     alert( "Please provide your Last Name!" );
     document.myform.Last_Name.focus() ;
     return false;
 }

  //gender validation
  if( document.myform.Gender.value == "0" )
   {
     alert( "Please provide your Gender!" );
     document.myform.Gender.focus() ;
     return false;
 }

  //DOB javascript validation
  if( document.myform.DOB.value == "" )
   {
     alert( "Please provide your date of birth!" );
     document.myform.DOB.focus() ;
     return false;
 }

  //hcnumber validation ensure its not left blank
  if( document.myform.HC_Number.value == "" )
   {
     alert( "Please provide the H + C Number!" );
     document.myform.HC_Number.focus() ;
     return false;
 }
   
  //ward validation
  if( document.myform.Ward.value == "0" )
   {
     alert( "Please provide the Ward you stayed in!" );
     document.myform.Ward.focus() ;
     return false;
 }

  //consultant validation
  if( document.myform.Consultant.value == "0" )
   {
     alert( "Please provide the Consultant who atteneded you!" );
     document.myform.Consultant.focus() ;
     return false;
 }

 //GP validation
  if( document.myform.GP.value == "" )
   {
     alert( "Please provide the name of your GP!" );
     document.myform.GP.focus() ;
     return false;
 }

 //Practice validation
  if( document.myform.Practice.value == "" )
   {
     alert( "Please provide your GP's Practice!" );
     document.myform.Practice.focus() ;
     return false;
 }

//service validation
  if( document.myform.Services.value == "0" )
   {
     alert( "Please provide your Services!" );
     document.myform.Services.focus() ;
     return false;
 }

   return( true );
}


//get value used for care rating output to email
function getValue(Care_rating){
    document.getElementById("result").innerHTML = Care_rating
}

//get value used for Cleanliness_rating output to email
function getValue(Cleanliness_rating){
    document.getElementById("result").innerHTML = Cleanliness_rating
}

//print the text from text area
function PrintTextareaContent(Comments){
document.getElementById("result").innerHTML = Comments
}


