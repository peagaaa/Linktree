const saudacao = 'Olá, mundo!'
const containerAnimationRenderized = document.getElementById('animation-container')
let indice = 0

function AnimationGreeting() {
    if (indice < saudacao.length){
        containerAnimationRenderized.innerHTML += saudacao.charAt(indice)
        indice++
        setTimeout(AnimationGreeting, 300)
    }else{
        setTimeout(() => {
            containerAnimationRenderized.innerHTML = ''
            indice = 0
            AnimationGreeting()
        }, 200)
    }
}

AnimationGreeting()