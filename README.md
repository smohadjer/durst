# mydrinks

Database design for drink app

Usage Scenario: 
Admin purchases drinks for sale at the club. Members keep track of drinks they consume in the app. At the end of the year or season they are asked to pay. Prices and/or list of drinks can change in new year. Admin should purchase drinks if App shows he is running out of inventory.

Design should be able to answer following questions:
- What happens when price of a product changes?
- Allow inventory status

product {
 id: uid,
 name: string,
 price: number
 status: enum (available, out-of-stock, discontinued)
}

customer {
 id: uid,
 username: string,
 password: string,
 favourites: [product_id],
   basket_id
}

basket {
  id,
  items: [{product_id, count}],
 customer_id,
   payment_id?
}

payment {
id: uid,
customer_id: uid,
basket_id: uid,
date: date
}
