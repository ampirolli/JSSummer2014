/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function PhoneValidate( str ){
        var alphaRegex = /^\(?([2-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return alphaRegex.test(str);
        // sets format for a valid phone number format
}
function EmailValidate( str ) {
        var alphaRegex = /^[a-zA-Z0-9]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]{3}$/;
        return alphaRegex.test(str);
        // sets format for a valid email format
}

function SpaceAlpha( str ) {
        var alphaRegex = /^[a-zA-Z ]+$/;
        return alphaRegex.test(str);
        
}
function stripHTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
        //removes html from comments
}

function submitForm(){
    
    //declaring the JSON user info
    var userInfo = {
            "Name": "",
            "Email": "",
            "Phone": "",
            "Description": ""
        };
    
    var fullname = document.getElementById("fullname");
    var fullname_err = document.getElementById("fullname_err");
    //decides whether the data entered is valid or not
    if  ( !fullname.value.length ) {
        fullname.classList.remove ('good');
        fullname.classList.add ('bad');
        fullname_err.innerHTML = '<p> Please Enter Full Name </p>';
        hasErrors = true;
        //checks to see if the name field has any entered data
        //and sends back an error if it has no data
    } else if ( SpaceAlpha( fullname.value ) === false ){
        fullname.classList.remove('good');
        fullname.classList.add('bad');
        fullname_err.innerHTML = '<p> Only characters and spaces allowed </p>';
        hasErrors = true;
        // checks to see if correct characters are entered and sends
        //back an error if theyre not
    } else {
        fullname.classList.remove('bad');
        fullname.classList.add('good');
        fullname_err.innerHTML = "";
        hasErrors = false;
    }
    //-------------------------------------------------------------------------
    var email = document.getElementById('email');
    var email_err = document.getElementById('email_err');
    //enters value for email and tests to see if it is valid or not
    if ( !email.value.length ) { 
            email.classList.add('bad');
            email.classList.remove('good');
            email_err.innerHTML = '<p>Please Enter an Email Address</p>';
            hasErrors1 = true;
            

    } else if ( EmailValidate( email.value ) === false ){
            email.classList.add('bad');
            email.classList.remove('good');
            email_err.innerHTML = '<p>Please Enter an Email</p>';
            hasErrors1 = true;
            
    } else {
            email.classList.add('good');
            email.classList.remove('bad');
            email_err.innerHTML = "";
            hasErrors1 = false;
    }
    //---------------------------------------------------------------------------
    var phone = document.getElementById('phone');
    var phone_err = document.getElementById('phone_err');
    //enters phone number and tests to see if it is valid
    if ( !phone.value.length ){
            phone.classList.add('bad');
            phone.classList.remove('good');
            phone_err.innerHTML = '<p>Please Enter a Phone number</p>';
            hasErrors2 = true;
    } else if ( PhoneValidate( phone.value ) === false ){
            phone.classList.add('bad');
            phone.classList.remove('good');
            phone_err.innerHTML = '<p>Please Enter a valid Phone Number</p>';
            hasErrors2 = true;
    } else {
            phone.classList.add('good');
            phone.classList.remove('bad');
            phone_err.innerHTML = "";
            hasErrors2 = false;
    }
    //--------------------------------------------------------------------
    //user enters the description and tests if it is valid or not
    var description = document.getElementById("description");
    var description_err = document.getElementById("description_err");
    description.value = stripHTML(description.value); // strips html from comment
    
    //this makes sure that the description isnt too long or too short
    if (description.value.length <= 0 || description.value.length > 150) {
        
            description.classList.add ('bad');
            description.classList.remove ('good');
            description_err.innerHTML = '<p> Comments are not valid</p>';
            hasErrors3 = true;
            
    } else {
        
            description.classList.add ('good');
            description.classList.remove ('bad');
            description_err.innerHTML = "";
            hasErrors3 = false;
    }
    //---------------------------------------------------------------------
    if(hasErrors === false && hasErrors1 === false && hasErrors2 === false && hasErrors3 === false) // checks to see if there are any errors and then saves data if there are none.
    {
        console.log("Data Entry Complete");
        
        userInfo.Name = fullname.value;
        userInfo.Email = email.value;
        userInfo.Phone = phone.value;
        userInfo.Description = description.value;
        
        //saves all the submited data into local storage
        var dataString = JSON.stringify(userInfo);
        localStorage.setItem(['User Info'],[dataString]);
        localStorage.setItem(['Name'], [userInfo.Name]);
        localStorage.setItem(['Email'], [userInfo.Email]);
        localStorage.setItem(['Phone'], [userInfo.Phone]);
        localStorage.setItem(['Description'], [userInfo.Description]);
        
        console.log(dataString);
        console.log(userInfo); 
  //-----------------------------------------------------------------------------   
        //resets the fields
        fullname.value = '';
        email.value = '';
        phone.value = '';
        description.value = '';
  //-----------------------------------------------------------------------------  


        //this adds rows to the table and all the data in the correct cells
        var tableData = document.getElementById('tableData');
        {
            var row = tableData.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            cell1.innerHTML = '<input id="clearRowData" type="button" value="Clear" />';
            cell2.innerHTML = localStorage.getItem(['Name']);
            cell3.innerHTML = localStorage.getItem(['Email']);
            cell4.innerHTML = localStorage.getItem(['Phone']);
            cell5.innerHTML = localStorage.getItem(['Description']);
        }
        var clearRowData = document.getElementById('clearRowData').addEventListener('click',clearRowData);
        function clearRowData(){
  
        document.getElementById('tableData').deleteRow;
    
};
    };
    
};




var deleteLast = document.getElementById('deleteLastRowData').addEventListener('click',deleteLast);
function deleteLast(){
    //delete rows 
    document.getElementById("tableData").deleteRow(0); 
    
};

var clear = document.getElementById('clearData').addEventListener('click',clearAll);
function clearAll(){
    //clears local storage
    
    localStorage.clear();
  
};