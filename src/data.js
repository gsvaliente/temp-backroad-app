import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
  {
    id: 4,
    href: 'https://www.instagram.com',
    icon: 'fab fa-instagram',
  },
];

export const serviceLinks = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Sample text would go here for each service',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Sample text would go here for each service',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Sample text would go here for each service',
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Information about the tour would go here',
    country: 'china',
    duration: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    img: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: 'Information about the tour would go here',
    country: 'indonesia',
    duration: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    img: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: 'Information about the tour would go here',
    country: 'hong kong',
    duration: '8 days',
    price: 'from $5000',
  },
  {
    id: 4,
    img: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: 'Information about the tour would go here',
    country: 'kenya',
    duration: '20 days',
    price: 'from $3300',
  },
];
