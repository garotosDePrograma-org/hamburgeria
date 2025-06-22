// Exemplos de como expandir o menu da Bill Burger
// Copie estas estruturas para o script.js principal

const EXPANDED_MENU_DATA = {
    // Categorias existentes
    classicos: [
        {
            id: 'classic-burger',
            name: 'Classic Burger',
            description: 'Hambúrguer tradicional com carne, alface, tomate, cebola e queijo',
            price: 18.90,
            category: 'classicos',
            image: '🍔',
            popular: true
        },
        {
            id: 'cheese-burger',
            name: 'Cheese Burger',
            description: 'Hambúrguer com queijo derretido, alface, tomate e molho especial',
            price: 21.90,
            category: 'classicos',
            image: '🧀'
        },
        {
            id: 'bacon-burger',
            name: 'Bacon Burger',
            description: 'Hambúrguer com bacon crocante, queijo, alface e molho barbecue',
            price: 24.90,
            category: 'classicos',
            image: '🥓'
        }
    ],
    
    especiais: [
        {
            id: 'double-burger',
            name: 'Double Burger',
            description: 'Dois hambúrgueres, queijo duplo, bacon e molho especial da casa',
            price: 32.90,
            category: 'especiais',
            image: '🍔🍔',
            popular: true
        },
        {
            id: 'bbq-burger',
            name: 'BBQ Burger',
            description: 'Hambúrguer com molho barbecue, cebola caramelizada e queijo gouda',
            price: 28.90,
            category: 'especiais',
            image: '🔥'
        },
        {
            id: 'mushroom-burger',
            name: 'Mushroom Burger',
            description: 'Hambúrguer com cogumelos grelhados, queijo suíço e molho de ervas',
            price: 26.90,
            category: 'especiais',
            image: '🍄'
        }
    ],
    
    vegetariano: [
        {
            id: 'veggie-burger',
            name: 'Veggie Burger',
            description: 'Hambúrguer de grão-de-bico, quinoa e legumes frescos',
            price: 22.90,
            category: 'vegetariano',
            image: '🥬'
        },
        {
            id: 'falafel-burger',
            name: 'Falafel Burger',
            description: 'Hambúrguer de falafel com tahine, alface e tomate',
            price: 20.90,
            category: 'vegetariano',
            image: '🌱'
        }
    ],

    // NOVAS CATEGORIAS - Exemplos de expansão

    bebidas: [
        {
            id: 'refrigerante',
            name: 'Refrigerante',
            description: 'Coca-Cola, Pepsi, Sprite, Fanta ou Guaraná (350ml)',
            price: 6.90,
            category: 'bebidas',
            image: '🥤',
            options: ['Coca-Cola', 'Pepsi', 'Sprite', 'Fanta', 'Guaraná']
        },
        {
            id: 'suco-natural',
            name: 'Suco Natural',
            description: 'Laranja, limão, abacaxi ou maracujá (300ml)',
            price: 8.90,
            category: 'bebidas',
            image: '🍊',
            options: ['Laranja', 'Limão', 'Abacaxi', 'Maracujá']
        },
        {
            id: 'milkshake',
            name: 'Milk Shake',
            description: 'Chocolate, morango, baunilha ou caramelo (400ml)',
            price: 12.90,
            category: 'bebidas',
            image: '🥤',
            popular: true,
            options: ['Chocolate', 'Morango', 'Baunilha', 'Caramelo']
        },
        {
            id: 'agua',
            name: 'Água',
            description: 'Água mineral com ou sem gás (500ml)',
            price: 4.90,
            category: 'bebidas',
            image: '💧',
            options: ['Com gás', 'Sem gás']
        }
    ],

    acompanhamentos: [
        {
            id: 'batata-frita',
            name: 'Batata Frita',
            description: 'Batatas fritas crocantes com sal e temperos especiais',
            price: 12.90,
            category: 'acompanhamentos',
            image: '🍟',
            popular: true
        },
        {
            id: 'batata-rustica',
            name: 'Batata Rústica',
            description: 'Batatas rústicas assadas com ervas e azeite',
            price: 14.90,
            category: 'acompanhamentos',
            image: '🥔'
        },
        {
            id: 'onion-rings',
            name: 'Onion Rings',
            description: 'Anéis de cebola empanados e fritos',
            price: 11.90,
            category: 'acompanhamentos',
            image: '🧅'
        },
        {
            id: 'nuggets',
            name: 'Nuggets de Frango',
            description: '6 nuggets de frango empanados com molho',
            price: 13.90,
            category: 'acompanhamentos',
            image: '🍗'
        }
    ],

    combos: [
        {
            id: 'combo-classic',
            name: 'Combo Classic',
            description: 'Classic Burger + Batata Frita + Refrigerante',
            price: 32.90,
            category: 'combos',
            image: '🍔🍟🥤',
            popular: true,
            originalPrice: 38.70, // Preço se comprado separadamente
            savings: 5.80
        },
        {
            id: 'combo-double',
            name: 'Combo Double',
            description: 'Double Burger + Batata Rústica + Milk Shake',
            price: 48.90,
            category: 'combos',
            image: '🍔🍔🥔🥤',
            originalPrice: 60.70,
            savings: 11.80
        },
        {
            id: 'combo-veggie',
            name: 'Combo Veggie',
            description: 'Veggie Burger + Batata Frita + Suco Natural',
            price: 36.90,
            category: 'combos',
            image: '🥬🍟🍊',
            originalPrice: 44.70,
            savings: 7.80
        }
    ],

    sobremesas: [
        {
            id: 'brownie',
            name: 'Brownie',
            description: 'Brownie de chocolate com sorvete de baunilha',
            price: 15.90,
            category: 'sobremesas',
            image: '🍫',
            popular: true
        },
        {
            id: 'sundae',
            name: 'Sundae',
            description: 'Sorvete com calda de chocolate, morango ou caramelo',
            price: 13.90,
            category: 'sobremesas',
            image: '🍨',
            options: ['Chocolate', 'Morango', 'Caramelo']
        },
        {
            id: 'cheesecake',
            name: 'Cheesecake',
            description: 'Cheesecake de frutas vermelhas',
            price: 16.90,
            category: 'sobremesas',
            image: '🧀'
        }
    ]
};

