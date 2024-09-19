document.getElementById('signUpForm').addEventListener('submit', function(e){
    e.preventDefault()

        let email = document.getElementById('userEmail').value.trim();
        let password = document.getElementById('userPassword').value.trim();
        let arrayObj = []
        if(email && password){
            let userObj = {
                userEmail: email,
                userPassword:password,
            }
            arrayObj.push(userObj)
            let userDetails = JSON.stringify(arrayObj)
            localStorage.setItem('user',userDetails)
            window.location.href = "/pages/Sign-in.html"
        }
   
})