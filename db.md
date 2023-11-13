# Database Design

## Usage Scenario:
Admin purchases drinks for sale at the club. Members keep track of drinks they consume in the app. At the end of the year or season they are asked to pay. Prices and/or list of drinks can change in new year. Admin should purchase drinks if App shows he is running out of inventory.


Design should be able to answer following questions:
- What happens when price of a product changes?

````
product {  
  uid  
  name  
  price  
  status (available, out-of-stock, discontinued)  
}

customer {  
  uid  
  username  
  password  
  favourites (array of product ids)  
  basket_id
}

basket {
  uid
  items (array of {product_id, count}),
  customer_id
  payment_id (optional)
}

payment {
  uid
  customer_id
  basket_id
  date
}
````
