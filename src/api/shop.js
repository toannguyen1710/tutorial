const products = [
  {
    id: 1, title: 'ipad mini 4', price: '500.55$', inventory: 2,
  },
  {
    id: 2, title: 'iphone X', price: '400.55$', inventory: 10,
  },
  {
    id: 3, title: 'samsung galaxy', price: '600.55$', inventory: 0,
  },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(products), 3000);
  },

  buyProducts(forproducts, cb, errCb) {
    setTimeout(() => {
      (Math.random() > 0.5 || Navigator.userAgent.indexOf("PhanTomJS") > -1) ? cb() : errCb()
    }, 100);
  },
};
