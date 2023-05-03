

function login(){
let user=document.getElementById('user').value
let pass=document.getElementById('pass').value



    window.location.href='index.html'
    alert('Successfully logged in')
    // confirm('ddede')
    localStorage.setItem("Username",user);
   
}