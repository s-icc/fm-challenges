let form = document.getElementById('form')

const validateEmail = (email) => {
    const emailRegex =
        /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (emailRegex.test(email)) return true
    else return false
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let email = form.email.value

    if (validateEmail(email)) {
        form.email.classList.remove('invalid-email')
        icon.remove()
        errorText.remove()
    } else {
        let image = document.createElement('img')
        image.src = 'images/icon-error.svg'
        image.classList.add('icon-error')
        image.id = 'icon'
        image.alt = 'icon error'

        let errorText = document.createElement('p')
        errorText.textContent = 'Please provide a valid email'
        errorText.classList.add('error-text')
        errorText.id = 'errorText'

        form.email.classList.remove('valid-email')
        form.email.classList.add('invalid-email')

        if (form.lastChild.id != 'icon') form.append(image)
        if (form.lastChild.id != 'errorText') form.append(errorText)
    }
})
