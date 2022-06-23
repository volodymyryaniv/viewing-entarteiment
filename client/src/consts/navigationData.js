import routes from './routes.js';

const navLinks = [
  { id: 1, linkName: 'History', route: routes.historyPage },
  { id: 2, linkName: 'Show attractions', route: routes.attractionsPage },
  { id: 3, linkName: 'Contacts', route: routes.contactsPage },
  { id: 4, linkName: 'Sing in', route: `/${routes.authPage}`},
];

export default navLinks;