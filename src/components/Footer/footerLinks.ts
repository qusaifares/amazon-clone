export interface FooterLinkGroup {
  title: string;
  links: string[];
}

const footerLinks: FooterLinkGroup[] = [
  {
    title: 'Get to Know Us',
    links: [
      'Careers',
      'Blog',
      'About Amazon',
      'Sustainability',
      'Press Center',
      'Investor Relations',
      'Amazon Devices',
      'Amazon Tours',
    ],
  },
  {
    title: 'Make Money with Us',
    links: [
      'Sell on Amazon',
      'Sell Under Amazon Accelerator',
      'Sell on Amazon Handmade',
      'Sell on Amazon Business',
      'Sell Your Apps on Amazon',
      'Become an Affiliate',
      'Advertise Your Products',
      'Self-Publish with Us',
      'Host an Amazon Hub',
    ],
  },
  {
    title: 'Amazon Payment Products',
    links: [
      'Amazon Rewards Visa Signature Cards',
      'Amazon.com Store Card',
      'Amazon Business Card',
      'Amazon Business Line of Credit',
      'Shop with Points',
      'Credit Card Marketplace',
      'Reload Your Balance',
      'Amazon Currency Converter',
    ],
  },
  {
    title: 'Let Us Help You',
    links: [
      'Amazon and COVID-19',
      'Your Account',
      'Your Orders',
      'Shipping Rates & Policies',
      'Amazon Prime',
      'Returns & Replacements',
      'Manage Your Content and Devices',
      'Amazon Assistant',
      'Help',
    ],
  },
];

export default footerLinks;
