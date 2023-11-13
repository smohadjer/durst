# mydrinks

## Usage:
The app's purpose is to allow club members keep track of drinks they consume during a season so that they can pay the balance at the end of the season. List and price of drinks can change only between seasons and not during a season. Payment won't be carried out in the app, so when a user clicks to pay, he is asked to enter date of bank transfer as proof of payment. Then his current basket will be marked as paid and moved to history and his current basket will be empty.  Admin will receive an email with details of payment (total, list of drinks, name of uesr and data of bank transfer).

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



