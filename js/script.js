// Configurações da aplicação
const CONFIG = {
    whatsappNumber: '5521975301714', // Substitua pelo número real
    whatsappMessage: 'Olá! Gostaria de fazer um pedido:',
    currency: 'R$',
    storageKey: 'billBurgerCart'
};

// Dados do menu - Estrutura fácil de expandir
const MENU_DATA = {
    classicos: [
        {
            id: 'classic-burger',
            name: 'Bill Simples',
            description: 'Hambúrguer tradicional com carne, alface, tomate, cebola e queijo',
            price: 10.90,
            category: 'classicos',
            image: '<img src="imgs/cardapio/hamburguer/bill-simples.png" alt="Hamburguer Simples" class="menu-item-img">',
            popular: true
        },
        {
            id: 'bacon-burger',
            name: 'Bill Bacon',
            description: 'Hambúrguer com bacon crocante, queijo, alface e molho especial',
            price: 15.90,
            category: 'classicos',
            image: '<img src="imgs/cardapio/hamburguer/bill-bacon.png" alt="Hamburguer Bacon" class="menu-item-img">'
        }
    ],
    especiais: [
      
        {
            id: 'big-burger',
            name: 'Big Bill',
            description: 'Hambúrguer com molho barbecue, cebola caramelizada e queijo gouda',
            price: 18.90,
            category: 'especiais',
            image: '<img src="imgs/cardapio/hamburguer/big-bill.png" alt="Harburger X-Tudo" class="menu-item-img">',
        },
      
    ],
   
};

// Classe principal da aplicação
class BillBurgerApp {
    constructor() {
        this.cart = this.loadCart();
        this.currentFilter = 'all';
        this.init();
    }

    // Inicialização da aplicação
    init() {
        this.setupEventListeners();
        this.renderMenu();
        this.updateCartDisplay();
        this.setupIntersectionObserver();
    }

