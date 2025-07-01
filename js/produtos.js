const bolos = [
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Arráia',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    }


]

const kits = [
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
]

const doces = [
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de Bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
]

function exibirCardsBolo() {
    const boloContainer = document.querySelector('#boloContainer');

    bolos.forEach(card => {
        const cardBolo = document.createElement('div');

        cardBolo.classList.add('cardBolo');

        cardBolo.innerHTML =

            `
            <img src= "${card.imagem}" alt="${card.titulo}">
            <div class="bolosInfo">
            <h3>${card.titulo}</h3>
            <p>${card.descricao}</p>
            <p><strong>R$ ${card.preco.toFixed(2)}</strong></p>
            <button onclick="adicionarCarrinho(${card.id})">Adicionar ao Carrinho</button>
            </div>  
        `;

        boloContainer.appendChild(cardBolo);
    }

    );
}

function exibirCardsKits() {
    const kitsContainer = document.querySelector('#kitsContainer');

    kits.forEach(card => {
        const cardKits = document.createElement('div');

        cardKits.classList.add('cardKits');

        cardKits.innerHTML =

            `
            <img src= "${card.imagem}" alt="${card.titulo}">
            <div class="kitsInfo">
            <h3>${card.titulo}</h3>
            <p>${card.descricao}</p>
            <p><strong>R$ ${card.preco.toFixed(2)}</strong></p>
            <button onclick="adicionarCarrinho(${card.id})">Adicionar ao Carrinho</button>
            </div>
        `;

        kitsContainer.appendChild(cardKits);
    }

    );
}
function exibirCardsDoces() {
    const docesContainer = document.querySelector('#docesContainer');

    doces.forEach(card => {
        const cardDoces = document.createElement('div');

        cardDoces.classList.add('cardDoces');

        cardDoces.innerHTML =

            `
      
        <img src= "${card.imagem}" alt="${card.titulo}">
        <div class="docesInfo">
        <h3>${card.titulo}</h3>
        <p>${card.descricao}</p>
        <p><strong>R$ ${card.preco.toFixed(2)}</strong></p>
        <button onclick="adicionarCarrinho(${card.id})">Adicionar ao Carrinho</button>
        </div>
        `;

        docesContainer.appendChild(cardDoces);
    }

    );
}

exibirCardsBolo();
exibirCardsKits();
exibirCardsDoces();