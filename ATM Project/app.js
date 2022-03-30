const loginBtn = document.querySelector('.login')
const createBtn = document.querySelector('.create')
const slider = document.querySelector('.slider')
const loginText = document.querySelector('.form')
const uName = document.querySelector('.user-id')
const uPass = document.querySelector('.user-pass')
const alertWindow = document.querySelector('.alert-window')
const modalWindow = document.querySelector('.modal-window')
let currUser  = ""
let invalid = 0;

let userArray = [];
let passArray = [];
let balance = new Array(9999).fill(0);

let storedUsers = JSON.parse(localStorage.getItem("users"))
let storedPass = JSON.parse(localStorage.getItem("pass"))
let storedBalance = JSON.parse(localStorage.getItem("balance"))

if(storedUsers){
    userArray = storedUsers
}
if(storedPass){
    passArray = storedPass
}
if(storedBalance){
    balance = storedBalance
}

document.addEventListener('DOMContentLoaded', ()=>{
    createBtn.click()
})

loginBtn.addEventListener('click', ()=>{
    slider.classList.remove('slider-rt')
    loginBtn.classList.remove('dark-bg')
    createBtn.classList.add('dark-bg')
    uName.classList.remove('create')
    uPass.classList.remove('create')
})
createBtn.addEventListener('click', ()=>{
    slider.classList.add('slider-rt')
    loginBtn.classList.add('dark-bg')
    createBtn.classList.remove('dark-bg')
    uName.classList.add('create')
    uPass.classList.add('create')
})
const proceedBtn = document.querySelector('.proceed')

