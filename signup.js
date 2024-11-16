let signUpForm = document.getElementById('signInForm');
signUpForm.addEventListener('submit', async function (e) {
    e.preventDefault();


    let userEmailInput = document.getElementById('userEmail').value.trim();
    let userPasswordInput = document.getElementById('userPassword').value.trim();
    let localData = localStorage.getItem('user');
    let usersInfo = JSON.parse(localData);
   
    try {
        let usersApi = await fetch('https://fakestoreapi.com/users');
        let apiData = await usersApi.json();
       


        const inputValue = apiData.find(
            user => user.email === userEmailInput && user.password === userPasswordInput
        );


       


        if (inputValue) {
            window.location.href = "/index.html";
        } else {
            usersInfo.forEach(user => {
            let{userEmail,userPassword} = user
            if(userEmail ===  userEmailInput && userPassword === userPasswordInput){
                window.location.href = "/index.html";


            }else{
                alert("somthing went wrong")
            }
           
           });
        }
    } catch (error) {
        console.log("Error", error);
    }
});


