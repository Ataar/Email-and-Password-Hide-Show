
let id01 = document.getElementById('id01')
let id02 = document.getElementById('id02')
let form = document.getElementById('form')
let btn = document.getElementById('btn')
let email = document.getElementById('email')
let password = document.getElementById('password')


let onEmail = ()=>
{

    if(email.type==='password')
    {
        email.type='text';
        id01.classList.replace("fa-eye-slash", "fa-eye")
    }

    else
    {
        email.type= 'password';
        id01.classList.replace("fa-eye", "fa-eye-slash")
    }
}

      let onPassword = ()=>
      {
        if(password.type==='password')
        {
            password.type='text';
            id02.classList.replace("fa-eye-slash","fa-eye")
        }
        
        else
        {
            password.type= 'password';
            id02.classList.replace("fa-eye","fa-eye-slash")
        }
      }

      let emailFromDb = 'Mateen';
      let passFromDb = 'Ataar';

    
      let onsubmit =(eve)=>
      {
          eve.preventDefault()
          let emaillval = email.value;
          let passval = password.value;


          if(emaillval===emailFromDb && passval===passFromDb)
          {
            Swal.fire({
                icon: 'success',
                title: 'You are logged in Successfully',
                showConfirmButton: false,
                timer: 3000
              })
          }

          else{
            Swal.fire({
                icon: 'error',
                // title: 'Oops...',
                title:'Sorry!',
                text: 'Invalid Email or Password',
                timer: 3000		
            })
          }
          form.reset()
      }


 id01.addEventListener('click',onEmail)
 id02.addEventListener('click',onPassword)
 form.addEventListener('submit',onsubmit)
