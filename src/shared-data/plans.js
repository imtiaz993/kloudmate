export const plans = [
  {
    categoryTitle: "What's included",
    options: [
      {
        title: 'Logs (monthly)',
        isHighlighted: true,
        free: '5 GB',
        starter: '20 GB',
        pro: '100 GB',
        business: 'Custom',
      },
      {
        title: 'Traces (monthly)',
        isHighlighted: true,
        free: '5 GB',
        starter: '20 GB',
        pro: '100 GB',
        business: 'Custom',
      },
      {
        title: 'Metrics (monthly)',
        isHighlighted: true,
        free: '10k',
        starter: '1 million',
        pro: '10 million',
        business: 'Custom',
      },
      {
        title: 'Data Retention',
        isHighlighted: true,
        free: '7 days',
        starter: '14 days',
        pro: '30 days',
        business: '30 days',
      },
    ],
  },
  {
    categoryTitle: 'Overage',
    options: [
      {
        title: 'Logs & Traces (monthly)',
        free: 'NA',
        starter: '$1/GB',
        pro: '$1/GB',
        business: 'Custom',
      },
      {
        title: 'Metric samples (monthly)',
        free: 'NA',
        starter: '$0.5/million',
        pro: '$0.5/million',
        business: 'Custom',
      },
    ],
  },
  {
    categoryTitle: 'Features',
    options: [
      {
        title: 'Unlimited Users',
        free: true,
        starter: true,
        pro: true,
        business: true,
      },
      {
        title: 'Unlimited data sources',
        free: true,
        starter: true,
        pro: true,
        business: true,
      },
      {
        title: 'Alarms',
        free: '10 alarms',
        starter: '20 alarms',
        pro: '100 alarms',
        business: 'Unlimited',
      },
      {
        title: 'Notification Channels',
        free: 'Slack',
        starter: 'Slack, Email',
        pro: 'Slack, Email, Webhook, SNS',
        business: 'Slack, Email, Webhook, SNS, PagerDuty',
      },
      {
        title: 'Issue Tracker',
        free: true,
        starter: true,
        pro: true,
        business: true,
      },
      {
        title: 'SAML Single Sign-On (SSO)',
        free: false,
        starter: false,
        pro: false,
        business: true,
      },
    ],
  },
  {
    categoryTitle: 'Support',
    options: [
      {
        title: 'Slack Community',
        free: true,
        starter: true,
        pro: true,
        business: true,
      },
      {
        title: 'Email',
        free: false,
        starter: true,
        pro: true,
        business: true,
      },
      {
        title: 'Chat',
        free: false,
        starter: false,
        pro: true,
        business: true,
      },
      {
        title: 'Dedicated Account Manager',
        starter: false,
        pro: false,
        business: true,
      },
    ],
  },
];
