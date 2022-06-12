let email = document.getElementById('email');
let password = document.getElementById('password');

function toast({ type, isLoggedIn = false }){
    return Toastify({
    text: isLoggedIn ? 'Logado com sucesso' : `Preencha o campo de ${type}`,
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: isLoggedIn ? '#84cc16' : '#b91c1c',
      color: "#fff",
      fontSize: "1.5rem",
      fontFamily: "Poppins"
    },
  
  }).showToast();
}

toast()

function validateForm(){
    if(!email.value){
        toast({ type: 'email' })
        return false;
    }
    if(!password.value){
        toast({ type: 'senha' })
        return false;
    }

    toast ({ isLoggedIn: true})

    return false;
}
