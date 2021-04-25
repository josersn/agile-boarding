var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var form = document.querySelector(".form-notification");

function handleForm(event) { 
    event.preventDefault(); 
    const spinner = document.querySelector(".spinner");
    const text = document.querySelector(".btn-text");

    text.classList.add("none");
    spinner.classList.remove("none");
    
    setTimeout(() => {
        spinner.classList.add("none")
        text.classList.remove("none")
        modal.style.display = "none";
        Toastify({
            text: "Notificação cadastrada com sucesso!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            backgroundColor: "linear-gradient(to right, #0068FF, #0a5fda)",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function(){} // Callback after click
          }).showToast();
    }
    , 3000);
} 
form.addEventListener('submit', handleForm);