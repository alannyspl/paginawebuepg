document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    function showBackToTop() {
        backToTopButton.style.display = "block";
    }

    function hideBackToTop() {
        if (window.scrollY === 0) {
            backToTopButton.style.display = "none";
        }
    }

    // Seleciona os botões "Especial", "Sobre" e "Contato"
    const buttons = [
        document.querySelector("button[onclick*='#todays-special']"),
        document.querySelector("button[onclick*='#sobre']"),
        document.querySelector("button[onclick*='#contato']")
    ];

    // Adiciona evento de clique para mostrar o botão "Voltar ao Topo"
    buttons.forEach(button => {
        if (button) {
            button.addEventListener("click", showBackToTop);
        }
    });

    // Adiciona evento de scroll para esconder o botão quando voltar ao topo
    window.addEventListener("scroll", hideBackToTop);



// Função para converter texto em áudio
function speakText(text) {
    // Cancela qualquer fala pendente para evitar sobreposição
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'pt-BR'; // Define o idioma para português brasileiro
    // Log para verificação no console
    console.log("Falando:", text);
    window.speechSynthesis.speak(speech);
    }
    // Seleciona todos os elementos com a classe 'transcricao'
    const elements = document.querySelectorAll('.transcricao');
    // Adiciona um evento de mouseover para cada elemento
    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
    // Pega o texto do elemento e chama a função para ler em voz alta
    speakText(element.textContent);
    });
    });
});
