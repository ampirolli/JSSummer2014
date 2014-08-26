/*
 Let’s revisit form validation from week 2. 
  You will use your same form but create some new JavaScript. 
 
1. In your HTML make a fname and lname fields.
2. Using regular expression to validate your form.
    a. Full name must be a SpaceAlphaValidate, only characters and spaces allowed
    c. Email must start with characters, have a @ symbol, have another set 
       of characters have a period and end with 3 characters.
    d. Comments must not have any html.  Search for characters that have <> 
       wrapped around it.

3.  Once all the data is valid hide the form using [object].style.display='none'
    Display a div that will show the data entered.  You can add a div to the page
    and have it display:none to start.
div.style.display = 'block';

 */


function SpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z ]+/;
        return alphaRegex.test(str);			
}

function strip_HTML(str) {
        var findHtml = /^[<](.|\n)*?>[>]$/gi;
        return str.replace(findHtml,"");     
}

var emailRegex = /^[a-zA-Z0-9]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]{3}$/;
                       
function submitform() {
			
        var fname = document.getElementById('fname');

        if ( !fname.value.length ) {
                console.log("First name needs a length");
                err_fname.innerHTML = "<p>First Name is not valid.</p>";
                

        } else if ( SpaceAlphaValidate( fname.value ) === false ) {
                console.log("First name needs Alpha chars");
                err_fname.innerHTML = "<p>Last name needs Alpha chars</p>";
        } else {
                console.log("First name is good");
                err_fname.innerHTML = "";
        }
  /*----------------------------------------------------------------*/  
        var fname = document.getElementById('lname');
          
        if ( !lname.value.length ) {
                console.log("Last name needs a length");
                err_lname.innerHTML = "<p>Last Name is not valid.</p>";
                

        } else if ( SpaceAlphaValidate( lname.value ) === false ) {
                console.log("Lastname needs Alpha chars");
                err_lname.innerHTML = "<p>Last name needs Alpha chars</p>";
        } else {
                console.log("Last name is good");
                err_lname.innerHTML = "";
        }
        var email = document.getElementById('email');
        
 /*---------------------------------------------------------------*/     
 
        if ( emailRegex.test(email.value) ){
            console.log(email.value+' is valid');
            err_email.innerHTML = "";
            

        }else{
            console.log(email.value+'Email is Not valid');
            err_email.innerHTML = "<p>Email is not valid.</p>";

        }
           
 /*---------------------------------------------------------------*/
 
    
    
        var comments = document.getElementById('comments');
        comments.strip_HTML;

        if ( !comments.value.length ) {
                console.log("Comments field needs a length");
                err_comments.innerHTML = "<p>comments field is not valid.</p>";
                var hasErrors = true;

        } 
         else {
                console.log("Comments field is good");
                err_comments.innerHTML = "";
                
        }
 
        var results = document.getElementById('results');
 
 
 var mainform = document.getElementById('mainform');
 if(!hasErrors){
    console.log('displayblock');
    mainform.style.display = 'none';
   
};
 
 results.innerHTML = "<p>Here are your results:     Name: " + fname.value + " " + lname.value +", Email: " + email.value + ", Comments: " + comments.value + "<p>";
 
}
document.getElementById('submit').addEventListener('onclick', submitform);      




