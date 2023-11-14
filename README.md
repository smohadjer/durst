# mydrinks

## Usage:
The app's purpose is to allow club members keep track of drinks they consume during a season so that they can pay the balance at the end of the season. List and price of drinks can change only between seasons and not during a season. Payment is done either in app via paypal or outside the app via bank transfer or other means. If user chooses option to pay offline or outside the app he must enter date and method of payment as proof of his payment. After payment, his basket will be marked as paid and becomes empty. He can see all paid baskets in payment history section of the app. Admin will receive an email with details of payment (total, list of drinks, name of user and payment data).

## Database Records/Collections

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
  season_id
  payment_date
}

season {
  uid
  name
  start_date
  end_date
}

````



