//const btn = document.querySelector("#send");
const email= document.querySelector("#email");
const names = document.querySelector("#name");
const checkbox = document.getElementById('check');
let lista = [];

  
  function ValidaForm(){
    let emailValue = email.value;
    let nameValue = names.value;
    
    if(names.hasAttribute('required') && nameValue && email.hasAttribute('required') && emailValue && checkbox.checked ){
     
      lista.push({emailValue , nameValue});// quando dá submit dá refresh na página e apaga o local storage
      localStorage.setItem('lista', JSON.stringify(lista));
      console.log("preenchido");
    }else{
      console.log("falta preencher");
    }
   
  
  }