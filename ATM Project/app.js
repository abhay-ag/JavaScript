const loginBtn = document.querySelector('.login')
const createBtn = document.querySelector('.create')
const slider = document.querySelector('.slider')
const loginText = document.querySelector('.form')
const uName = document.querySelector('.user-id')
const uPass = document.querySelector('.user-pass')
const alertWindow = document.querySelector('.alert-window')
const modalWindow = document.querySelector('.modal-window')
const xButton = document.querySelector('.close-btn')
const greet = document.querySelector('.greet')

let userArray = [];
let passArray = [];
let balance = new Array(9999).fill(0);

function greeting(uname){
    greet.textContent += " "+uname;
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
            userArray.push(uName.value)
            passArray.push(uPass.value)

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
                            modalWindow.classList.add('modal-open')
                        }, 2000);
                        greeting(uName.value);
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

xButton.addEventListener('click', ()=>{
    modalWindow.classList.remove('modal-open')
})