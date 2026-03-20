// ================================================================
// GLOBAL STATE
// ================================================================
let currentTheme = 'all';
let currentDenom = 'all';
let currentSort = 'default';
let priceMin = null;
let priceMax = null;
let currentShipLocation = 'cn'; // 'cn' or 'us'
let currentPage = 1;
let pageSize = 10;
let totalProducts = [];

// ================================================================
// THEME LABELS
// ================================================================
const THEME_LABELS = {
  all: 'All Stamps',
  patriotic: '🇺🇸 Patriotic',
  holiday: '🎄 Holiday',
  wedding: '💍 Wedding',
  animals: '🐾 Animals & Nature',
  commemorative: '🏅 Commemorative',
  history: '🏛️ History & Heritage',
  science: '🔭 Science & Space',
  kids: '🧒 Kids',
  love: '❤️ Love',
  celebrations: '🎉 Celebrations',
  'fruits-flowers': '🌸 Fruits & Flowers',
  fundraising: '💜 Fundraising',
  sports: '⚽ Sports',
  people: '👤 People & Figures',
  landmarks: '🏰 Landmarks',
  floral: '🌺 Floral',
  popculture: '🎮 Pop Culture',
  other: '📛 Other',
};

const DENOM_LABELS = {
  all: 'All Values',
  forever: '⭐ Forever ($0.73)',
  'two-oz': '✉️ Two-Ounce ($0.92)',
  'three-oz': '📨 Three-Ounce ($1.16)',
  postcard: '📬 Postcard ($0.53)',
  priority: '📦 Priority Mail',
  semipostal: '💜 Semi-Postal ($0.85)',
  international: '🌍 International ($1.55)',
  'nonmachinable': '✉️ Non-Machinable ($1.12)',
};

