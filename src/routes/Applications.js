export default [
  {
    path: '/app/mail',
    name: 'mail',
    component: () => import(/* webpackChunkName: "mail" */ '../view/apps/email/Email'),
    children: [
      {
        path: '/app/mail',
        name: 'Inbox',
        component: () => import(/* webpackChunkName: "Inbox" */ '@/view/apps/email/overview/Inbox.vue'),
      },
      {
        path: '/app/mail/inbox',
        name: 'Inbox',
        component: () => import(/* webpackChunkName: "Inbox" */ '@/view/apps/email/overview/Inbox.vue'),
      },
      {
        path: '/app/mail/starred',
        name: 'Starred',
        component: () => import(/* webpackChunkName: "starred" */ '@/view/apps/email/overview/Starred.vue'),
      },
      {
        path: '/app/mail/sent',
        name: 'Sent',
        component: () => import(/* webpackChunkName: "Sent" */ '@/view/apps/email/overview/Sent.vue'),
      },
      {
        path: '/app/mail/drafts',
        name: 'Drafts',
        component: () => import(/* webpackChunkName: "Draft" */ '@/view/apps/email/overview/Draft.vue'),
      },
      {
        path: '/app/mail/spam',
        name: 'Spam',
        component: () => import(/* webpackChunkName: "Spam" */ '@/view/apps/email/overview/Spam.vue'),
      },
      {
        path: '/app/mail/trash',
        name: 'Trash',
        component: () => import(/* webpackChunkName: "Trash" */ '@/view/apps/email/overview/Trash.vue'),
      },
      {
        path: '/app/mail-single/:id',
        name: 'singleMail',
        component: () => import(/* webpackChunkName: "singleMail" */ '@/view/apps/email/overview/MailDetailView.vue'),
        children: [
          {
            path: '/app/mail-single/:id/replay',
            name: 'Replay',
            component: () => <h1>Hello replay</h1>,
          },
          {
            path: '/app/mail-single/:id/forward',
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
        name: 'privet',
        path: '/app/chat',
        component: () => import(/* webpackChunkName: "privet" */ '../view/apps/chat/overview/PrivetChat.vue'),
      },
    ],
  },
];