// Exemplo de como adicionar novos filtros no HTML
const NEW_FILTERS_HTML = `
<div class="menu-filters">
    <button class="filter-btn active" data-category="all">Todos</button>
    <button class="filter-btn" data-category="classicos">Clássicos</button>
    <button class="filter-btn" data-category="especiais">Especiais</button>
    <button class="filter-btn" data-category="vegetariano">Vegetariano</button>
    <button class="filter-btn" data-category="bebidas">Bebidas</button>
    <button class="filter-btn" data-category="acompanhamentos">Acompanhamentos</button>
    <button class="filter-btn" data-category="combos">Combos</button>
    <button class="filter-btn" data-category="sobremesas">Sobremesas</button>
</div>
`;

// Exemplo de como implementar opções de produtos
const PRODUCT_OPTIONS_EXAMPLE = {
    // Para produtos com opções (como bebidas)
    renderOptions: function(item) {
        if (!item.options) return '';
        
        return `
            <div class="product-options">
                <select class="option-select" data-item-id="${item.id}">
                    ${item.options.map(option => 
                        `<option value="${option}">${option}</option>`
                    ).join('')}
                </select>
            </div>
        `;
    },

    // Para combos com desconto
    renderComboPrice: function(item) {
        if (!item.originalPrice) return '';
        
        return `
            <div class="combo-pricing">
                <span class="original-price">De: ${CONFIG.currency} ${item.originalPrice.toFixed(2)}</span>
                <span class="savings">Economia: ${CONFIG.currency} ${item.savings.toFixed(2)}</span>
            </div>
        `;
    }
};

// Exemplo de configurações para delivery
const DELIVERY_CONFIG = {
    enabled: true,
    minOrderValue: 25.00,
    deliveryFee: 5.00,
    freeDeliveryThreshold: 50.00,
    estimatedTime: '30-45 min',
    zones: [
        { name: 'Zona 1', fee: 3.00, time: '20-30 min' },
        { name: 'Zona 2', fee: 5.00, time: '30-45 min' },
        { name: 'Zona 3', fee: 8.00, time: '45-60 min' }
    ]
};

// Exemplo de sistema de cupons
const COUPON_SYSTEM = {
    coupons: [
        {
            code: 'BILL10',
            discount: 10,
            type: 'percentage',
            minOrder: 30.00,
            validUntil: '2024-12-31'
        },
        {
            code: 'FREEDELIVERY',
            discount: 5.00,
            type: 'fixed',
            minOrder: 40.00,
            validUntil: '2024-12-31'
        }
    ],
    
    validateCoupon: function(code, orderTotal) {
        const coupon = this.coupons.find(c => c.code === code.toUpperCase());
        if (!coupon) return { valid: false, message: 'Cupom inválido' };
        
        if (new Date() > new Date(coupon.validUntil)) {
            return { valid: false, message: 'Cupom expirado' };
        }
        
        if (orderTotal < coupon.minOrder) {
            return { valid: false, message: `Pedido mínimo: ${CONFIG.currency} ${coupon.minOrder.toFixed(2)}` };
        }
        
        return { valid: true, coupon };
    }
};

// Exemplo de sistema de fidelidade
const LOYALTY_SYSTEM = {
    pointsPerReal: 1,
    pointsForDiscount: 100,
    discountPerPoints: 1.00,
    
    calculatePoints: function(orderTotal) {
        return Math.floor(orderTotal * this.pointsPerReal);
    },
    
    calculateDiscount: function(points) {
        return Math.floor(points / this.pointsForDiscount) * this.discountPerPoints;
    }
}; 