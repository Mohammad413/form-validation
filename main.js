let name=document.querySelector('#name');
let email=document.querySelector('#email');
let password=document.querySelector('#password');
let confirmpassword=document.querySelector('#confirmpassword');
let allinput=[name,email,password];
let nameregex=/^([A-Z]|[a-z])(([A-Z]|[a-z])*(\d*))$/;
let emailregex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let button=document.querySelector('#button');
button.addEventListener('click',(e)=>{


  if(name.value===''||email.value===''||password.value===''){
        e.preventDefault();
    allinput.map(x=>{
  
  if(x.value==='') return x.placeholder=`*Please enter the value.`;
 
});}
  
  
  

  else {
     
    
    if(nameregex.test(name.value)===false){name.value='';
          e.preventDefault();
               name.placeholder='Enter a valid name.';
  }

    if(emailregex.test(email.value)===false){email.value='';
               e.preventDefault();                                  
               email.placeholder='Enter a valid email.';}
  }
  
  if(password.value.length<6){
        e.preventDefault();
    password.value='';
    password.placeholder='Password should be atleast six or more length.';
  }
  
  if(confirmpassword.value  !==   password.value){
        e.preventDefault();
    
    confirmpassword.value='';
    confirmpassword.placeholder='Password do not match.';
    
  }

  
  

  

  
});
