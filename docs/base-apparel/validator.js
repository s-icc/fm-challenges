let bgPattern = document.getElementById('bgPattern')
let form = document.getElementById('form')
let mq = window.matchMedia('(max-width: 745px)')

const validateEmail = (email) => {
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/

    if (emailRegex.test(email)) return true
    else return false
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let email = form.email.value

    if (validateEmail(email)) {
        form.email.classList.remove('form__input--invalid')
        if (form.icon) icon.remove()
        if (form.children.errorText) errorText.remove()
    } else {
        form.email.classList.add('form__input--invalid')

        if (!form.icon) {
            let image = document.createElement('img')
            image.src = 'images/icon-error.svg'
            image.classList.add('form__icon-error')
            image.id = 'icon'
            image.alt = 'icon error'
            form.append(image)
        }

        if (!form.children.errorText) {
            let errorText = document.createElement('p')
            errorText.textContent = 'Please provide a valid email'
            errorText.classList.add('form__error-text')
            errorText.id = 'errorText'
            form.append(errorText)
        }
    }
})

if (mq.matches) bgPattern.remove()
