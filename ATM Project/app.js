const loginBtn = document.querySelector('.login')
const createBtn = document.querySelector('.create')
const slider = document.querySelector('.slider')
const loginText = document.querySelector('.form')

loginBtn.addEventListener('click', ()=>{
    slider.classList.remove('slider-rt')
    loginBtn.classList.remove('dark-bg')
    createBtn.classList.add('dark-bg')
    loginText.innerHTML = `
    <div class="details">
        <h3>Username</h3><input type="text" class = "user-id"name="" id="Username" required>
    </div>
    <div class="details">
        <h3>Password</h3>
        <input type="password" class="user-pass" name="" id="Password" required>
    </div>
    <button class="proceed">Proceed</button>
    `
})
createBtn.addEventListener('click', ()=>{
    slider.classList.add('slider-rt')
    loginBtn.classList.add('dark-bg')
    createBtn.classList.remove('dark-bg')
    loginText.innerHTML = `
    <div class="details">
        <h3>Username</h3><input type="text" class = "user-id"name="" id="createUsername" required>
    </div>
    <div class="details">
        <h3>Password</h3>
        <input type="password" class="user-pass" name="" id="createPassword" required>
    </div>
    <button class="proceed">Proceed</button>
    `
})