const bolos = [
    {
        id: 1,
        imagem: '/assets/doces/BoloChadeBebe.jpg',
        titulo: 'Bolo Chá de bebê',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 2,
        imagem: '/assets/doces/BoloArraia.jpg',
        titulo: 'Bolo Arráia',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 3,
        imagem: '/assets/doces/BoloBobEsponja.jpg',
        titulo: 'Bolo Bob Esponja',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 4,
        imagem: '/assets/doces/BoloBolsa.jpg',
        titulo: 'Bolo Bolsa',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 5,
        imagem: '/assets/doces/BoloCarros.jpg',
        titulo: 'Bolo do Carros',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 6,
        imagem: '/assets/doces/BoloCasaFantasma.jpg',
        titulo: 'Bolo Casa Fantasma',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 7,
        imagem: '/assets/doces/BoloChurrasco.jpg',
        titulo: 'Bolo Churrasco',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 8,
        imagem: '/assets/doces/BoloDinossauro.jpg',
        titulo: 'Bolo de Dinossauro',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 9,
        imagem: '/assets/doces/BoloDisney.jpg',
        titulo: 'Bolo Disney',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 10,
        imagem: '/assets/doces/BoloFazendinha.jpg',
        titulo: 'Bolo Fazendinha',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 11,
        imagem: '/assets/doces/BoloFundoDoMar.jpg',
        titulo: 'Bolo Fundo do Mar',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 12,
        imagem: '/assets/doces/BoloHalloween.jpg',
        titulo: 'Bolo de Halloween',
        descricao: 'sobre o bolo',
        preco: 200
    }


]

const kits = [
    {
        id: 1,
        imagem: '/assets/doces/doceCarros.jpg',
        titulo: 'Doce do Carros',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 2,
        imagem: '/assets/doces/DoceOncas.jpg',
        titulo: 'Doce de Onças',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 3,
        imagem: '/assets/doces/DoceBobEsponja.jpg',
        titulo: 'Doce do Bob Esponja',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 4,
        imagem: '/assets/doces/DoceHerois.jpg',
        titulo: 'Doce de Herois',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 5,
        imagem: '/assets/doces/DoceSmurfs2.jpg',
        titulo: 'Doce dos Smurfs',
        descricao: 'sobre o bolo',
        preco: 200
    },
]

const doces = [
    {
        id: 1,
        imagem: '/assets/doces/KitDinossauro.jpg',
        titulo: 'Kit de Dinossauto',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 2,
        imagem: '/assets/doces/KitmesversarioCirco.jpg',
        titulo: 'Kit Mesversario Circo',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 3,
        imagem: '/assets/doces/kitMesversarioFazendinha.jpg',
        titulo: 'Kit Mesversario Fazendinha',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 4,
        imagem: '/assets/doces/KitMesversaioPuff.jpg',
        titulo: 'Kit Mesversario Puff',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 5,
        imagem: '/assets/doces/KitmesversarioRosa.jpg',
        titulo: 'Kit Mesversario Rosa',
        descricao: 'sobre o bolo',
        preco: 200
    },
    {
        id: 6,
        imagem: '/assets/doces/KitPanda.jpg',
        titulo: 'Kit Panda',
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