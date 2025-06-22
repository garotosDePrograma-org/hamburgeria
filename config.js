// Configurações da Bill Burger
// Personalize estas configurações conforme necessário

const BILL_BURGER_CONFIG = {
    // Informações da empresa
    company: {
        name: 'Bill Burger',
        tagline: 'Hambúrgueres Artesanais',
        phone: '(11) 99999-9999',
        address: 'Rua das Delícias, 123 - Centro, São Paulo, SP',
        hours: {
            weekdays: 'Seg-Sex: 18h-23h',
            weekend: 'Sáb-Dom: 12h-23h'
        }
    },

    // Configurações do WhatsApp
    whatsapp: {
        number: '5511999999999', // Substitua pelo número real
        message: 'Olá! Gostaria de fazer um pedido:',
        formatMessage: true // Formatar automaticamente a mensagem
    },

    // Configurações de moeda
    currency: {
        symbol: 'R$',
        position: 'before', // 'before' ou 'after'
        decimals: 2
    },

    // Configurações do carrinho
    cart: {
        storageKey: 'billBurgerCart',
        maxQuantity: 10,
        autoSave: true
    },

    // Configurações de UI
    ui: {
        animations: true,
        showPopularBadge: true,
        showToastNotifications: true,
        toastDuration: 3000
    },

    // Configurações de performance
    performance: {
        lazyLoading: true,
        imageOptimization: true,
        cacheEnabled: true
    },

    // Configurações de analytics (opcional)
    analytics: {
        enabled: false,
        googleAnalyticsId: '', // GA4 Measurement ID
        trackEvents: true
    },

    // Configurações de delivery (futuro)
    delivery: {
        enabled: false,
        minOrderValue: 25.00,
        deliveryFee: 5.00,
        freeDeliveryThreshold: 50.00
    },

    // Configurações de pagamento (futuro)
    payment: {
        enabled: false,
        methods: ['pix', 'credit_card', 'debit_card'],
        installments: 6
    }
};

// Exportar configuração (se usando módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BILL_BURGER_CONFIG;
} 