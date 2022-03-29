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
const bankEnq = document.querySelector('.bank-enq')
const userBal = document.querySelector('.user-balance')
const balBtn = document.querySelector('.balance')
const withBtn = document.querySelector('.withdraw')
const depBtn = document.querySelector('.deposit')
const sliderSm = document.querySelector('.slider-sm')

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

withBtn.addEventListener('click', ()=>{
    sliderSm.classList.remove('slider-sm-slide')
    sliderSm.classList.remove('slider-sm-slide-full')
    withBtn.classList.add('dark-bg')
    depBtn.classList.add('dark-bg')
    withBtn.classList.remove('dark-bg')
})

depBtn.addEventListener('click', ()=>{
    sliderSm.classList.add('slider-sm-slide')
    sliderSm.classList.remove('slider-sm-slide-full')
    withBtn.classList.add('dark-bg')
    balBtn.classList.add('dark-bg')
    depBtn.classList.remove('dark-bg')
})

balBtn.addEventListener('click', ()=>{
    sliderSm.classList.remove('slider-sm-slide')
    sliderSm.classList.add('slider-sm-slide-full')
    depBtn.classList.add('dark-bg')
    withBtn.classList.add('dark-bg')
    balBtn.classList.remove('dark-bg')
})


xButton.addEventListener('click', ()=>{
    modalWindow.classList.remove('modal-open')
})