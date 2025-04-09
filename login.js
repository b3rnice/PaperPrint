const passwordFields = document.querySelectorAll('.password')
const background = document.getElementById('background')
const submitButton = document.getElementById('submit-button')

passwordFields.forEach((password) => {
    password.addEventListener('input', (e) => {
        const input = e.target.value
        const length = input.length
        const blurValue = 20 - length * 2
        background.style.filter = `blur(${blurValue}px)`
    });
});


submitButton.addEventListener('click', (e) => {
    e.preventDefault()

  passwordFields.forEach((password) => {
        password.value = ''
    })

    alert('Request processed')
});