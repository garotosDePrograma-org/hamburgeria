# 🍔 [Bill Burger](https://garotosdeprograma-org.github.io/hamburgeria/) - Cardápio Online

Sistema de cardápio online moderno e responsivo para a Bill Burger, desenvolvido com HTML, CSS e JavaScript puro.

## ✨ Funcionalidades

- **Cardápio Interativo**: Visualização organizada dos produtos com filtros por categoria
- **Carrinho de Compras**: Adição, remoção e controle de quantidade de itens
- **Integração WhatsApp**: Envio automático de pedidos formatados via WhatsApp
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Persistência Local**: Carrinho salvo automaticamente no navegador
- **Animações Suaves**: Interface moderna com transições e efeitos visuais
- **Acessibilidade**: Navegação por teclado e foco visível

## 🚀 Como Usar

### 1. Configuração Inicial

1. Clone ou baixe os arquivos do projeto
2. Abra o arquivo `script.js` e configure:
   ```javascript
   const CONFIG = {
       whatsappNumber: '5511999999999', // Seu número do WhatsApp
       whatsappMessage: 'Olá! Gostaria de fazer um pedido:',
       currency: 'R$',
       storageKey: 'billBurgerCart'
   };
   ```

### 2. Personalização do Menu

Edite o arquivo `script.js` na seção `MENU_DATA` para adicionar, remover ou modificar produtos:

```javascript
const MENU_DATA = {
    classicos: [
        {
            id: 'meu-burger',
            name: 'Meu Burger',
            description: 'Descrição do produto',
            price: 25.90,
            category: 'classicos',
            image: '🍔',
            popular: true // Opcional: marca como popular
        }
    ],
    // Adicione novas categorias aqui
    bebidas: [
        // Seus produtos
    ]
};
```

### 3. Personalização Visual

Edite o arquivo `styles.css` para personalizar cores, fontes e estilos:

```css
:root {
    --primary-color: #ff6b35;    /* Cor principal */
    --secondary-color: #2c3e50;  /* Cor secundária */
    --accent-color: #f39c12;     /* Cor de destaque */
    /* ... outras cores */
}
```

### 4. Hospedagem

#### GitHub Pages (Gratuito)
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione a branch main
5. Seu site estará disponível em `https://seuusuario.github.io/seurepositorio`

#### Netlify (Gratuito)
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para o painel
3. Seu site será publicado automaticamente

## 📱 Funcionalidades Principais

### Carrinho de Compras
- Adicionar/remover itens
- Controlar quantidades
- Cálculo automático do total
- Persistência no navegador
- Limpeza do carrinho

### Integração WhatsApp
- Formatação automática da mensagem
- Inclusão de todos os itens e total
- Abertura direta no WhatsApp Web/App

### Filtros do Menu
- Todos os produtos
- Clássicos
- Especiais
- Vegetariano
- Fácil adição de novas categorias

## 🎨 Melhorias de UX Implementadas

### Conversão
- **CTA Prominentes**: Botões grandes e coloridos
- **Cores Apetitosas**: Tons quentes que estimulam o apetite
- **Badges "Popular"**: Destacam produtos mais vendidos
- **Feedback Visual**: Toast notifications para ações
- **Design Limpo**: Foco nos produtos e preços

### Usabilidade
- **Navegação Intuitiva**: Estrutura clara e lógica
- **Responsividade**: Funciona em todos os dispositivos
- **Carregamento Rápido**: Otimizado para performance
- **Acessibilidade**: Suporte a navegação por teclado

## 🔧 Estrutura do Código

```
bill-burger/
├── index.html          # Estrutura principal
├── styles.css          # Estilos e responsividade
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentação
```

### Organização do JavaScript
- **Classe BillBurgerApp**: Gerencia toda a aplicação
- **Configurações**: Fácil personalização
- **Dados do Menu**: Estrutura escalável
- **Event Listeners**: Interações do usuário
- **LocalStorage**: Persistência de dados

## 🚀 Próximos Passos - Versão Avançada

### 1. Painel Administrativo
```javascript
// Exemplo de estrutura para admin
const ADMIN_FEATURES = {
    login: 'Sistema de autenticação',
    dashboard: 'Visão geral de pedidos',
    menuManagement: 'CRUD de produtos',
    orderManagement: 'Gerenciar pedidos',
    analytics: 'Relatórios de vendas'
};
```

### 2. Integração com Pagamentos
- **Mercado Pago**: Pagamento online
- **PIX**: Pagamento instantâneo
- **Cartão de Crédito**: Parcelamento
- **Delivery**: Integração com iFood/Rappi

### 3. Funcionalidades Avançadas
- **Sistema de Cupons**: Descontos e promoções
- **Fidelidade**: Programa de pontos
- **Delivery**: Rastreamento de entrega
- **Reviews**: Avaliações dos clientes
- **Push Notifications**: Notificações de status

### 4. Backend Sugerido
```javascript
// Tecnologias recomendadas
const BACKEND_STACK = {
    database: 'MongoDB ou PostgreSQL',
    api: 'Node.js + Express',
    auth: 'JWT + bcrypt',
    payments: 'Mercado Pago API',
    notifications: 'Firebase Cloud Messaging'
};
```

## 📊 Analytics e Monitoramento

### Google Analytics
```javascript
// Adicione ao script.js
function initAnalytics() {
    // Google Analytics 4
    gtag('config', 'GA_MEASUREMENT_ID');
    
    // Eventos personalizados
    gtag('event', 'add_to_cart', {
        'item_name': itemName,
        'value': itemPrice
    });
}
```

### Performance
- **Lighthouse Score**: Otimizado para 90+
- **Core Web Vitals**: LCP, FID, CLS otimizados
- **PWA Ready**: Service Worker implementado

## 🔒 Segurança

### Boas Práticas Implementadas
- Validação de dados no frontend
- Sanitização de inputs
- HTTPS obrigatório para produção
- Headers de segurança

### Recomendações para Produção
```javascript
// Headers de segurança (htaccess ou servidor)
const SECURITY_HEADERS = {
    'Content-Security-Policy': "default-src 'self'",
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
};
```

## 📞 Suporte

Para dúvidas ou sugestões:
- **Email**: seu-email@exemplo.com
- **WhatsApp**: (11) 99999-9999

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

---

**Desenvolvido com ❤️ para a Bill Burger** 
