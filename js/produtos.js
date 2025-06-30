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
        <h2>${card.titulo}</h2>
        <p>${card.descricao}</p>
        <p><strong>R$ ${card.preco.toFixed(2)}</strong></p>
        <button onclick="adicionarCarrinho(${card.id})">Adicionar ao Carrinho</button>

        `;

        boloContainer.appendChild(cardBolo);
    }

    );
}

function exibirCardsKits() {
    const kitsContainer = document.querySelector('#kitsContainer');

    kits.forEach(card => {
        const cardkits = document.createElement('div');

        cardkits.classList.add('card');

        cardkits.innerHTML =

            `
            <img src= "${card.imagem}" alt="${card.titulo}">
        <h2>${card.titulo}</h2>
        <p>${card.descricao}</p>
        <p><strong>R$ ${card.preco.toFixed(2)}</strong></p>
        <button onclick="adicionarCarrinho(${card.id})">Adicionar ao Carrinho</button>

        `;

        kitsContainer.appendChild(cardkits);
    }

    );
}
function exibirCardsDoces() {
    const docesContainer = document.querySelector('#docesContainer');

    doces.forEach(card => {
        const cardDoces = document.createElement('div');

        cardDoces.classList.add('card');

        cardDoces.innerHTML =

            `
        <img src= "${card.imagem}" alt="${card.titulo}">
        <h2>${card.titulo}</h2>
        <p>${card.descricao}</p>
        <p><strong>R$ ${card.preco.toFixed(2)}</strong></p>
        <button onclick="adicionarCarrinho(${card.id})">Adicionar ao Carrinho</button>

        `;

        docesContainer.appendChild(cardDoces);
    }

    );
}

exibirCardsBolo();
exibirCardsKits();
exibirCardsDoces();