


const APP = {
    init() {
      APP.addListeners();
    },
    addListeners(){
        let form=document.form
        let firstName=document.querySelector("#firstName")
        let lastName=document.querySelector("#lastName")
        let email=document.querySelector("#email")
        let cell=document.querySelector("#phone")
        let pass=document.querySelector("#password")
        let conpass=document.querySelector("#conpassword")
        //after changing the whole value
        firstName.addEventListener("change",APP.testName)
        lastName.addEventListener("change",APP.testName)
        email.addEventListener("change",APP.testEmail)

        //while typing
        pass.addEventListener("input",APP.checkPasswordRequirements)
        conpass.addEventListener("input",APP.checkPasswordMatch)
        cell.addEventListener('input', APP.formatPhone);

         //what to do if something went wrong during validation
        firstName.addEventListener('invalid', APP.fail);
        lastName.addEventListener('invalid', APP.fail);
        email.addEventListener('invalid', APP.fail);
         //when the form gets submitted
        form.addEventListener('submit', APP.validate);


    },
    testName(e){
        let name=e.target
        name.setCustomValidity(''); //clear old message
        let current=name.checkValidity()
       
        if(current){
            let reg=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
            
            if(reg.test(name.value)===false){
               name.setCustomValidity("Invalid Username")
               console.log(name.validity);
               name.reportValidity(); //show the custom message, trigger invalid event
            }
        }
    },
    testEmail(e){
        let email=e.target
        email.setCustomValidity("")
        let current=email.checkValidity()

        if(current){
            let reg=/@gmail.com$/i
            if(reg.test(email.value)===false){
                email.setCustomValidity("Only @gmail.com accepted")
                email.reportValidity()

            }
        }
    }
    ,checkPasswordRequirements(input) {
        let password=input.path[0].value
        //check password requirements as user types
        // uppercase, lowercase, numeric, length >= 10
        // Allowed: [! @ # $ % ^ & * ( ) . , ? ; : ~]
        let pass=document.querySelector("#password")
        
        let passRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
        let current=passRegex.test(input)
       
        if(password.length<7){
          pass.setCustomValidity("")
          pass.setCustomValidity("The password must contain at least 8 letters")
          return pass.reportValidity()
        }
        console.log("remove class")
        pass.setCustomValidity("")
        

        
        
      }

      ,checkPasswordMatch(e){
        let pass=document.querySelector("#password")
        let input=e.target
        input.setCustomValidity("")
        let current=input.checkValidity()
        console.log(e.target)
        
        if(current){
            if(input.value !== pass.value){
                input.setCustomValidity("Passwords don't match")
                input.reportValidity()
            }
        }

      }
      ,validate(e){
        
        let form=e.target
        let email = document.getElementById('email');
       console.log('willValidate', email.willValidate);
      }

      

    }

    document.addEventListener('DOMContentLoaded', APP.init);
    