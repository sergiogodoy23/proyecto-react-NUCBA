export const products = [
  {
    id: 1,
    title: 'Moto G52',
    img: 'assets/MotorolaG52.jpg',
    desc: '128GB Negro',
    price: 500,
    category: 'Motorola',
  },
  {
    id: 2,
    title: 'Apple Iphone 11',
    img: 'assets/Iphone11.jpg',
    desc: '128GB Blanco',
    price: 950,
    category: 'Apple',
  },
  {
    id: 3,
    title: 'Xiaomi 11t',
    img: 'assets/Xiaomi11t.jpg',
    desc: '256GB Gray',
    price: 650,
    category: 'Xiaomi',
  },
  {
    id: 4,
    title: 'Iphone 13 Pro',
    img: 'assets/iphone13pro.jpg',
    desc: '128GB Gold',
    price: 1100,
    category: 'Apple',
  },
  {
    id: 5,
    title: 'Motorola Edge 30 Pro',
    img: 'assets/Motorolaedge30pro.jpg',
    desc: '256GB Verde stylus',
    price: 980,
    category: 'Motorola',
  },
  {
    id: 6,
    title: 'Moto G71',
    img: 'assets/Motorolag71.jpg',
    desc: '128GB Azul',
    price: 1100,
    category: 'Motorola',
  },
  {
    id: 7,
    title: 'Iphone 13 Pro Max',
    img: 'assets/Iphone13ProMax.jpg',
    desc: '256GB Graphite',
    price: 1800,
    category: 'Apple',
  },
  {
    id: 8,
    title: 'Xiaomi Note 11',
    img: 'assets/Xiaominote11.jpg',
    desc: '128GB Negro',
    price: 700,
    category: 'Xiaomi',
  },
  {
    id: 9,
    title: 'Samsung Galaxy s22+',
    img: 'assets/SamsungGalaxys22plus.jpg',
    desc: '256GB verde',
    price: 850,
    category: 'Samsung',
  },
  {
    id: 10,
    title: 'Samsung Galaxy s21FE',
    img: 'assets/SamsungGalaxys21fe.jpg',
    desc: '128GB negro',
    price: 820,
    category: 'Samsung',
  },
  {
    id: 11,
    title: 'Xiaomi POCO M3',
    img: 'assets/XiaomiM3.jpg',
    desc: '128GB Negro',
    price: 400,
    category: 'Xiaomi',
  },
  {
    id: 12,
    title: 'Moto E32',
    img: 'assets/MotorolaE32.jpg',
    desc: '64GB Azul',
    price: 500,
    category: 'Motorola',
  },
];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});
