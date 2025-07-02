class Produto {
  constructor(id, titulo, preco, imagem) {
    this.id = id;
    this.titulo = titulo;
    this.preco = preco;
    this.imagem = imagem;
  }
}

class Carrinho {
  constructor() {
    this.itens = JSON.parse(localStorage.getItem("carrinho")) || [];
  }

  adicionar(produto) {
    this.itens.push(produto);
    this.salvar();
  }

  remover(index) {
    this.itens.splice(index, 1);
    this.salvar();
  }

  listar() {
    return this.itens;
  }

  total() {
    return this.itens.reduce((soma, item) => soma + item.preco, 0);
  }

  salvar() {
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
}

// === Produtos ===
// (Você pode importar ou colar aqui seus arrays `bolos`, `kits`, `doces` com IDs ajustados)
const todosProdutos = [...bolos, ...kits, ...doces];

// Instancia carrinho
const carrinho = new Carrinho();
window.carrinho = carrinho;

// Adiciona produto ao carrinho
function adicionarCarrinho(id) {
  const prod = todosProdutos.find(p => p.id === id);
  if (!prod) return console.error("Produto não encontrado:", id);

  const produto = new Produto(prod.id, prod.titulo, prod.preco, prod.imagem);
  carrinho.adicionar(produto);
  alert(`${produto.titulo} adicionado ao carrinho!`);
}

// Remove item do carrinho
function removerCarrinho(index) {
  carrinho.remover(index);
  renderizarCarrinhoModal();
}

// Modal
document.addEventListener('DOMContentLoaded', () => {
  const abrirModal = document.getElementById('abrirModal');
  const modal = document.getElementById('modal');
  const fecharModal = document.getElementById('fechar');
  const itensCarrinho = document.getElementById('itensCarrinho');
  const totalP = document.getElementById('totalCarrinho');

  function abrir() {
    renderizarCarrinhoModal();
    modal.classList.add('ativo');
  }

  function fechar() {
    modal.classList.remove('ativo');
  }

  abrirModal?.addEventListener('click', abrir);
  fecharModal?.addEventListener('click', fechar);

  modal.addEventListener('click', e => {
    if (e.target === modal) fechar();
  });

  // Exibe carrinho no modal
  window.renderizarCarrinhoModal = function () {
    itensCarrinho.innerHTML = "";

    const itens = carrinho.listar();

    if (itens.length === 0) {
      itensCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
      totalP.textContent = "";
      return;
    }

    itens.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("item-carrinho");
      div.innerHTML = `
        <p><strong>${item.titulo}</strong> - R$ ${item.preco.toFixed(2)}</p>
        <button class="botao-remover"  onclick="removerCarrinho(${index})">Remover</button>
      `;
      itensCarrinho.appendChild(div);
    });

    totalP.textContent = `Total: R$ ${carrinho.total().toFixed(2)}`;
  };
});

renderizarCarrinhoModal();


