const signupHandler = async function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username-signup");
    const passwordInput = document.getElementById("password-signup");

    const response = await fetch('/api/users', {
        method: "POST",
        body: JSON.stringify({
            username: usernameInput.value,
            password: passwordInput.value
        }),
        headers: { "Content-Type": 'application/json'}
    });

    console.log("response", response)

    if(response.ok){
        document.location.replace("/dashboard")
    } else {
        alert("Login failed!")
    }

};

document.getElementById("signup-form").addEventListener("submit", signupHandler)