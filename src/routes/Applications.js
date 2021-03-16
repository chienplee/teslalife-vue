export default [
  {
    path: '/app/mail',
    name: 'mail',
    component: () => import(/* webpackChunkName: "mail" */ '../view/apps/email/Email'),
    children: [
      {
        path: '/app/mail',
        component: () => import(/* webpackChunkName: "Inbox" */ '@/view/apps/email/overview/Inbox.vue'),
      },
      {
        path: '/app/mail/inbox',
        component: () => import(/* webpackChunkName: "Inbox" */ '@/view/apps/email/overview/Inbox.vue'),
      },
      {
        path: '/app/mail/starred',
        component: () => import(/* webpackChunkName: "starred" */ '@/view/apps/email/overview/Starred.vue'),
      },
      {
        path: '/app/mail/sent',
        component: () => import(/* webpackChunkName: "Sent" */ '@/view/apps/email/overview/Sent.vue'),
      },
      {
        path: '/app/mail/drafts',
        component: () => import(/* webpackChunkName: "Draft" */ '@/view/apps/email/overview/Draft.vue'),
      },
      {
        path: '/app/mail/spam',
        component: () => import(/* webpackChunkName: "Spam" */ '@/view/apps/email/overview/Spam.vue'),
      },
      {
        path: '/app/mail/trash',
        component: () => import(/* webpackChunkName: "Trash" */ '@/view/apps/email/overview/Trash.vue'),
      },
      {
        path: '/app/mail-single/:id',
        name: 'singleMail',
        component: () => import(/* webpackChunkName: "singleMail" */ '@/view/apps/email/overview/MailDetailView.vue'),
        children: [
          {
            path: '/app/mail-single/:id/replay',
            component: () => <h1>Hello replay</h1>,
          },
          {
            path: '/app/mail-single/:id/forward',
            component: () => <h1>Hello forward</h1>,
          },
        ],
      },
    ],
  },
];
