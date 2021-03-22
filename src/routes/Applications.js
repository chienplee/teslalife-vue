export default [
  {
    path: '/app/mail',
    name: 'mail',
    component: () => import(/* webpackChunkName: "mail" */ '../view/apps/email/Email'),
    children: [
      {
        path: '',
        name: 'Inbox',
        component: () => import(/* webpackChunkName: "Inbox" */ '@/view/apps/email/overview/Inbox.vue'),
      },
      {
        path: 'inbox',
        name: 'Inbox',
        component: () => import(/* webpackChunkName: "Inbox" */ '@/view/apps/email/overview/Inbox.vue'),
      },
      {
        path: 'starred',
        name: 'Starred',
        component: () => import(/* webpackChunkName: "starred" */ '@/view/apps/email/overview/Starred.vue'),
      },
      {
        path: 'sent',
        name: 'Sent',
        component: () => import(/* webpackChunkName: "Sent" */ '@/view/apps/email/overview/Sent.vue'),
      },
      {
        path: 'drafts',
        name: 'Drafts',
        component: () => import(/* webpackChunkName: "Draft" */ '@/view/apps/email/overview/Draft.vue'),
      },
      {
        path: 'spam',
        name: 'Spam',
        component: () => import(/* webpackChunkName: "Spam" */ '@/view/apps/email/overview/Spam.vue'),
      },
      {
        path: 'trash',
        name: 'Trash',
        component: () => import(/* webpackChunkName: "Trash" */ '@/view/apps/email/overview/Trash.vue'),
      },
      {
        path: '/app/mail-single/:id',
        name: 'singleMail',
        component: () => import(/* webpackChunkName: "singleMail" */ '@/view/apps/email/overview/MailDetailView.vue'),
        children: [
          {
            path: 'replay',
            name: 'Replay',
            component: () => <h1>Hello replay</h1>,
          },
          {
            path: 'forward',
            name: 'Forward',
            component: () => <h1>Hello forward</h1>,
          },
        ],
      },
    ],
  },
  {
    path: '/app/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "chat" */ '../view/apps/chat/ChatApp.vue'),
    children: [
      {
        name: 'private',
        path: 'private',
        component: () => import(/* webpackChunkName: "private" */ '../view/apps/chat/overview/PrivetChat.vue'),
      },
      {
        name: 'privateSingle',
        path: 'private/:id',
        components: {
          default: () => import(/* webpackChunkName: "private" */ '../view/apps/chat/overview/PrivetChat.vue'),
          child: () => import(/* webpackChunkName: "privateSingle" */ '../view/apps/chat/overview/SingleChat.vue'),
        },
      },
      {
        name: 'group',
        path: 'group',
        component: () => import(/* webpackChunkName: "group" */ '../view/apps/chat/overview/GroupChat.vue'),
      },
      {
        name: 'groupSingle',
        path: 'group/:id',
        components: {
          default: () => import(/* webpackChunkName: "private" */ '../view/apps/chat/overview/GroupChat.vue'),
          child: () => import(/* webpackChunkName: "privateSingle" */ '../view/apps/chat/overview/SingleGroupChat.vue'),
        },
      },
      {
        name: 'all',
        path: 'all',
        component: () => import(/* webpackChunkName: "all" */ '../view/apps/chat/overview/AllContacts.vue'),
      },
      {
        name: 'allSingle',
        path: 'all/:id',
        components: {
          default: () => import(/* webpackChunkName: "private" */ '../view/apps/chat/overview/AllContacts.vue'),
          child: () => import(/* webpackChunkName: "privateSingle" */ '../view/apps/chat/overview/SingleChat.vue'),
        },
      },
    ],
  },
  {
    path: '/app/ecommerce',
    name: 'ecommerce',
    component: () => import(/* webpackChunkName: "product" */ '../view/apps/ecommerce/product/Products.vue'),
    children: [
      {
        name: 'product',
        path: 'product',
        component: () => import(/* webpackChunkName: "product" */ '../view/apps/ecommerce/product/Products.vue'),
      },
      {
        name: 'grid',
        path: 'product/grid',
        components: {
          default: () => import(/* webpackChunkName: "product" */ '../view/apps/ecommerce/product/Products.vue'),
          grid: () => import(/* webpackChunkName: "grid" */ '../view/apps/ecommerce/product/overview/Grid.vue'),
        },
      },
      {
        name: 'list',
        path: 'product/list',
        components: {
          default: () => import(/* webpackChunkName: "product" */ '../view/apps/ecommerce/product/Products.vue'),
          grid: () => import(/* webpackChunkName: "grid" */ '../view/apps/ecommerce/product/overview/List.vue'),
        },
      },
    ],
  },
  {
    name: 'detail',
    path: '/app/ecommerce/productDetails/:id',
    component: () => import(/* webpackChunkName: "detail" */ '../view/apps/ecommerce/product/ProductDetails.vue'),
  },
  {
    name: 'add-product',
    path: '/app/ecommerce/add-product',
    component: () => import(/* webpackChunkName: "addProduct" */ '../view/apps/ecommerce/product/AddProduct.vue'),
  },
  {
    name: 'edit-product',
    path: '/app/ecommerce/edit-product',
    component: () => import(/* webpackChunkName: "editProduct" */ '../view/apps/ecommerce/product/EditProduct.vue'),
  },
  {
    name: 'orders',
    path: '/app/ecommerce/orders',
    component: () => import(/* webpackChunkName: "Orders" */ '../view/apps/ecommerce/Orders.vue'),
  },
  {
    name: 'sellers',
    path: '/app/ecommerce/sellers',
    component: () => import(/* webpackChunkName: "sellers" */ '../view/apps/ecommerce/Sellers.vue'),
  },
  {
    name: 'invoice',
    path: '/app/ecommerce/invoice',
    component: () => import(/* webpackChunkName: "invoice" */ '../view/apps/ecommerce/Invoice.vue'),
  },
  {
    name: 'cart',
    path: '/app/ecommerce/cart',
    component: () => import(/* webpackChunkName: "cart" */ '../view/apps/ecommerce/Cart.vue'),
  },
  {
    name: 'social',
    path: '/app/social/profile',
    component: () => import(/* webpackChunkName: "social" */ '../view/apps/myProfile/Index.vue'),
  },
];