    // Configuração dos event listeners
    setupEventListeners() {
        // Carrinho
        document.getElementById('cartBtn').addEventListener('click', () => this.toggleCart());
        document.getElementById('closeCart').addEventListener('click', () => this.toggleCart());
        document.getElementById('clearCart').addEventListener('click', () => this.clearCart());
        // Alterado: agora abre o modal de dados do cliente
        document.getElementById('sendOrder').addEventListener('click', () => this.openCustomerDataModal());

        // Filtros do menu
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setActiveFilter(e.target.dataset.category);
            });
        });

        // Fechar modal ao clicar fora
        document.getElementById('cartModal').addEventListener('click', (e) => {
            if (e.target.id === 'cartModal') {
                this.toggleCart();
            }
        });

        // Fechar modal de dados do cliente ao clicar fora
        document.getElementById('customerDataModal').addEventListener('click', (e) => {
            if (e.target.id === 'customerDataModal') {
                this.closeCustomerDataModal();
            }
        });

        // Fechar modal com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.toggleCart();
                this.closeCustomerDataModal();
            }
        });

        // Fechar modal de dados do cliente pelo botão
        document.getElementById('closeCustomerData').addEventListener('click', () => this.closeCustomerDataModal());
        document.getElementById('cancelCustomerData').addEventListener('click', () => this.closeCustomerDataModal());

        // Submissão do formulário de dados do cliente
        document.getElementById('customerDataForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleCustomerDataSubmit();
        });
    }

    // Configuração do Intersection Observer para animações
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.menu-item').forEach(item => {
            observer.observe(item);
        });
    }

    // Renderização do menu
    renderMenu() {
        const menuGrid = document.getElementById('menuGrid');
        const allItems = this.getAllMenuItems();
        const filteredItems = this.currentFilter === 'all' 
            ? allItems 
            : allItems.filter(item => item.category === this.currentFilter);

        menuGrid.innerHTML = filteredItems.map(item => this.createMenuItemHTML(item)).join('');
        
        // Adicionar event listeners aos novos itens
        this.setupMenuItemListeners();
    }

    // Obter todos os itens do menu
    getAllMenuItems() {
        return Object.values(MENU_DATA).flat();
    }

    // Criar HTML do item do menu
    createMenuItemHTML(item) {
        const popularBadge = item.popular ? '<span class="popular-badge">🔥 Popular</span>' : '';
        
        return `
            <div class="menu-item" data-id="${item.id}">
                <div class="menu-item-image">
                    ${item.image}
                    ${popularBadge}
                </div>
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h3 class="menu-item-title">${item.name}</h3>
                        <span class="menu-item-price">${CONFIG.currency} ${item.price.toFixed(2)}</span>
                    </div>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-actions">
                        <div class="quantity-controls">
                            <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                            <span class="quantity-display" data-id="${item.id}">1</span>
                            <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                        </div>
                        <button class="add-to-cart-btn" data-id="${item.id}">
                            <i class="fas fa-plus"></i> Adicionar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Configurar event listeners dos itens do menu
    setupMenuItemListeners() {
        // Controles de quantidade
        document.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const action = btn.dataset.action;
                const itemId = btn.dataset.id;
                this.updateQuantity(itemId, action);
            });
        });

        // Botão adicionar ao carrinho
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const itemId = btn.dataset.id;
                this.addToCart(itemId);
            });
        });
    }

    // Atualizar quantidade
    updateQuantity(itemId, action) {
        const display = document.querySelector(`.quantity-display[data-id="${itemId}"]`);
        let quantity = parseInt(display.textContent);
        
        if (action === 'increase') {
            quantity = Math.min(quantity + 1, 10);
        } else if (action === 'decrease') {
            quantity = Math.max(quantity - 1, 1);
        }
        
        display.textContent = quantity;
    }

    // Definir filtro ativo
    setActiveFilter(category) {
        this.currentFilter = category;
        
        // Atualizar botões
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        // Re-renderizar menu
        this.renderMenu();
    }

    // Adicionar item ao carrinho
    addToCart(itemId) {
        const item = this.findMenuItem(itemId);
        if (!item) return;

        const quantityDisplay = document.querySelector(`.quantity-display[data-id="${itemId}"]`);
        const quantity = parseInt(quantityDisplay.textContent);

        const existingItem = this.cart.find(cartItem => cartItem.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                ...item,
                quantity: quantity
            });
        }

        this.saveCart();
        this.updateCartDisplay();
        this.showToast(`${item.name} adicionado ao carrinho!`);
        
        // Resetar quantidade
        quantityDisplay.textContent = '1';
    }

    // Encontrar item no menu
    findMenuItem(itemId) {
        return this.getAllMenuItems().find(item => item.id === itemId);
    }

    // Atualizar item no carrinho
    updateCartItem(itemId, action) {
        const item = this.cart.find(cartItem => cartItem.id === itemId);
        if (!item) return;

        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease') {
            item.quantity--;
            if (item.quantity <= 0) {
                this.removeFromCart(itemId);
                return;
            }
        }

        this.saveCart();
        this.updateCartDisplay();
    }

    // Remover item do carrinho
    removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.saveCart();
        this.updateCartDisplay();
    }

    // Limpar carrinho
    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartDisplay();
        this.toggleCart();
        this.showToast('Carrinho limpo!');
    }

    // Atualizar exibição do carrinho
    updateCartDisplay() {
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const totalPrice = document.getElementById('totalPrice');

        // Atualizar contador
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        // Atualizar itens do carrinho
        if (this.cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
        } else {
            cartItems.innerHTML = this.cart.map(item => this.createCartItemHTML(item)).join('');
            
            // Adicionar event listeners aos controles do carrinho
            this.setupCartItemListeners();
        }

        // Atualizar total
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalPrice.textContent = `${CONFIG.currency} ${total.toFixed(2)}`;
    }

    // Criar HTML do item do carrinho
    createCartItemHTML(item) {
        return `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${CONFIG.currency} ${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `;
    }

    // Configurar event listeners dos itens do carrinho
    setupCartItemListeners() {
        document.querySelectorAll('.cart-item .quantity-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = btn.dataset.action;
                const itemId = btn.dataset.id;
                this.updateCartItem(itemId, action);
            });
        });
    }

    // Alternar modal do carrinho
    toggleCart() {
        const modal = document.getElementById('cartModal');
        modal.classList.toggle('show');
        
        if (modal.classList.contains('show')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    // Abrir modal de dados do cliente
    openCustomerDataModal() {
        if (this.cart.length === 0) {
            this.showToast('Adicione itens ao carrinho primeiro!', 'warning');
            return;
        }
        document.getElementById('customerDataModal').classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    // Fechar modal de dados do cliente
    closeCustomerDataModal() {
        document.getElementById('customerDataModal').classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    // Lidar com envio dos dados do cliente
    handleCustomerDataSubmit() {
        const name = document.getElementById('customerName').value.trim();
        const address = document.getElementById('customerAddress').value.trim();
        const payment = document.getElementById('customerPayment').value;
        const obs = document.getElementById('customerObs').value.trim();

        if (!name || !address || !payment) {
            this.showToast('Preencha todos os campos obrigatórios!', 'warning');
            return;
        }

        this.closeCustomerDataModal();
        this.toggleCart(); // Fecha o carrinho
        this.sendOrder({ name, address, payment, obs });
    }

    // Enviar pedido via WhatsApp (agora recebe dados do cliente)
    sendOrder(customerData = null) {
        if (this.cart.length === 0) {
            this.showToast('Adicione itens ao carrinho primeiro!', 'warning');
            return;
        }

        const message = this.formatWhatsAppMessage(customerData);
        const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        this.showToast('Pedido enviado para o WhatsApp!');
    }

    // Formatar mensagem do WhatsApp (agora inclui dados do cliente)
    formatWhatsAppMessage(customerData = null) {
        const items = this.cart.map(item => 
            `• ${item.name} x${item.quantity} - ${CONFIG.currency} ${(item.price * item.quantity).toFixed(2)}`
        ).join('\n');

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        let customerInfo = '';
        if (customerData) {
            customerInfo = `*Nome:* ${customerData.name}\n*Endereço:* ${customerData.address}\n*Pagamento:* ${customerData.payment}`;
            if (customerData.obs) {
                customerInfo += `\n*Obs.:* ${customerData.obs}`;
            }
        }

        return `${CONFIG.whatsappMessage}

${items}

*Total: ${CONFIG.currency} ${total.toFixed(2)}*

${customerInfo ? customerInfo + '\n\n' : ''}Obrigado por escolher a Bill Burger! `;
    }

    // Mostrar toast notification
    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        toastMessage.textContent = message;
        
        // Atualizar cor baseada no tipo
        toast.className = `toast ${type}`;
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Carregar carrinho do localStorage
    loadCart() {
        const saved = localStorage.getItem(CONFIG.storageKey);
        return saved ? JSON.parse(saved) : [];
    }

    // Salvar carrinho no localStorage
    saveCart() {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(this.cart));
    }
}

// Função global para scroll suave
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Inicializar aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new BillBurgerApp();
});

// Service Worker para PWA (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics simples (opcional)
function trackEvent(eventName, data = {}) {
    // Implementar analytics aqui (Google Analytics, etc.)
    console.log('Event tracked:', eventName, data);
}

// Performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Página carregada em ${loadTime.toFixed(2)}ms`);
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Erro capturado:', e.error);
    // Implementar envio de erro para serviço de monitoramento
}); 