// Configurações da Bill Burger
// Personalize estas configurações conforme necessário

const BILL_BURGER_CONFIG = {
    // Informações da empresa
    company: {
        name: 'Bill Burger',
        tagline: 'Hambúrgueres Artesanais',
        phone: '(81) 99999-9999',
        address: 'Travessa Julia Gomes, 00 - São Lourenço da Mata, PE',
        hours: {
            weekdays: 'Ter-Sex: 18h-23h',
            weekend: 'Sáb-Dom: 18h-23h'
        }
    },

    // Configurações do WhatsApp
    whatsapp: {
        number: '5521975301714', // Substitua pelo número real
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
        maxQuantity: 20,
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
        enabled: true,
        minOrderValue: 25.00,
        deliveryFee: 5.00,
        freeDeliveryThreshold: 50.00
    },

    // Configurações de pagamento (futuro)
    payment: {
        enabled: true,
         methods: ['pix', 'credit_card', 'debit_card'],
        installments: 6
    }
};

// Exportar configuração (se usando módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BILL_BURGER_CONFIG;
} 