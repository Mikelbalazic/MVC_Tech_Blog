const loginHandler = async function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username-login");
    const passwordInput = document.getElementById("password-login");

    const response = await fetch('/api/users/login', {
        method: "POST",
        body: JSON.stringify({
            username: usernameInput.value,
            password: passwordInput.value
        }),
        headers: { "Content-Type": 'application/json'}
    });

    console.log("response", response)

    if(response.ok){
        document.location.replace("/")
    } else {
        document.location.replace("/login")
        alert("Login failed!")
    }

};

document.getElementById("login-form").addEventListener("submit", loginHandler)