// ================================================================
// PRODUCT DATA — 200 products from CSV
// ================================================================
const PRODUCTS = [
  { id: 1, theme: 'people', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/12/25-A.jpg', name: '2025 First-Class Forever Stamp – Betty White', desc: '', cn: { sku: 'STAMP-25-001-CN', price: '5.00' }, us: { sku: 'STAMP-25-001-US', price: '15.00' } },
  { id: 2, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/12/24-4.jpg', name: '2024 First-Class Forever Stamps – Holiday Joy', desc: '', cn: { sku: 'STAMP-24-003-CN', price: '5.00' }, us: { sku: 'STAMP-24-003-US', price: '15.00' } },
  { id: 3, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/12/25-HQ8.webp', name: '2025 Holiday Cheer – Cardinals, Wreath, Holly & Poinsettia Designs, First-Class Postage', desc: '', cn: { sku: 'STAMP-25-005-CN', price: '5.00' }, us: { sku: 'STAMP-25-005-US', price: '15.00' } },
  { id: 4, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/12/25-z.webp', name: '2025 U.S. Flag – Patriotic Symbol, First-Class Postage', desc: '', cn: { sku: 'STAMP-25-007-CN', price: '5.00' }, us: { sku: 'STAMP-25-007-US', price: '15.00' } },
  { id: 5, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/12/25JIAO.webp', name: '2025 U.S. Flags Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-25-009-CN', price: '5.00' }, us: { sku: 'STAMP-25-009-US', price: '15.00' } },
  { id: 6, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2-23-18.webp', name: '2024 Kwanzaa Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-24-011-CN', price: '5.00' }, us: { sku: 'STAMP-24-011-US', price: '15.00' } },
  { id: 7, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2-23-15.webp', name: '2024 Carnival Nights Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-24-013-CN', price: '5.00' }, us: { sku: 'STAMP-24-013-US', price: '15.00' } },
  { id: 8, theme: 'popculture', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2-23-12.webp', name: '2024 Dungeons & Dragons Stamps Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-24-015-CN', price: '5.00' }, us: { sku: 'STAMP-24-015-US', price: '15.00' } },
  { id: 9, theme: 'animals', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2-23-9.webp', name: '2024 Protect Sea Turtles Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-24-017-CN', price: '5.00' }, us: { sku: 'STAMP-24-017-US', price: '15.00' } },
  { id: 10, theme: 'animals', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2-23-6.webp', name: '2024 Horses Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-24-019-CN', price: '5.00' }, us: { sku: 'STAMP-24-019-US', price: '15.00' } },
  { id: 11, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2-23-5.webp', name: '2024 U.S. Flags Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-24-021-CN', price: '5.00' }, us: { sku: 'STAMP-24-021-US', price: '15.00' } },
  { id: 12, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2-23-4.webp', name: '2024 U.S. Flags Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-24-023-CN', price: '5.00' }, us: { sku: 'STAMP-24-023-US', price: '15.00' } },
  { id: 13, theme: 'landmarks', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-7-1-2.webp', name: '2021 Mid Atlantic Lighthouses Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-21-025-CN', price: '5.00' }, us: { sku: 'STAMP-21-025-US', price: '15.00' } },
  { id: 14, theme: 'wedding', denom: 'two-oz', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-64-1.jpg', name: '2024 Wedding Blooms Two Ounce Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-24-027-CN', price: '5.00' }, us: { sku: 'STAMP-24-027-US', price: '15.00' } },
  { id: 15, theme: 'wedding', denom: 'two-oz', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-62-1.webp', name: 'Two-Ounce Stamps 2015 Yes, I Do – Wedding Invitation, First-Class Postage', desc: '', cn: { sku: 'STAMP-15-029-CN', price: '5.00' }, us: { sku: 'STAMP-15-029-US', price: '15.00' } },
  { id: 16, theme: 'animals', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-60-1.webp', name: '2006 Common Buckeye Butterfly First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-06-031-CN', price: '5.00' }, us: { sku: 'STAMP-06-031-US', price: '15.00' } },
  { id: 17, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-57-1.webp', name: '2013 A Flag for All Seasons Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-13-033-CN', price: '5.00' }, us: { sku: 'STAMP-13-033-US', price: '15.00' } },
  { id: 18, theme: 'science', denom: 'priority', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-54-1.webp', name: '2024 Pillars of Creation and Cosmic Priority Mail Postage Stamps', desc: '', cn: { sku: 'STAMP-24-035-CN', price: '5.00' }, us: { sku: 'STAMP-24-035-US', price: '15.00' } },
  { id: 19, theme: 'floral', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-51-1.webp', name: '2023 $10 Floral Geometry Forever First Class Postage Stamp', desc: '', cn: { sku: 'STAMP-23-037-CN', price: '5.00' }, us: { sku: 'STAMP-23-037-US', price: '15.00' } },
  { id: 20, theme: 'people', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2023-1-4-48-1.webp', name: '2023 John Lewis Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-23-039-CN', price: '5.00' }, us: { sku: 'STAMP-23-039-US', price: '15.00' } },
  { id: 21, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-45-1.webp', name: '2022 Palace of Fine Arts Express Priority Stamps', desc: '', cn: { sku: 'STAMP-22-041-CN', price: '5.00' }, us: { sku: 'STAMP-22-041-US', price: '15.00' } },
  { id: 22, theme: 'floral', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-43-1.webp', name: '2022 $2 Floral Geometry Forever First Class Postage Stamp', desc: '', cn: { sku: 'STAMP-22-043-CN', price: '5.00' }, us: { sku: 'STAMP-22-043-US', price: '15.00' } },
  { id: 23, theme: 'floral', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-39-1.webp', name: '2022 $5 Floral Geometry Forever First Class Postage Stamp', desc: '', cn: { sku: 'STAMP-22-045-CN', price: '5.00' }, us: { sku: 'STAMP-22-045-US', price: '15.00' } },
  { id: 24, theme: 'commemorative', denom: 'priority', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-37-1.webp', name: '2021 USPS Castillo de San Marcos Priority Mail Postage Stamps', desc: '', cn: { sku: 'STAMP-21-047-CN', price: '5.00' }, us: { sku: 'STAMP-21-047-US', price: '15.00' } },
  { id: 25, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-34-1.webp', name: '2020 Kwanzaa Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-20-049-CN', price: '5.00' }, us: { sku: 'STAMP-20-049-US', price: '15.00' } },
  { id: 26, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-31-1.webp', name: '2020 Grand Island Ice Cave Express Priority Stamps', desc: '', cn: { sku: 'STAMP-20-051-CN', price: '5.00' }, us: { sku: 'STAMP-20-051-US', price: '15.00' } },
  { id: 27, theme: 'wedding', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-26-1.jpg', name: '2017 Wedding Series Celebration Boutonniere Forever Stamps', desc: '', cn: { sku: 'STAMP-17-053-CN', price: '5.00' }, us: { sku: 'STAMP-17-053-US', price: '15.00' } },
  { id: 28, theme: 'commemorative', denom: 'other', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-23-1.webp', name: '2017 Global Green Succulent Stamps', desc: '', cn: { sku: 'STAMP-17-055-CN', price: '5.00' }, us: { sku: 'STAMP-17-055-US', price: '15.00' } },
  { id: 29, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-20-1.webp', name: '2016 EID Greetings Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-16-057-CN', price: '5.00' }, us: { sku: 'STAMP-16-057-US', price: '15.00' } },
  { id: 30, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-17-1.webp', name: '2016 Patriotic Spiral Forever First Class Forever Stamps', desc: '', cn: { sku: 'STAMP-16-059-CN', price: '5.00' }, us: { sku: 'STAMP-16-059-US', price: '15.00' } },
  { id: 31, theme: 'wedding', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-14-1.webp', name: '2014 Wedding Series: Wedding Cake First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-14-061-CN', price: '5.00' }, us: { sku: 'STAMP-14-061-US', price: '15.00' } },
  { id: 32, theme: 'animals', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-12-1.webp', name: 'BIRDS OF PREY 2012  Postage Stamps', desc: '', cn: { sku: 'STAMP-12-063-CN', price: '5.00' }, us: { sku: 'STAMP-12-063-US', price: '15.00' } },
  { id: 33, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-11-1.webp', name: '2010 Holiday Evergreens Forever First Class Forever Stamps', desc: '', cn: { sku: 'STAMP-10-065-CN', price: '5.00' }, us: { sku: 'STAMP-10-065-US', price: '15.00' } },
  { id: 34, theme: 'wedding', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-9-1.webp', name: '2010 Love stamp – Purple Orchid – 44 cents', desc: '', cn: { sku: 'STAMP-10-067-CN', price: '5.00' }, us: { sku: 'STAMP-10-067-US', price: '15.00' } },
  { id: 35, theme: 'floral', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-5-1.jpg', name: 'Four Flowers Stamps 2000', desc: '', cn: { sku: 'STAMP-00-069-CN', price: '5.00' }, us: { sku: 'STAMP-00-069-US', price: '15.00' } },
  { id: 36, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-2-1.webp', name: '2001 US America Responds First Class Forever Stamps', desc: '', cn: { sku: 'STAMP-01-071-CN', price: '5.00' }, us: { sku: 'STAMP-01-071-US', price: '15.00' } },
  { id: 37, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-1-1.webp', name: '2002 Night Friends American Bats First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-02-073-CN', price: '5.00' }, us: { sku: 'STAMP-02-073-US', price: '15.00' } },
  { id: 38, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-46-1.webp', name: '1998 22c Uncle Sam First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-00-075-CN', price: '5.00' }, us: { sku: 'STAMP-00-075-US', price: '15.00' } },
  { id: 39, theme: 'science', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-43-1.webp', name: '2019 Star Ribbon Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-19-077-CN', price: '5.00' }, us: { sku: 'STAMP-19-077-US', price: '15.00' } },
  { id: 40, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-41-1.webp', name: '2021 Brush Rabbit First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-21-079-CN', price: '5.00' }, us: { sku: 'STAMP-21-079-US', price: '15.00' } },
  { id: 41, theme: 'animals', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-38-1.jpg', name: '2019 Military Working Dogs Forever Stamps', desc: '', cn: { sku: 'STAMP-19-081-CN', price: '5.00' }, us: { sku: 'STAMP-19-081-US', price: '15.00' } },
  { id: 42, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-36-1.webp', name: '2014 Where Dreams Blossom Forever Stamps', desc: '', cn: { sku: 'STAMP-14-083-CN', price: '5.00' }, us: { sku: 'STAMP-14-083-US', price: '15.00' } },
  { id: 43, theme: 'wedding', denom: 'two-oz', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-33-1.webp', name: '2015 Wedding Series: Vintage Tulip Two Ounce First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-15-085-CN', price: '5.00' }, us: { sku: 'STAMP-15-085-US', price: '15.00' } },
  { id: 44, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-29-1.jpg', name: 'Holiday Baubles 2011 Forever Stamps', desc: '', cn: { sku: 'STAMP-11-087-CN', price: '5.00' }, us: { sku: 'STAMP-11-087-US', price: '15.00' } },
  { id: 45, theme: 'floral', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-24-1.webp', name: '2015 Engraved Vintage Rose Forever First Class Stamps', desc: '', cn: { sku: 'STAMP-15-089-CN', price: '5.00' }, us: { sku: 'STAMP-15-089-US', price: '15.00' } },
  { id: 46, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-21-1.webp', name: '2022 George Morrison Forever Stamps', desc: '', cn: { sku: 'STAMP-22-091-CN', price: '5.00' }, us: { sku: 'STAMP-22-091-US', price: '15.00' } },
  { id: 47, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-18-1.jpg', name: '2023 Toni Morrison forever stamps', desc: '', cn: { sku: 'STAMP-23-093-CN', price: '5.00' }, us: { sku: 'STAMP-23-093-US', price: '15.00' } },
  { id: 48, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-17-1.jpg', name: '2022 Kwanzaa Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-22-095-CN', price: '5.00' }, us: { sku: 'STAMP-22-095-US', price: '15.00' } },
  { id: 49, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-15-1.webp', name: '2023 School Bus stamps', desc: '', cn: { sku: 'STAMP-23-097-CN', price: '5.00' }, us: { sku: 'STAMP-23-097-US', price: '15.00' } },
  { id: 50, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-12-1.webp', name: '2022 Raven Story Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-22-099-CN', price: '5.00' }, us: { sku: 'STAMP-22-099-US', price: '15.00' } },
  { id: 51, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-09-1.jpg', name: "2017-Uncle Sam's Hat Stamp Additional Ounce Postage Stamps", desc: '', cn: { sku: 'STAMP-17-101-CN', price: '5.00' }, us: { sku: 'STAMP-17-101-US', price: '15.00' } },
  { id: 52, theme: 'commemorative', denom: 'two-oz', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-07-1.jpg', name: '2017 Celebration Corsage Two Ounce Forever First Class Forever Stamps', desc: '', cn: { sku: 'STAMP-17-103-CN', price: '5.00' }, us: { sku: 'STAMP-17-103-US', price: '15.00' } },
  { id: 53, theme: 'wedding', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-07.webp', name: '2011 Wedding Roses Commemorative Forever First Class Postage Stamps', desc: '', cn: { sku: 'STAMP-11-105-CN', price: '5.00' }, us: { sku: 'STAMP-11-105-US', price: '15.00' } },
  { id: 54, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-01-1.webp', name: '2008 Liberty Bell Forever Stamps', desc: '', cn: { sku: 'STAMP-08-107-CN', price: '5.00' }, us: { sku: 'STAMP-08-107-US', price: '15.00' } },
  { id: 55, theme: 'science', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/m93866849744_1.jpg', name: '$9.85 Pillars of Creation Forever Stamps', desc: '', cn: { sku: 'STAMP-00-109-CN', price: '5.00' }, us: { sku: 'STAMP-00-109-US', price: '15.00' } },
  { id: 56, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/united-states-2024-c.jpg', name: 'Constance Baker Motley Forever Stamps', desc: '', cn: { sku: 'STAMP-00-111-CN', price: '5.00' }, us: { sku: 'STAMP-00-111-US', price: '15.00' } },
  { id: 57, theme: 'wedding', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/207acf44dce9c7d20578c78b4e223470.jpg', name: 'Purple Heart Medal 2019 Forever Stamps', desc: '', cn: { sku: 'STAMP-19-113-CN', price: '5.00' }, us: { sku: 'STAMP-19-113-US', price: '15.00' } },
  { id: 58, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1-1-1.webp', name: 'Ruth Bader Ginsburg Forever Stamps', desc: '', cn: { sku: 'STAMP-00-115-CN', price: '5.00' }, us: { sku: 'STAMP-00-115-US', price: '15.00' } },
  { id: 59, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/USA-5619__23133_.jpg', name: 'Ursula K. Le Guin Three Ounce Forever Stamps', desc: '', cn: { sku: 'STAMP-00-117-CN', price: '5.00' }, us: { sku: 'STAMP-00-117-US', price: '15.00' } },
  { id: 60, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/Group-923.webp', name: 'All Time Low (Price): $1200 Get 10000 Forever Stamps, More Than 100 Styles to Choose', desc: '', cn: { sku: 'STAMP-00-119-CN', price: '5.00' }, us: { sku: 'STAMP-00-119-US', price: '15.00' } },
  { id: 61, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/Group-926.webp', name: 'Buy More, More Discounts: $888 Get 6000 Forever Stamps', desc: '', cn: { sku: 'STAMP-00-121-CN', price: '5.00' }, us: { sku: 'STAMP-00-121-US', price: '15.00' } },
  { id: 62, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/Group-933.webp', name: '$489 Get 3000 Forever Stamps, 100+ Styles Available', desc: '', cn: { sku: 'STAMP-00-123-CN', price: '5.00' }, us: { sku: 'STAMP-00-123-US', price: '15.00' } },
  { id: 63, theme: 'other', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/Group-932.webp', name: 'Special Price: $198 Get 1000 Forever Stamps, Various Styles On Sale', desc: '', cn: { sku: 'STAMP-00-125-CN', price: '5.00' }, us: { sku: 'STAMP-00-125-US', price: '15.00' } },
  { id: 64, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/Group-939.webp', name: 'Highly Recommended: $149 for 10 Rolls(1000pcs) – 2017/2018/2019/2022 Flag', desc: '', cn: { sku: 'STAMP-17-127-CN', price: '5.00' }, us: { sku: 'STAMP-17-127-US', price: '15.00' } },
  { id: 65, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/Group-955.webp', name: 'Limited Time Deal: $89.99 for 5 Rolls(500 Forever Stamps) – 2017/2018/2019/2022 Flag', desc: '', cn: { sku: 'STAMP-17-129-CN', price: '5.00' }, us: { sku: 'STAMP-17-129-US', price: '15.00' } },
  { id: 66, theme: 'popculture', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/aaa.webp', name: 'Lunar New Year: Year of the Dragon Forever Stamps', desc: '', cn: { sku: 'STAMP-00-131-CN', price: '5.00' }, us: { sku: 'STAMP-00-131-US', price: '15.00' } },
  { id: 67, theme: 'wedding', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/aa_x.png', name: 'Love 2024 Forever Stamps', desc: '', cn: { sku: 'STAMP-24-133-CN', price: '5.00' }, us: { sku: 'STAMP-24-133-US', price: '15.00' } },
  { id: 68, theme: 'other', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1-1.webp', name: '2018 Madonna and Child Forever Stamps', desc: '', cn: { sku: 'STAMP-18-135-CN', price: '5.00' }, us: { sku: 'STAMP-18-135-US', price: '15.00' } },
  { id: 69, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1-2.webp', name: 'Christmas Magi Forever Stamps', desc: '', cn: { sku: 'STAMP-00-137-CN', price: '5.00' }, us: { sku: 'STAMP-00-137-US', price: '15.00' } },
  { id: 70, theme: 'animals', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/20240509113751_.png', name: 'Winter Woodland Animals Forever Stamps', desc: '', cn: { sku: 'STAMP-00-139-CN', price: '5.00' }, us: { sku: 'STAMP-00-139-US', price: '15.00' } },
  { id: 71, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/3B26DDCA-2017-6EAB-0D6A-6D3794D298B9.webp', name: 'Snow Globes Forever Stamps', desc: '', cn: { sku: 'STAMP-00-141-CN', price: '5.00' }, us: { sku: 'STAMP-00-141-US', price: '15.00' } },
  { id: 72, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/9AF7451E-22C4-5C8C-B104-D29657334698.webp', name: 'Piñatas! Forever Stamps', desc: '', cn: { sku: 'STAMP-00-143-CN', price: '5.00' }, us: { sku: 'STAMP-00-143-US', price: '15.00' } },
  { id: 73, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1A4C0DA5-B1AF-8D0C-EF1C-F35BD2818B75-1.webp', name: 'OSIRIS-REx Forever Stamps', desc: '', cn: { sku: 'STAMP-00-145-CN', price: '5.00' }, us: { sku: 'STAMP-00-145-US', price: '15.00' } },
  { id: 74, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/05B909F8-2862-0DED-10EC-CF582BD56F3E.webp', name: 'Thinking of You Forever Stamps', desc: '', cn: { sku: 'STAMP-00-147-CN', price: '5.00' }, us: { sku: 'STAMP-00-147-US', price: '15.00' } },
  { id: 75, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/8F4F9850-1764-6FDB-B203-FE6A49269CF4.webp', name: 'Life Magnified Forever Stamps', desc: '', cn: { sku: 'STAMP-00-149-CN', price: '5.00' }, us: { sku: 'STAMP-00-149-US', price: '15.00' } },
  { id: 76, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1-6.webp', name: 'Traditional Christmas: Nativity Forever Stamps', desc: '', cn: { sku: 'STAMP-00-151-CN', price: '5.00' }, us: { sku: 'STAMP-00-151-US', price: '15.00' } },
  { id: 77, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1-5.webp', name: 'Contemporary Christmas: Gingerbread Houses Forever Stamps', desc: '', cn: { sku: 'STAMP-00-153-CN', price: '5.00' }, us: { sku: 'STAMP-00-153-US', price: '15.00' } },
  { id: 78, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/E27D2126-E918-53CD-D3F4-F0BA260757DE.webp', name: 'Message Monsters Forever Stamps', desc: '', cn: { sku: 'STAMP-00-155-CN', price: '5.00' }, us: { sku: 'STAMP-00-155-US', price: '15.00' } },
  { id: 79, theme: 'floral', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1-8.webp', name: 'Winter Flowers Forever Stamps', desc: '', cn: { sku: 'STAMP-00-157-CN', price: '5.00' }, us: { sku: 'STAMP-00-157-US', price: '15.00' } },
  { id: 80, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1-7.webp', name: 'Scooby-Doo Forever Stamps', desc: '', cn: { sku: 'STAMP-00-159-CN', price: '5.00' }, us: { sku: 'STAMP-00-159-US', price: '15.00' } },
  { id: 81, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/43C05443-6D8B-C261-ED26-C6DF7E7517E9.webp', name: 'Shel Silverstein Forever Stamps', desc: '', cn: { sku: 'STAMP-00-161-CN', price: '5.00' }, us: { sku: 'STAMP-00-161-US', price: '15.00' } },
  { id: 82, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2-1-13.webp', name: 'Charles M. Schulz Forever Stamps', desc: '', cn: { sku: 'STAMP-00-163-CN', price: '5.00' }, us: { sku: 'STAMP-00-163-US', price: '15.00' } },
  { id: 83, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/C4F4F0E9-F039-0CC7-3DEC-5EB750E938C9.webp', name: 'Eugenie Clark Forever Stamps', desc: '', cn: { sku: 'STAMP-00-165-CN', price: '5.00' }, us: { sku: 'STAMP-00-165-US', price: '15.00' } },
  { id: 84, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/68D4A0AA-35FA-1FA5-371A-B595DDA42E45.webp', name: 'Nancy Reagan Forever Stamps', desc: '', cn: { sku: 'STAMP-00-167-CN', price: '5.00' }, us: { sku: 'STAMP-00-167-US', price: '15.00' } },
  { id: 85, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/A76F8A43-3D2F-34AC-BAA4-DF9115098B36.webp', name: 'Mariachi Forever Stamps', desc: '', cn: { sku: 'STAMP-00-169-CN', price: '5.00' }, us: { sku: 'STAMP-00-169-US', price: '15.00' } },
  { id: 86, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/D96D07B9-C634-695B-1359-B0914B795ECF.webp', name: 'Art of the Skateboard Forever Stamps', desc: '', cn: { sku: 'STAMP-00-171-CN', price: '5.00' }, us: { sku: 'STAMP-00-171-US', price: '15.00' } },
  { id: 87, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/C89C6858-9A09-EF41-7C8F-5A4B7EE206D4.webp', name: 'Lunar New Year: Year of the Rabbit Forever Stamps', desc: '', cn: { sku: 'STAMP-00-173-CN', price: '5.00' }, us: { sku: 'STAMP-00-173-US', price: '15.00' } },
  { id: 88, theme: 'commemorative', denom: 'postcard', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1_2.webp', name: 'Sailboats Postcard Forever Stamps', desc: '', cn: { sku: 'STAMP-00-175-CN', price: '5.00' }, us: { sku: 'STAMP-00-175-US', price: '15.00' } },
  { id: 89, theme: 'wedding', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/9A9A11E0-2F93-551F-54C1-633DCA6C19DD.webp', name: 'Love 2023 Forever Stamps', desc: '', cn: { sku: 'STAMP-23-177-CN', price: '5.00' }, us: { sku: 'STAMP-23-177-US', price: '15.00' } },
  { id: 90, theme: 'animals', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2B5B32C4-874D-0301-E5FE-DF7E171E319E.webp', name: '2023 Red Fox Wildlife Series, First-Class Rate', desc: '', cn: { sku: 'STAMP-23-179-CN', price: '5.00' }, us: { sku: 'STAMP-23-179-US', price: '15.00' } },
  { id: 91, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/68EC0E3C-82E1-8F92-3BDE-2B1EE977EE66.webp', name: 'Snowy Beauty Forever Stamps', desc: '', cn: { sku: 'STAMP-00-181-CN', price: '5.00' }, us: { sku: 'STAMP-00-181-US', price: '15.00' } },
  { id: 92, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1_.jpg', name: 'Ernest J. Gaines Forever Stamps', desc: '', cn: { sku: 'STAMP-00-183-CN', price: '5.00' }, us: { sku: 'STAMP-00-183-US', price: '15.00' } },
  { id: 93, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1_.webp', name: "Women's Soccer Forever Stamps", desc: '', cn: { sku: 'STAMP-00-185-CN', price: '5.00' }, us: { sku: 'STAMP-00-185-US', price: '15.00' } },
  { id: 94, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1_-1.webp', name: 'Pony Cars Forever Stamps', desc: '', cn: { sku: 'STAMP-00-187-CN', price: '5.00' }, us: { sku: 'STAMP-00-187-US', price: '15.00' } },
  { id: 95, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/DBBAD352-47C2-40EE-7280-46DEE9022FBE.webp', name: 'Western Wear Forever Stamps', desc: '', cn: { sku: 'STAMP-00-189-CN', price: '5.00' }, us: { sku: 'STAMP-00-189-US', price: '15.00' } },
  { id: 96, theme: 'science', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/602654AF-40E1-7AA7-5E1B-76910505DD00.webp', name: 'James Webb Space Telescope Forever Stamps', desc: '', cn: { sku: 'STAMP-00-191-CN', price: '5.00' }, us: { sku: 'STAMP-00-191-US', price: '15.00' } },
  { id: 97, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2B782682-E901-0001-10F1-E6C409B4CBA5.webp', name: "Let's Celebrate! Forever Stamps", desc: '', cn: { sku: 'STAMP-00-193-CN', price: '5.00' }, us: { sku: 'STAMP-00-193-US', price: '15.00' } },
  { id: 98, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1-10.webp', name: 'First Moon Landing Forever Forever Stamps', desc: '', cn: { sku: 'STAMP-00-195-CN', price: '5.00' }, us: { sku: 'STAMP-00-195-US', price: '15.00' } },
  { id: 99, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/34AD04A8-AF67-9953-8203-D93E4C8CAEAF.webp', name: 'Endangered Species Forever Stamps', desc: '', cn: { sku: 'STAMP-00-197-CN', price: '5.00' }, us: { sku: 'STAMP-00-197-US', price: '15.00' } },
  { id: 100, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1_2-1.webp', name: 'The Holy Family Forever Stamps', desc: '', cn: { sku: 'STAMP-00-199-CN', price: '5.00' }, us: { sku: 'STAMP-00-199-US', price: '15.00' } },
  { id: 101, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/7DB1B1CB-348C-9E95-0B1F-87B6AC4BD3CB.webp', name: 'Waterfalls Forever Stamps', desc: '', cn: { sku: 'STAMP-00-101-CN', price: '5.00' }, us: { sku: 'STAMP-00-101-US', price: '15.00' } },
  { id: 102, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1-11.webp', name: 'Jack-O-Lanterns Forever Stamps', desc: '', cn: { sku: 'STAMP-00-103-CN', price: '5.00' }, us: { sku: 'STAMP-00-103-US', price: '15.00' } },
  { id: 103, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1EA26665-C95B-16E4-2E63-808A49698DAD.webp', name: 'Roy Lichtenstein Forever Stamps', desc: '', cn: { sku: 'STAMP-00-105-CN', price: '5.00' }, us: { sku: 'STAMP-00-105-US', price: '15.00' } },
  { id: 104, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/AC5C9D81-16F6-0605-1743-B92ACED1E665.webp', name: 'Chief Standing Bear Forever Stamps', desc: '', cn: { sku: 'STAMP-00-107-CN', price: '5.00' }, us: { sku: 'STAMP-00-107-US', price: '15.00' } },
  { id: 105, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/313F6559-F13E-6B36-EC3F-70DCCEB6F022.webp', name: 'Tomie dePaola Forever Stamps', desc: '', cn: { sku: 'STAMP-00-109-CN', price: '5.00' }, us: { sku: 'STAMP-00-109-US', price: '15.00' } },
  { id: 106, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/70008152-6E75-D223-36B3-0E11DDDF8B9D.webp', name: 'Botanical Art Forever Stamps', desc: '', cn: { sku: 'STAMP-00-111-CN', price: '5.00' }, us: { sku: 'STAMP-00-111-US', price: '15.00' } },
  { id: 107, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/F32C9A5C-902D-ED43-3F5C-AE1705AA3148.webp', name: 'Railroad Stations Forever Stamps', desc: '', cn: { sku: 'STAMP-00-113-CN', price: '5.00' }, us: { sku: 'STAMP-00-113-US', price: '15.00' } },
  { id: 108, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/6FBC0C46-B1E3-94D8-CBCB-E717617FB17C.webp', name: 'A Charlie Brown Christmas Forever Stamps', desc: '', cn: { sku: 'STAMP-00-115-CN', price: '5.00' }, us: { sku: 'STAMP-00-115-US', price: '15.00' } },
  { id: 109, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1-12.webp', name: 'Santa and Sleigh Forever Stamps', desc: '', cn: { sku: 'STAMP-00-117-CN', price: '5.00' }, us: { sku: 'STAMP-00-117-US', price: '15.00' } },
  { id: 110, theme: 'landmarks', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/CDC3AE64-7449-1DE4-732F-24A53911B610.webp', name: 'National Marine Sanctuaries Forever Stamps', desc: '', cn: { sku: 'STAMP-00-119-CN', price: '5.00' }, us: { sku: 'STAMP-00-119-US', price: '15.00' } },
  { id: 111, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-1.webp', name: 'The Mighty Mississippi River Forever Stamps', desc: '', cn: { sku: 'STAMP-00-121-CN', price: '5.00' }, us: { sku: 'STAMP-00-121-US', price: '15.00' } },
  { id: 112, theme: 'landmarks', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1-13.webp', name: '$8.95 Monument Valley Forever Stamps', desc: '', cn: { sku: 'STAMP-00-123-CN', price: '5.00' }, us: { sku: 'STAMP-00-123-US', price: '15.00' } },
  { id: 113, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/USA-5751.webp', name: '$9.65 Florida Everglades Forever Stamps', desc: '', cn: { sku: 'STAMP-00-125-CN', price: '5.00' }, us: { sku: 'STAMP-00-125-US', price: '15.00' } },
  { id: 114, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/44742679-2958-5BD2-37B4-9C345CC2E40B.webp', name: 'Elephants Forever Stamps', desc: '', cn: { sku: 'STAMP-00-127-CN', price: '5.00' }, us: { sku: 'STAMP-00-127-US', price: '15.00' } },
  { id: 115, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/BF4A54E6-A2D0-DCC5-FE28-2BA778F8DA7A.webp', name: '$28.75 Great Smoky Mountains Forever Stamps', desc: '', cn: { sku: 'STAMP-00-129-CN', price: '5.00' }, us: { sku: 'STAMP-00-129-US', price: '15.00' } },
  { id: 116, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/9FBE47F7-99B3-E04D-0539-083331B1A0F1.webp', name: '2021 Heritage Breeds Forever Stamps', desc: '', cn: { sku: 'STAMP-21-131-CN', price: '5.00' }, us: { sku: 'STAMP-21-131-US', price: '15.00' } },
  { id: 117, theme: 'other', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/79.jpg', name: 'Virgin and Child Forever Stamps', desc: '', cn: { sku: 'STAMP-00-133-CN', price: '5.00' }, us: { sku: 'STAMP-00-133-US', price: '15.00' } },
  { id: 118, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/0C7F2171-F210-0D9F-3576-5D8FA3316BCB.webp', name: 'Holiday Elves Forever Stamps', desc: '', cn: { sku: 'STAMP-00-135-CN', price: '5.00' }, us: { sku: 'STAMP-00-135-US', price: '15.00' } },
  { id: 119, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/C1E187D9-DC5B-953E-BC22-64C1067EF298.webp', name: 'Wild and Scenic Rivers Forever Stamps', desc: '', cn: { sku: 'STAMP-00-137-CN', price: '5.00' }, us: { sku: 'STAMP-00-137-US', price: '15.00' } },
  { id: 120, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/8EAADD86-4D05-3250-FDBF-C74951A427CA.webp', name: 'Save Vanishing Species Forever Stamps', desc: '', cn: { sku: 'STAMP-00-139-CN', price: '5.00' }, us: { sku: 'STAMP-00-139-US', price: '15.00' } },
  { id: 121, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/C6630A86-5737-63E6-0768-F4FEDB5689CD.webp', name: 'Sun Science Forever Stamps', desc: '', cn: { sku: 'STAMP-00-141-CN', price: '5.00' }, us: { sku: 'STAMP-00-141-US', price: '15.00' } },
  { id: 122, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-2.webp', name: '2014 Winter Fun Forever Stamps', desc: '', cn: { sku: 'STAMP-14-143-CN', price: '5.00' }, us: { sku: 'STAMP-14-143-US', price: '15.00' } },
  { id: 123, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2-1-43.webp', name: '2022 Title IX Forever Stamps', desc: '', cn: { sku: 'STAMP-22-145-CN', price: '5.00' }, us: { sku: 'STAMP-22-145-US', price: '15.00' } },
  { id: 124, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-3.webp', name: 'Thank You Forever Stamps', desc: '', cn: { sku: 'STAMP-00-147-CN', price: '5.00' }, us: { sku: 'STAMP-00-147-US', price: '15.00' } },
  { id: 125, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/3EB7D3BA-3BC0-98E7-EBF4-2075DA6F65F6.webp', name: '2012 Four Flags Forever Forever Stamps', desc: '', cn: { sku: 'STAMP-12-149-CN', price: '5.00' }, us: { sku: 'STAMP-12-149-US', price: '15.00' } },
  { id: 126, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-5.webp', name: 'Sesame Street Forever Stamps', desc: '', cn: { sku: 'STAMP-00-151-CN', price: '5.00' }, us: { sku: 'STAMP-00-151-US', price: '15.00' } },
  { id: 127, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-4.webp', name: 'Geometric Snowflakes Forever Stamps', desc: '', cn: { sku: 'STAMP-00-153-CN', price: '5.00' }, us: { sku: 'STAMP-00-153-US', price: '15.00' } },
  { id: 128, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/5-2.jpg', name: 'Winter Scenes Forever Stamps', desc: '', cn: { sku: 'STAMP-00-155-CN', price: '5.00' }, us: { sku: 'STAMP-00-155-US', price: '15.00' } },
  { id: 129, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-6.webp', name: 'Neon Celebrate Forever Stamps', desc: '', cn: { sku: 'STAMP-00-157-CN', price: '5.00' }, us: { sku: 'STAMP-00-157-US', price: '15.00' } },
  { id: 130, theme: 'commemorative', denom: 'other', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/41517B3B-8CB6-5A22-96E2-86BF5B10EE53.webp', name: 'Global: African Daisy Forever Stamps', desc: '', cn: { sku: 'STAMP-00-159-CN', price: '5.00' }, us: { sku: 'STAMP-00-159-US', price: '15.00' } },
  { id: 131, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/B450444F-90A3-AE77-DCB5-4AD51FD76300.webp', name: 'Diwali Forever Stamps', desc: '', cn: { sku: 'STAMP-00-161-CN', price: '5.00' }, us: { sku: 'STAMP-00-161-US', price: '15.00' } },
  { id: 132, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/c-13.webp', name: 'Hip Hop Forever Stamps', desc: '', cn: { sku: 'STAMP-00-163-CN', price: '5.00' }, us: { sku: 'STAMP-00-163-US', price: '15.00' } },
  { id: 133, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/548B5DF4-FD32-1E71-0013-7EC3C15530A9.webp', name: 'Lunar New Year: Year of the Tiger Forever Stamps', desc: '', cn: { sku: 'STAMP-00-165-CN', price: '5.00' }, us: { sku: 'STAMP-00-165-US', price: '15.00' } },
  { id: 134, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/FA5865E5-A0BF-AE24-16F5-CA48E43AAE85.webp', name: 'Tulips Forever Stamps', desc: '', cn: { sku: 'STAMP-00-167-CN', price: '5.00' }, us: { sku: 'STAMP-00-167-US', price: '15.00' } },
  { id: 135, theme: 'wedding', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/CAC49D0F-ECE3-7DE0-A30E-15BC2CFF0EC1.webp', name: 'Garden of Love: Strawberry', desc: '', cn: { sku: 'STAMP-00-169-CN', price: '5.00' }, us: { sku: 'STAMP-00-169-US', price: '15.00' } },
  { id: 136, theme: 'floral', denom: 'two-oz', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/DAD1608C-EA4E-7032-E425-3E38C7AC73AD.webp', name: 'Sunflower Bouquet Forever Stamps Two Ounce', desc: '', cn: { sku: 'STAMP-00-171-CN', price: '5.00' }, us: { sku: 'STAMP-00-171-US', price: '15.00' } },
  { id: 137, theme: 'landmarks', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/464CA94D-8769-C773-EBC4-8358A5BFFE1C.webp', name: 'Mid Atlantic Lighthouses Forever Stamps', desc: '', cn: { sku: 'STAMP-00-173-CN', price: '5.00' }, us: { sku: 'STAMP-00-173-US', price: '15.00' } },
  { id: 138, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-7.webp', name: 'U.S. Flag Coil 2023 Forever Stamps', desc: '', cn: { sku: 'STAMP-23-175-CN', price: '5.00' }, us: { sku: 'STAMP-23-175-US', price: '15.00' } },
  { id: 139, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1-16.webp', name: 'U.S. Flag 2023 Forever Stamps', desc: '', cn: { sku: 'STAMP-23-177-CN', price: '5.00' }, us: { sku: 'STAMP-23-177-US', price: '15.00' } },
  { id: 140, theme: 'popculture', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/FCE2E6D7-E34A-CD0B-27B3-8BCB76DB2300.webp', name: 'Backyard Games Forever Stamps', desc: '', cn: { sku: 'STAMP-00-179-CN', price: '5.00' }, us: { sku: 'STAMP-00-179-US', price: '15.00' } },
  { id: 141, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/81LLWgOkMCL._AC_SX679_.jpg', name: 'Bonsai Trees Forever Stamps', desc: '', cn: { sku: 'STAMP-00-181-CN', price: '5.00' }, us: { sku: 'STAMP-00-181-US', price: '15.00' } },
  { id: 142, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/595B8D96-7FF5-FEB7-5443-1D22AC6F4903-1.webp', name: 'Mountain Flora Forever Stamps', desc: '', cn: { sku: 'STAMP-00-183-CN', price: '5.00' }, us: { sku: 'STAMP-00-183-US', price: '15.00' } },
  { id: 143, theme: 'floral', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1.jpg', name: 'Flowers from the Garden Forever Stamps', desc: '', cn: { sku: 'STAMP-00-185-CN', price: '5.00' }, us: { sku: 'STAMP-00-185-US', price: '15.00' } },
  { id: 144, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-9.webp', name: 'Bugs Bunny Rabbit Forever Stamps', desc: '', cn: { sku: 'STAMP-00-187-CN', price: '5.00' }, us: { sku: 'STAMP-00-187-US', price: '15.00' } },
  { id: 145, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/CB126444-DB93-455D-8D69-CCC624906AC0.webp', name: 'Rudolph the Red-Nosed Reindeer Forever Stamps', desc: '', cn: { sku: 'STAMP-00-189-CN', price: '5.00' }, us: { sku: 'STAMP-00-189-US', price: '15.00' } },
  { id: 146, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/D98BCCDD-EE6E-43D0-92E1-EDE8B1461C03.webp', name: 'Tulip Blossoms Forever Stamps', desc: '', cn: { sku: 'STAMP-00-191-CN', price: '5.00' }, us: { sku: 'STAMP-00-191-US', price: '15.00' } },
  { id: 147, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-10.webp', name: 'Lunar New Year: Year Of The Ox', desc: '', cn: { sku: 'STAMP-00-193-CN', price: '5.00' }, us: { sku: 'STAMP-00-193-US', price: '15.00' } },
  { id: 148, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2B6CD5D9-0D81-B8A8-7E2A-7A25D2275FE9.webp', name: 'Go Beyond: Buzz Lightyear', desc: '', cn: { sku: 'STAMP-00-195-CN', price: '5.00' }, us: { sku: 'STAMP-00-195-US', price: '15.00' } },
  { id: 149, theme: 'science', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-11.webp', name: 'Star Wars Droids Forever Stamps', desc: '', cn: { sku: 'STAMP-00-197-CN', price: '5.00' }, us: { sku: 'STAMP-00-197-US', price: '15.00' } },
  { id: 150, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-14.webp', name: 'Fruits & Vegetables Forever Stamps', desc: '', cn: { sku: 'STAMP-00-199-CN', price: '5.00' }, us: { sku: 'STAMP-00-199-US', price: '15.00' } },
  { id: 151, theme: 'animals', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-13.webp', name: 'Songbirds in Snow Forever Stamps', desc: '', cn: { sku: 'STAMP-00-201-CN', price: '5.00' }, us: { sku: 'STAMP-00-201-US', price: '15.00' } },
  { id: 152, theme: 'wedding', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-12.webp', name: 'Love Flourishes Forever Stamps', desc: '', cn: { sku: 'STAMP-00-203-CN', price: '5.00' }, us: { sku: 'STAMP-00-203-US', price: '15.00' } },
  { id: 153, theme: 'animals', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/45646.webp', name: 'Birds in Winter Forever Stamps', desc: '', cn: { sku: 'STAMP-00-205-CN', price: '5.00' }, us: { sku: 'STAMP-00-205-US', price: '15.00' } },
  { id: 154, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-15.webp', name: 'Summer Harvest Forever Stamps', desc: '', cn: { sku: 'STAMP-00-207-CN', price: '5.00' }, us: { sku: 'STAMP-00-207-US', price: '15.00' } },
  { id: 155, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/4417F554-EF57-894C-D4C6-C94570EE2098.webp', name: 'Hot Wheels Forever Stamps', desc: '', cn: { sku: 'STAMP-00-209-CN', price: '5.00' }, us: { sku: 'STAMP-00-209-US', price: '15.00' } },
  { id: 156, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-18.webp', name: 'Holiday Delights Forever Stamps', desc: '', cn: { sku: 'STAMP-00-211-CN', price: '5.00' }, us: { sku: 'STAMP-00-211-US', price: '15.00' } },
  { id: 157, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-17.webp', name: 'Christmas Carols Forever Stamps', desc: '', cn: { sku: 'STAMP-00-213-CN', price: '5.00' }, us: { sku: 'STAMP-00-213-US', price: '15.00' } },
  { id: 158, theme: 'animals', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/D6D37D75-BB21-1A37-2262-ADEA2E5FDC67.webp', name: '$1.12 California Dogface Butterfly', desc: '', cn: { sku: 'STAMP-00-215-CN', price: '5.00' }, us: { sku: 'STAMP-00-215-US', price: '15.00' } },
  { id: 159, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/d-30.webp', name: 'Frozen Treats Forever Stamps', desc: '', cn: { sku: 'STAMP-00-217-CN', price: '5.00' }, us: { sku: 'STAMP-00-217-US', price: '15.00' } },
  { id: 160, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-20.webp', name: 'Have a ball Forever Stamps', desc: '', cn: { sku: 'STAMP-00-219-CN', price: '5.00' }, us: { sku: 'STAMP-00-219-US', price: '15.00' } },
  { id: 161, theme: 'floral', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-19.webp', name: 'Cactus Flowers Forever Stamps', desc: '', cn: { sku: 'STAMP-00-221-CN', price: '5.00' }, us: { sku: 'STAMP-00-221-US', price: '15.00' } },
  { id: 162, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/faf0eda76e3bc7c9f39aa21f39ee6140.jpg', name: 'U.S. Flag 2017 Forever Stamps', desc: '', cn: { sku: 'STAMP-17-223-CN', price: '5.00' }, us: { sku: 'STAMP-17-223-US', price: '15.00' } },
  { id: 163, theme: 'commemorative', denom: 'postcard', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/C31EFC9E-728B-2A8E-D8B5-176CD49FBC8D.webp', name: 'Coral Reefs Postcard Forever Stamps', desc: '', cn: { sku: 'STAMP-00-225-CN', price: '5.00' }, us: { sku: 'STAMP-00-225-US', price: '15.00' } },
  { id: 164, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/740bde02190d644fdab917a5b1232864.jpg', name: 'U.S. Flag 2018 Forever Stamps', desc: '', cn: { sku: 'STAMP-18-227-CN', price: '5.00' }, us: { sku: 'STAMP-18-227-US', price: '15.00' } },
  { id: 165, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-23.webp', name: '$1.12 Colorado Hairstreak Forever Stamps', desc: '', cn: { sku: 'STAMP-00-229-CN', price: '5.00' }, us: { sku: 'STAMP-00-229-US', price: '15.00' } },
  { id: 166, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-22.webp', name: 'SHARKS 2017 Forever Stamps', desc: '', cn: { sku: 'STAMP-17-231-CN', price: '5.00' }, us: { sku: 'STAMP-17-231-US', price: '15.00' } },
  { id: 167, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-21.webp', name: 'U.S. Flag 2022 Forever Stamps', desc: '', cn: { sku: 'STAMP-22-241-CN', price: '5.00' }, us: { sku: 'STAMP-22-241-US', price: '15.00' } },
  { id: 168, theme: 'animals', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-24.webp', name: 'Pets Celebrate Animals Forever Stamps', desc: '', cn: { sku: 'STAMP-00-237-CN', price: '5.00' }, us: { sku: 'STAMP-00-237-US', price: '15.00' } },
  { id: 169, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/751B2EB3-635D-576E-6683-70BE190D4923.webp', name: 'Winter Berries Forever Stamps', desc: '', cn: { sku: 'STAMP-00-239-CN', price: '5.00' }, us: { sku: 'STAMP-00-239-US', price: '15.00' } },
  { id: 170, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-29.webp', name: 'The Snowy Day Forever Stamps', desc: '', cn: { sku: 'STAMP-00-243-CN', price: '5.00' }, us: { sku: 'STAMP-00-243-US', price: '15.00' } },
  { id: 171, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/5f09b187a219b4960d9a8424ba58dcdc.webp', name: 'U.S. Flag 2019 Forever Stamps', desc: '', cn: { sku: 'STAMP-19-245-CN', price: '5.00' }, us: { sku: 'STAMP-19-245-US', price: '15.00' } },
  { id: 172, theme: 'science', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/D7A52853-F332-9FD7-D658-E9F27DBEF204.webp', name: '2014 Star-Spangled Banner Forever Stamps', desc: '', cn: { sku: 'STAMP-14-247-CN', price: '5.00' }, us: { sku: 'STAMP-14-247-US', price: '15.00' } },
  { id: 173, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-27.webp', name: 'Holiday Wreaths Forever Stamps', desc: '', cn: { sku: 'STAMP-00-249-CN', price: '5.00' }, us: { sku: 'STAMP-00-249-US', price: '15.00' } },
  { id: 174, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-26.webp', name: 'Happy Birthday Forever Stamps', desc: '', cn: { sku: 'STAMP-00-251-CN', price: '5.00' }, us: { sku: 'STAMP-00-251-US', price: '15.00' } },
  { id: 175, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/b-49.webp', name: 'Holiday Windows Forever Stamps', desc: '', cn: { sku: 'STAMP-00-253-CN', price: '5.00' }, us: { sku: 'STAMP-00-253-US', price: '15.00' } },
  { id: 176, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-30.webp', name: 'Spooky Silhouettes Forever Stamps', desc: '', cn: { sku: 'STAMP-00-255-CN', price: '5.00' }, us: { sku: 'STAMP-00-255-US', price: '15.00' } },
  { id: 177, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/7FCBE507-DBDA-0A5A-A03E-1DDFF04CDEA0.webp', name: 'Day of the Dead Forever Stamps', desc: '', cn: { sku: 'STAMP-00-257-CN', price: '5.00' }, us: { sku: 'STAMP-00-257-US', price: '15.00' } },
  { id: 178, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/03C6F794-15E8-CD77-945E-76E2CB7D24F5.webp', name: 'Mystery Message Forever Stamps', desc: '', cn: { sku: 'STAMP-00-259-CN', price: '5.00' }, us: { sku: 'STAMP-00-259-US', price: '15.00' } },
  { id: 179, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/b-50.webp', name: 'Disney Villains Forever Stamps', desc: '', cn: { sku: 'STAMP-00-261-CN', price: '5.00' }, us: { sku: 'STAMP-00-261-US', price: '15.00' } },
  { id: 180, theme: 'other', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/0E7AC201-CC26-7171-53A6-D2AEE884CAB5.webp', name: 'Florentine Madonna And Child Forever Stamps', desc: '', cn: { sku: 'STAMP-00-263-CN', price: '5.00' }, us: { sku: 'STAMP-00-263-US', price: '15.00' } },
  { id: 181, theme: 'commemorative', denom: 'other', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/USA-5311__84947.webp', name: 'Global: Poinsettia Forever Stamps', desc: '', cn: { sku: 'STAMP-00-265-CN', price: '5.00' }, us: { sku: 'STAMP-00-265-US', price: '15.00' } },
  { id: 182, theme: 'commemorative', denom: 'other', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/141ED549-F440-2111-D846-D219CA5CCB9F.webp', name: 'Global: Chrysanthemum Forever Stamps', desc: '', cn: { sku: 'STAMP-00-267-CN', price: '5.00' }, us: { sku: 'STAMP-00-267-US', price: '15.00' } },
  { id: 183, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/b-51.webp', name: 'Squirrel Tree Frog Forever Stamps', desc: '', cn: { sku: 'STAMP-00-269-CN', price: '5.00' }, us: { sku: 'STAMP-00-269-US', price: '15.00' } },
  { id: 184, theme: 'commemorative', denom: 'postcard', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/DF9A7BE6-E785-22C4-5D8B-9BA544A30442.webp', name: 'Barns Postcard Forever Stamps', desc: '', cn: { sku: 'STAMP-00-271-CN', price: '5.00' }, us: { sku: 'STAMP-00-271-US', price: '15.00' } },
  { id: 185, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-31.webp', name: 'Sparkling Holidays Souvenir Forever Stamps', desc: '', cn: { sku: 'STAMP-00-273-CN', price: '5.00' }, us: { sku: 'STAMP-00-273-US', price: '15.00' } },
  { id: 186, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/USA-5452__80194.webp', name: 'Wild Orchids Forever Stamps', desc: '', cn: { sku: 'STAMP-00-275-CN', price: '5.00' }, us: { sku: 'STAMP-00-275-US', price: '15.00' } },
  { id: 187, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a-32.webp', name: '2 Ounce Garden Corsage Forever Stamps', desc: '', cn: { sku: 'STAMP-00-277-CN', price: '5.00' }, us: { sku: 'STAMP-00-277-US', price: '15.00' } },
  { id: 188, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/3FC90198-7C22-A22E-68C5-918462E9191B.webp', name: 'Our Lady of Guadalupe Forever Stamps', desc: '', cn: { sku: 'STAMP-00-279-CN', price: '5.00' }, us: { sku: 'STAMP-00-279-US', price: '15.00' } },
  { id: 189, theme: 'holiday', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/D6EEC23D-91C6-3DC7-CBF7-3DC1C71C0380.webp', name: 'Hanukkah Forever Stamps', desc: '', cn: { sku: 'STAMP-00-281-CN', price: '5.00' }, us: { sku: 'STAMP-00-281-US', price: '15.00' } },
  { id: 190, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/B-52.webp', name: 'Otters in Snow Forever Stamps', desc: '', cn: { sku: 'STAMP-00-283-CN', price: '5.00' }, us: { sku: 'STAMP-00-283-US', price: '15.00' } },
  { id: 191, theme: 'patriotic', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/11_-1.jpg', name: 'U.S. Flag Forever Stamps 2019', desc: '', cn: { sku: 'STAMP-19-285-CN', price: '5.00' }, us: { sku: 'STAMP-19-285-US', price: '15.00' } },
  { id: 192, theme: 'wedding', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/A-33.webp', name: 'Hearts Blossom Forever Stamps', desc: '', cn: { sku: 'STAMP-00-287-CN', price: '5.00' }, us: { sku: 'STAMP-00-287-US', price: '15.00' } },
  { id: 193, theme: 'wedding', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/CA710450-919C-087B-16F0-4E0932AB24B9.webp', name: 'Love 2022 Forever Stamps', desc: '', cn: { sku: 'STAMP-22-289-CN', price: '5.00' }, us: { sku: 'STAMP-22-289-US', price: '15.00' } },
  { id: 194, theme: 'wedding', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/A-1-1.webp', name: 'Made of Hearts Forever Stamps', desc: '', cn: { sku: 'STAMP-00-291-CN', price: '5.00' }, us: { sku: 'STAMP-00-291-US', price: '15.00' } },
  { id: 195, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/1-1.jpg', name: 'Contemporary Boutonniere Forever Stamps', desc: '', cn: { sku: 'STAMP-00-293-CN', price: '5.00' }, us: { sku: 'STAMP-00-293-US', price: '15.00' } },
  { id: 196, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/40428C41-A6A2-0585-0B98-4F6D3C681E03.webp', name: 'Earth Day Forever Stamps', desc: '', cn: { sku: 'STAMP-00-295-CN', price: '5.00' }, us: { sku: 'STAMP-00-295-US', price: '15.00' } },
  { id: 197, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/5_.jpg', name: 'Drug Free USA Forever Stamps', desc: '', cn: { sku: 'STAMP-00-297-CN', price: '5.00' }, us: { sku: 'STAMP-00-297-US', price: '15.00' } },
  { id: 198, theme: 'wedding', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/amd14-395e1.jpg', name: 'Love Forever Stamps 2021', desc: '', cn: { sku: 'STAMP-21-299-CN', price: '5.00' }, us: { sku: 'STAMP-21-299-US', price: '15.00' } },
  { id: 199, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/a07qt-ppdjd.jpg', name: 'Garden Beauty Forever Stamps', desc: '', cn: { sku: 'STAMP-00-201-CN', price: '5.00' }, us: { sku: 'STAMP-00-201-US', price: '15.00' } },
  { id: 200, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/USA-5569-72__24421.jpg', name: 'Espresso Drinks Forever Stamps', desc: '', cn: { sku: 'STAMP-00-203-CN', price: '5.00' }, us: { sku: 'STAMP-00-203-US', price: '15.00' } },
  { id: 201, theme: 'commemorative', denom: 'forever', img: 'https://discountstampdeal.com/wp-content/uploads/2025/02/2176520D-F158-3A23-E811-3CE0D3C23097.jpg', name: 'A Visit From St.Nick Forever Stamps', desc: '', cn: { sku: 'STAMP-00-205-CN', price: '5.00' }, us: { sku: 'STAMP-00-205-US', price: '15.00' } }
];

// ================================================================
// GET CURRENT PRICE
// ================================================================
function getCurrentPrice(product) {
  return currentShipLocation === 'cn' ? product.cn.price : product.us.price;
}

function getCurrentSku(product) {
  return currentShipLocation === 'cn' ? product.cn.sku : product.us.sku;
}

// ================================================================
// RENDER PRODUCTS (with Pagination)
// ================================================================
function renderProducts() {
  const grid = document.getElementById('productGrid');
  let filtered = PRODUCTS.filter(p => {
    if (currentTheme !== 'all' && p.theme !== currentTheme) return false;
    if (currentDenom !== 'all' && p.denom !== currentDenom) return false;
    const price = parseFloat(getCurrentPrice(p));
    if (priceMin && price < priceMin) return false;
    if (priceMax && price > priceMax) return false;
    return true;
  });

  // sort
  if (currentSort === 'rating') filtered.sort((a,b) => (b.rating||0) - (a.rating||0));
  else if (currentSort === 'price-asc') filtered.sort((a,b) => parseFloat(getCurrentPrice(a)) - parseFloat(getCurrentPrice(b)));
  else if (currentSort === 'price-desc') filtered.sort((a,b) => parseFloat(getCurrentPrice(b)) - parseFloat(getCurrentPrice(a)));
  else if (currentSort === 'newest') filtered.sort((a,b) => b.id - a.id);

  // 保存过滤后的数据
  totalProducts = filtered;
  
  // 计算总页数
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  
  // 确保当前页在有效范围内
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;
  
  // 获取当前页的数据
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageProducts = filtered.slice(startIndex, endIndex);

  document.getElementById('shopCount').textContent = `${filtered.length} products`;

  grid.innerHTML = pageProducts.map(p => {
    const price = getCurrentPrice(p);
    const locationFlag = currentShipLocation === 'cn' ? '🇨🇳' : '🇺🇸';
    return `
      <div class="product-card" onclick="openModal(${p.id})">
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="product-img-fallback" style="display:none">📮</div>
        </div>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-price">
            <span class="price-current">$${price}</span>
            <span class="product-location">${locationFlag}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // 渲染分页控件
  renderPagination(totalPages);
}

// ================================================================
// PAGINATION
// ================================================================
function renderPagination(totalPages) {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;
  
  if (totalProducts.length === 0) {
    pagination.innerHTML = '';
    return;
  }

  let html = '';
  
  // 显示 "第 X-Y 条 / 共 Z 条"
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalProducts.length);
  html += `<span class="pagination-info">${startItem}-${endItem} / ${totalProducts.length}</span>`;
  
  // 每页显示数量选择
  html += `<select class="page-size-select" onchange="setPageSize(this.value)">`;
  [10, 20, 30].forEach(size => {
    html += `<option value="${size}" ${pageSize === size ? 'selected' : ''}>${size}/页</option>`;
  });
  html += `</select>`;

  // 上一页
  html += `<button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="goToPage(${currentPage - 1})">‹</button>`;
  
  // 页码
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  
  if (startPage > 1) {
    html += `<button class="pagination-num" onclick="goToPage(1)">1</button>`;
    if (startPage > 2) html += `<span class="pagination-ellipsis">...</span>`;
  }
  
  for (let i = startPage; i <= endPage; i++) {
    html += `<button class="pagination-num ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }
  
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) html += `<span class="pagination-ellipsis">...</span>`;
    html += `<button class="pagination-num" onclick="goToPage(${totalPages})">${totalPages}</button>`;
  }
  
  // 下一页
  html += `<button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="goToPage(${currentPage + 1})">›</button>`;
  
  pagination.innerHTML = html;
}

function goToPage(page) {
  const totalPages = Math.ceil(totalProducts.length / pageSize) || 1;
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderProducts();
  // 滚动到顶部
  document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
}

function setPageSize(size) {
  pageSize = parseInt(size);
  currentPage = 1; // 重置到第一页
  renderProducts();
}

// ================================================================
// BUILD THEME TABS
// ================================================================
function buildThemeTabs() {
  const themes = ['all', 'patriotic', 'holiday', 'wedding', 'animals', 'commemorative', 'science', 'people', 'floral', 'popculture'];
  const tabsHtml = themes.map(t => 
    `<button class="cat-tab ${currentTheme===t?'active':''}" onclick="setTheme('${t}')">${THEME_LABELS[t]}</button>`
  ).join('');
  document.getElementById('themeTabs').innerHTML = tabsHtml;
}

// ================================================================
// BUILD SIDEBAR
// ================================================================
function buildSidebar() {
  // denom
  const denoms = ['all', 'forever', 'two-oz', 'priority', 'postcard', 'semipostal'];
  document.getElementById('sidebarDenom').innerHTML = denoms.map(d => 
    `<a href="#shop" class="${currentDenom===d?'active':''}" onclick="setDenom('${d}')">${DENOM_LABELS[d]}</a>`
  ).join('');

  // theme
  const themes = ['patriotic', 'holiday', 'wedding', 'animals', 'commemorative', 'science', 'people'];
  document.getElementById('sidebarTheme').innerHTML = themes.map(t => 
    `<a href="#shop" class="${currentTheme===t?'active':''}" onclick="setTheme('${t}')">${THEME_LABELS[t]}</a>`
  ).join('');
}

// ================================================================
// FILTER FUNCTIONS
// ================================================================
function setTheme(t) { currentTheme = t; buildThemeTabs(); buildSidebar(); renderProducts(); }
function setDenom(d) { currentDenom = d; buildSidebar(); renderProducts(); }
function setSort(s) { currentSort = s; renderProducts(); }
function applyPriceFilter() {
  priceMin = parseFloat(document.getElementById('priceMin').value) || null;
  priceMax = parseFloat(document.getElementById('priceMax').value) || null;
  renderProducts();
}
function doSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(c => {
    const name = c.querySelector('.product-name').textContent.toLowerCase();
    c.style.display = name.includes(q) ? '' : 'none';
  });
}

// ================================================================
// SHIP LOCATION
// ================================================================
function setShipLocation(loc) {
  currentShipLocation = loc;
  document.querySelectorAll('.ship-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.loc === loc);
  });
  renderProducts();
}

// ================================================================
// PRICE INFO MODAL
// ================================================================
function openPriceInfo(e) {
  if (e) e.preventDefault();
  document.getElementById('priceModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePriceModal(e) {
  if (e && e.target !== document.getElementById('priceModalOverlay')) return;
  closePriceModalDirect();
}
function closePriceModalDirect() {
  document.getElementById('priceModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ================================================================
// SHIPPING INFO MODAL
// ================================================================
function openShippingInfo(e) {
  if (e) e.preventDefault();
  document.getElementById('shippingModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeShippingModal(e) {
  if (e && e.target !== document.getElementById('shippingModalOverlay')) return;
  closeShippingModalDirect();
}
function closeShippingModalDirect() {
  document.getElementById('shippingModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ================================================================
// PRODUCT MODAL
// ================================================================
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const price = getCurrentPrice(p);
  const sku = getCurrentSku(p);
  const locationText = currentShipLocation === 'cn' ? 'Ships from China' : 'Ships from USA';

  document.getElementById('modalCat').textContent = (THEME_LABELS[p.theme] || p.theme) + ' Stamp';
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalRating').innerHTML = `<span style="color:#666;font-size:14px">${locationText}</span>`;
  document.getElementById('modalPrice').innerHTML = `<span class="price-current" style="font-size:28px">$${price}</span>`;
  document.getElementById('modalOriginal').textContent = `SKU: ${sku}`;
  document.getElementById('modalSavings').textContent = '';
  document.getElementById('modalDesc').textContent = p.desc || 'No description available.';

  // specs
  const specsHtml = `
    <tr><td>Theme</td><td>${THEME_LABELS[p.theme] || p.theme}</td></tr>
    <tr><td>Denomination</td><td>${p.denom}</td></tr>
    <tr><td>Shipping</td><td>${locationText}</td></tr>
    <tr><td>SKU</td><td>${sku}</td></tr>
  `;
  document.getElementById('modalSpecs').innerHTML = specsHtml;

  // options
  const options = ['100 Pcs (5 Sheets)', '500 Pcs (25 Sheets)', '1,000 Pcs (50 Sheets)'];
  const qtyEl = document.getElementById('modalQty');
  qtyEl.innerHTML = options.map((opt, i) => {
    const p = parseFloat(getCurrentPrice(p)) * (i === 0 ? 1 : i === 1 ? 5 : 10);
    return `<option value="${i}">${opt} — $${(p * (i===0?1:i===1?5:10)).toFixed(2)}</option>`;
  }).join('');

  // image
  document.getElementById('modalImg').innerHTML =
    `<img src="${p.img}" alt="${p.name}" loading="eager" onerror="this.parentElement.innerHTML='<span style=font-size:80px>📮</span>'" style="width:100%;height:100%;object-fit:cover;border-radius:10px"/>`;

  // tags
  document.getElementById('modalTags').innerHTML = 
    `<span class="modal-tag">${currentShipLocation === 'cn' ? '🇨🇳 China' : '🇺🇸 USA'}</span>
     <span class="modal-tag">${p.denom}</span>`;

  // email button
  document.getElementById('modalEmailBtn').onclick = () => {
    const subj = encodeURIComponent(`Order Inquiry: ${p.name}`);
    const body = encodeURIComponent(`Hi,

I'd like to order:

Product: ${p.name}
SKU: ${sku}
Shipping: ${locationText}
Price: $${price}

Please confirm availability and final price.

Thank you!`);
    window.open(`mailto:support@stampdealsusa.com?subject=${subj}&body=${body}`);
  };

  // whatsapp button
  document.getElementById('modalWaBtn').onclick = () => {
    const msg = encodeURIComponent(`Hi! I'd like to order:

📮 ${p.name}
📦 SKU: ${sku}
🚚 ${locationText}
💰 $${price}

Could you confirm availability and shipping time? Thanks!`);
    window.open(`https://wa.me/1XXXXXXXXXX?text=${msg}`, '_blank');
  };

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ================================================================
// MOBILE NAV
// ================================================================
function openMobileNav() { document.getElementById('mobileNav').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMobileNavDirect() { document.getElementById('mobileNav').classList.remove('open'); document.body.style.overflow = ''; }
function closeMobileNav(e) { if (e.target === document.getElementById('mobileNav')) closeMobileNavDirect(); }

// ================================================================
// SCROLL TOP
// ================================================================
window.addEventListener('scroll', () => {
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
});

// ================================================================
// KEYBOARD
// ================================================================
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { 
    closeModalDirect(); 
    closeMobileNavDirect();
    closePriceModalDirect();
    closeShippingModalDirect();
  }
});

// ================================================================
// INIT
// ================================================================
buildThemeTabs();
buildSidebar();
renderProducts();