proceedBtn.addEventListener('click', ()=>{
    if(uName.classList.contains('create') && uPass.classList.contains('create')){
        if(uName.value !== '' && uPass.value !== ''){
            if(userArray.indexOf(uName.value) === -1){
                userArray.push(uName.value)
                passArray.push(uPass.value)
                localStorage.setItem("users", JSON.stringify(userArray))
                localStorage.setItem("pass", JSON.stringify(passArray))
                alertWindow.style.cssText = 'right: 0;'
                alertWindow.textContent = "Registration Successful!"
                setTimeout(() => {
                    alertWindow.style.cssText = 'right: -25rem;'
                }, 2000);
            }else{
                alertWindow.style.cssText = 'right: 0;'
                alertWindow.textContent = "Sorry! Username taken!!"
                setTimeout(() => {
                    alertWindow.style.cssText = 'right: -25rem;'
                }, 2000);
            }
            
            uName.value = ''
            uPass.value = ''
        }
        else{
            uName.style.cssText = 'border-bottom: 2px solid red;';
            uPass.style.cssText = 'border-bottom: 2px solid red;';
            setTimeout(() => {
                uName.style.cssText = 'border-bottom: 2px solid #283655;';
                uPass.style.cssText = 'border-bottom: 2px solid #283655;';
            }, 1500);
        }
    }
    else{
        if(userArray.length === 0 && passArray.length === 0){
            alertWindow.style.cssText = 'right: 0;'
            alertWindow.textContent = "No Accounts! Please Register"
            setTimeout(() => {
                alertWindow.style.cssText = 'right: -25rem;'
            }, 2000);
        }
        else{
            if(uName.value !== '' && uPass.value !== ''){
                if(userArray.indexOf(uName.value) === -1){
                    alertWindow.style.cssText = 'right: 0;'
                    alertWindow.textContent = "No Such User Exists! Please Register"
                    setTimeout(() => {
                        alertWindow.style.cssText = 'right: -25rem;'
                    }, 2000);
                }
                else{
                    if(uPass.value === passArray[userArray.indexOf(uName.value)]){
                        alertWindow.style.cssText = 'right: 0;'
                        alertWindow.textContent = "login successful"
                        setTimeout(() => {
                            alertWindow.style.cssText = 'right: -25rem;'
                        }, 2000);
                        currUser = uName.value;
                        modalWindow.innerHTML = `<div class="login-container">
                                                    <h1 class="greet">Welcome, </h1>
                                                    <div class="buttons">
                                                    <button class="withdraw">Withdraw</button>
                                                    <button class="deposit dark-bg">Deposit</button>
                                                    <button class="balance dark-bg">Balance</button>
                                                    <div class="slider-sm"></div>
                                                    </div>
                                                    <div class="form">
                                                    <div class="details-money">
                                                    <h3 class = "bank-enq big-font">Enter amount to be withdrawn</h3><input type="text" class="user-id user-balance with-money">
                                                    </div>
                                                    </div>
                                                    <button class="close-btn">X</button>
                                                    <button class = "modal-proceed-btn">Proceed</button>
                                                </div>`
                        setTimeout(() => {
                            modalWindow.classList.add('modal-open')
                        }, 2000);
                        const xButton = document.querySelector('.close-btn')
                        const greet = document.querySelector('.greet')
                        greet.textContent += " " + uName.value
                        const bankEnq = document.querySelector('.bank-enq')
                        const userBal = document.querySelector('.user-balance')
                        const balBtn = document.querySelector('.balance')
                        const withBtn = document.querySelector('.withdraw')
                        const depBtn = document.querySelector('.deposit')
                        const sliderSm = document.querySelector('.slider-sm')
                        const modProceedBtn = document.querySelector('.modal-proceed-btn')
                        
                        withBtn.addEventListener('click', ()=>{
                            sliderSm.classList.remove('slider-sm-slide')
                            sliderSm.classList.remove('slider-sm-slide-full')
                            balBtn.classList.add('dark-bg')
                            depBtn.classList.add('dark-bg')
                            withBtn.classList.remove('dark-bg')
                            userBal.classList.remove('dep-money')
                            userBal.classList.add('with-money')
                            modProceedBtn.style.cssText = 'display: block';
                            bankEnq.textContent = "Enter amount to be withdrawn:"
                            userBal.style.cssText = "display: block;"
                        })
                        
                        depBtn.addEventListener('click', ()=>{
                            sliderSm.classList.add('slider-sm-slide')
                            sliderSm.classList.remove('slider-sm-slide-full')
                            withBtn.classList.add('dark-bg')
                            balBtn.classList.add('dark-bg')
                            depBtn.classList.remove('dark-bg')
                            bankEnq.textContent = "Enter amount to be deposited:"
                            modProceedBtn.style.cssText = 'display: block';
                            userBal.style.cssText = "display: block;"
                            userBal.classList.remove('with-money')
                            userBal.classList.add('dep-money')
                        })
                        
                        balBtn.addEventListener('click', ()=>{
                            sliderSm.classList.remove('slider-sm-slide')
                            sliderSm.classList.add('slider-sm-slide-full')
                            depBtn.classList.add('dark-bg')
                            withBtn.classList.add('dark-bg')
                            balBtn.classList.remove('dark-bg')
                            userBal.classList.remove('dep-money')
                            modProceedBtn.style.cssText = 'display: none';
                            bankEnq.textContent = "Balance of " + currUser + " is: $" + balance[userArray.indexOf(currUser)]
                            userBal.style.cssText = "display: none;"
                        })

                        xButton.addEventListener('click', ()=>{
                            modalWindow.classList.remove('modal-open')
                        })
                        
                        modProceedBtn.addEventListener('click', ()=>{
                            if (userBal.classList.contains('with-money')){
                                if(balance[userArray.indexOf(currUser)] ===  0){
                                    alertWindow.style.cssText = 'right: 0;z-index: 99999'
                                    alertWindow.textContent = "You have 0 Balance! Please Deposit First"
                                    setTimeout(() => {
                                        alertWindow.style.cssText = 'right: -25rem;'
                                    }, 2000);
                                    userBal.value = ''
                                }else{
                                    if(!(userBal.value > balance[userArray.indexOf(currUser)])){
                                        if(parseInt(userBal.value)){
                                            balance[userArray.indexOf(currUser)] -= parseInt(userBal.value)
                                            localStorage.setItem("balance", JSON.stringify(balance))
                                            alertWindow.style.cssText = 'right: 0;z-index: 99999'
                                            alertWindow.textContent = "Succesfully withdrew $" + userBal.value
                                            setTimeout(() => {
                                                alertWindow.style.cssText = 'right: -25rem;'
                                            }, 2000);
                                        }else{
                                            alertWindow.style.cssText = 'right: 0;z-index: 99999'
                                            alertWindow.textContent = "Error! Please enter a number" + userBal.value
                                            setTimeout(() => {
                                                alertWindow.style.cssText = 'right: -25rem;'
                                            }, 2000);
                                        }
                                        userBal.value = ''
                                    }else{
                                        invalid +=1
                                        alertWindow.style.cssText = 'right: 0;z-index: 99999'
                                        alertWindow.textContent = "You have insufficient Balance!"
                                        setTimeout(() => {
                                            alertWindow.style.cssText = 'right: -25rem;'
                                        }, 2000);
                                        userBal.value = ''
                                        if(invalid == 4){
                                            xButton.click()
                                            alertWindow.style.cssText = 'right: 0;z-index: 99999'
                                            alertWindow.textContent = "Invalid input Recieved too many times!"
                                            setTimeout(() => {
                                                alertWindow.style.cssText = 'right: -25rem;'
                                            }, 2000);
                                        }
                                    }
                                }
                            }else if(userBal.classList.contains('dep-money')){
                                if(parseInt(userBal.value)){
                                    balance[userArray.indexOf(currUser)] += parseInt(userBal.value)
                                    localStorage.setItem("balance", JSON.stringify(balance))
                                    alertWindow.style.cssText = 'right: 0;z-index: 99999'
                                    alertWindow.textContent = "Succesfully deposited $" + userBal.value
                                    setTimeout(() => {
                                        alertWindow.style.cssText = 'right: -25rem;'
                                    }, 2000);
                                }else{
                                    alertWindow.style.cssText = 'right: 0;z-index: 99999'
                                    alertWindow.textContent = "Error! Please enter a number" + userBal.value
                                    setTimeout(() => {
                                        alertWindow.style.cssText = 'right: -25rem;'
                                    }, 2000);
                                }
                                userBal.value = ''
                            }
                        })
                        
                    }
                    else{
                        alertWindow.style.cssText = 'right: 0;'
                        alertWindow.textContent = "Wrong Password"
                        setTimeout(() => {
                            alertWindow.style.cssText = 'right: -25rem;'
                        }, 2000);
                    }
                }
                uName.value = ''
                uPass.value = ''
            }
            else{
                uName.style.cssText = 'border-bottom: 2px solid red;';
                uPass.style.cssText = 'border-bottom: 2px solid red;';
                setTimeout(() => {
                    uName.style.cssText = 'border-bottom: 2px solid #283655;';
                    uPass.style.cssText = 'border-bottom: 2px solid #283655;';
                }, 1500);
            }
        }
    }
})
