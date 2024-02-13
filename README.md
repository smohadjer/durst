# Durst

Durst is a minimal shop to allow the club members to purchase drinks at the club. It is built using MERN stack (MongoDB, Express, React, Node.js).

### Database Model
````
type ProductState: 'available' | 'out-of-stock' | 'discontinued';
type OrderState: 'pending' | 'paid';

interface Product {
  id: string;
  timestamp: timestamp;
  name: string;
  image?: string;
  price: number;
  state: ProductState;
}

interface Customer {
  id: string;
  timestamp: timestamp;
  username: string;
  password: string;
}

interface Order {
  id: string;
  timestamp: timestamp;
  customerId: string;
  paidDate?: date;
  state: OrderState;
}

interface OrderedItems {
  id: string;
  timestamp: timestamp;
  orderId: string;
  productId: string;
  productPrice: number;
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



