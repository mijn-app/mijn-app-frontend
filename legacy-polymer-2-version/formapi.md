# Mijn App API description

This section serves as a high level API description which is needed to support the "Mijn App klantenreizen".

## GET /customer-journeys

Retrieves a list of customer journeys.

Example request:

URL: `/customer-journeys`

Example success response:

```JSON
[
    {
        "name": "Ik ga verhuizen",
        "uuid" : "5fb9beb4-fb72-45b6-9222-25eb4fa2ea85"
    },
    {
        "name": "Ik ga trouwen",
        "uuid" : "280a7692-2d1c-11e8-b467-0ed5f89f718b"
    }
]
```

## GET /customer-journeys/:customer_journey_id

Retrieves a detailed customer-journey object containing the whole form.

Example request: `/customer-journeys/280a7692-2d1c-11e8-b467-0ed5f89f718b`

Parameters:

* `customer_journey_id` the uuid of the customer journey

Example success response:

```JSON
{
    "customer_journey_id": "280a7692-2d1c-11e8-b467-0ed5f89f718b",
    "title": ...,
    "overview": {
        ...
    },
    "requested_values": {
        ...
    },
    "questions":{
        ...
    },
}
```

## POST /orders

Stores the `requested_values` object, filled in by the question form. These will be called orders, since the result of filling in a question form by a user is basically placing some sort of order.

Example request: `/orders`

Example request body

```JSON
{
    "user_id": "fc9d0552-2d1f-11e8-b467-0ed5f89f718b",
    "customer_journey_id": "0580444a-2d20-11e8-b467-0ed5f89f718b",
    "requested_values":[
        {
            "name":"address",
            "value":"Eindhoven, Nederland"
        },
        {
            "name":"move_date",
            "value":"2018-03-22T23:00:00.000Z"
        },
    ]
}
```

Example success response:

```JSON
{
    "order_id": "280a7692-2d1c-11e8-b467-0ed5f89f718b",
    "status": "sent"
}
```

# Mijn App webhook descripton

This section serves as a high level webhook description which is needed to support the "Mijn App klantenreizen".

## POST /orders/:order_id/status

Updates the status of an order.

Example request: `orders/a4766d36-2d20-11e8-b467-0ed5f89f718b/status`

Parameters:

* `order_id` the uuid of the order

Example request body

```JSON
{
    "status": "failed"
}
```

Example success response:

```JSON
{
    "status": 200
}
```