var form = document.querySelector(".form-login");

function handleForm(event) { 
    event.preventDefault(); 

    const spinner = document.querySelector(".spinner");
    const text = document.querySelector(".btn-text");

    text.classList.add("none");
    spinner.classList.remove("none");
    
    setTimeout(() =>
    window.location.href = "dashboard.html"
    , 3000);
} 
form.addEventListener('submit', handleForm);