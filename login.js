document.addEventListener("DOMContentLoaded", function () {
    var eyeIcon = document.getElementById("login-eye");
    var passwordInput = document.getElementById("password");
    var loginForm = document.getElementById("login");

    eyeIcon.addEventListener("click", function () {
        passwordInput.type = (passwordInput.type === "password") ? "text" : "password"; //ternary operator
        eyeIcon.classList.toggle("ri-eye-off-line");
        eyeIcon.classList.toggle("ri-eye-line");
    });


        window.onclick = function(event) {
            if (event.target == loginForm) {
              loginForm.style.display = "none";
            }
          }
        
 

    });

    



