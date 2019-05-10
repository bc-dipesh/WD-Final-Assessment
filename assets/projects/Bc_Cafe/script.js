    /*for responsive menu bar*/
    function slideshow(){
        var x = document.getElementById('check-class');
        if(x.style.display === "none")
            {
                x.style.display = "block";
            }
        else{
            x.style.display = "none";
        }
    }

    /*for map*/
    function myMap() {
        var mapOptions = {
        center: new google.maps.LatLng(	27.69152, 85.342049),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID 
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        }

    /*for form validation*/
    function frmValidate() {
      var user, pass;
        user = document.getElementById('user').value;
        pass = document.getElementById('pass').value;
        if(user == '' && pass == '')
            {
              swal("Error!", "Please fill all the fields!", "error");
                return false;
            }
        else if(pass == '')
            {
               swal("Error!", "Please fill up the password field", "error");
                return false;
            }
        else if(user == '')
            {
                swal("Error!", "Please enter the username", "error");
                return false;
            }
        else {
            if(user == 'admin' && pass == 'admin')
                {
                    swal("Successfully logged in!","", "success");
                    window.location = "https://www.bcdipesh.ga";
                    return false;
                }
            else{
                swal("Error!", "Username or password incorrect", "error");
                return false;
            }
        }
        return;
    }

    /*for popup*/
    function myFunction() {
         var name, email;
        user = document.getElementById('name').value;
        email = document.getElementById('email').value;
        
         if(user == '' && email == '')
            {
              swal("Error!", "Please fill all the fields!", "error");
                return false;
            }
        else if(email == '')
            {
               swal("Error!", "Please enter your email", "error");
                return false;
            }
        else if(user == '')
            {
                swal("Error!", "Please enter your name", "error");
                return false;
            }

            else{
                swal("Message successfully sent!", "", "success");
                return false;
            }
        return;
    }