document.addEventListener('DOMContentLoaded', () => {
    // Lógica para o modal de imagens
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeButton = document.getElementsByClassName('close-button')[0];

    // Função para abrir o modal
    function openModal(imageSrc, description) {
        modal.style.display = 'flex'; // Usar flex para centralizar
        modalImage.src = imageSrc;
        captionText.innerHTML = description;
    }

    // Função para fechar o modal
    closeButton.onclick = () => {
        modal.style.display = 'none';
    };

    // Fechar o modal clicando fora da imagem
    modal.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Adicionar evento de clique para itens da galeria (Setup e Eventos)
    document.querySelectorAll('.gallery-item img').forEach(item => {
        item.addEventListener('click', () => {
            const description = item.nextElementSibling ? item.nextElementSibling.innerText : '';
            openModal(item.src, description);
        });
    });

    // Adicionar evento de clique para itens de certificação
    document.querySelectorAll('.cert-item img').forEach(item => {
        item.addEventListener('click', () => {
            const description = item.parentElement.dataset.description; // Pega a descrição do data-attribute do pai
            openModal(item.src, description);
        });
    });
});