# Durst

Durst is a minimal shop to allow club members purchase drinks at their club. It is built using MERN stack (MongoDB, Express, React, Node.js).

A product's price can not be changed. When we need to change the price we
must create a new product with a new uid and set the old product's status to
discontinued so it can not be ordered with the old price anymore. This will
ensure old orders show correct prices.

### Database Design
````
Interface Product {
  uid: string;
  name: string;
  image: string;
  price: number;
  status: string; (AVAILABLE | OUTOFSTOCK | DISCONTINUED)
}

Interface Customer {
  uid: string;
  username: string;
  password: string;
}

Interface Order {
  uid: string;
  customer_id: string;
  paid_date: date;
  status: pending | paid;
}

Interface OrderedItems {
  uid: string;
  order_id: string;
  product_id: string;
  product_price: number;
  count: number;
}

````

### Views
- login/register
- products listing
- basket
- purchase history (shows old paid baskets)
- payment
- profile

### Routes
- /api/login
- /api/register
- /api/logout
- /products
- /products/:id
- /baskets
- /basket/:id



