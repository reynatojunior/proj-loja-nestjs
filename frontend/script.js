const API_URL = 'http://localhost:3000/loja';

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupEventListeners();
});

function setupEventListeners() {
    // Formulário de cadastro
    document.getElementById('productForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        await createProduct();
    });

    // Botão de salvar edição
    document.getElementById('saveEdit').addEventListener('click', async () => {
        await updateProduct();
    });
}

async function loadProducts() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        alert('Erro ao carregar produtos');
    }
}

function renderProducts(products) {
    const tableBody = document.getElementById('productTable');
    tableBody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.nome}</td>
            <td>R$ ${product.preco.toFixed(2)}</td>
            <td>${product.estoque}</td>
            <td>
                <button class="btn btn-sm btn-warning btn-action edit-btn" data-id="${product.id}">Editar</button>
                <button class="btn btn-sm btn-danger btn-action delete-btn" data-id="${product.id}">Excluir</button>
            </td>
        `;

        tableBody.appendChild(row);
    });

    // Adiciona eventos aos botões
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => openEditModal(btn.dataset.id));
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => deleteProduct(btn.dataset.id));
    });
}

async function createProduct() {
    const product = {
        nome: document.getElementById('nome').value,
        preco: parseFloat(document.getElementById('preco').value),
        estoque: parseInt(document.getElementById('estoque').value)
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        });

        if (response.ok) {
            document.getElementById('productForm').reset();
            loadProducts();
        } else {
            const error = await response.json();
            throw new Error(error.message || 'Erro ao criar produto');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert(error.message);
    }
}

async function openEditModal(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const product = await response.json();

        document.getElementById('editId').value = product.id;
        document.getElementById('editNome').value = product.nome;
        document.getElementById('editPreco').value = product.preco;
        document.getElementById('editEstoque').value = product.estoque;

        const modal = new bootstrap.Modal(document.getElementById('editModal'));
        modal.show();
    } catch (error) {
        console.error('Erro ao carregar produto:', error);
        alert('Erro ao carregar produto para edição');
    }
}

async function updateProduct() {
    const product = {
        nome: document.getElementById('editNome').value,
        preco: parseFloat(document.getElementById('editPreco').value),
        estoque: parseInt(document.getElementById('editEstoque').value)
    };

    const id = document.getElementById('editId').value;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        });

        if (response.ok) {
            const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
            modal.hide();
            loadProducts();
        } else {
            const error = await response.json();
            throw new Error(error.message || 'Erro ao atualizar produto');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert(error.message);
    }
}

async function deleteProduct(id) {
    if (!confirm('Tem certeza que deseja excluir este produto?')) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            loadProducts();
        } else {
            const error = await response.json();
            throw new Error(error.message || 'Erro ao excluir produto');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert(error.message);
    }
}