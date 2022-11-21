CREATE DATABASE 'pizzeria'

use('pizzeria');db.createCollection('customer',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "properties": {
    "address": {
      "bsonType": "string"
    },
    "province": {
      "bsonType": "string"
    },
    "city": {
      "bsonType": "string"
    },
    "phone": {
      "bsonType": "string"
    },
    "surname": {
      "bsonType": "string"
    },
    "name": {
      "bsonType": "string"
    },
    "postcode": {
      "bsonType": "string"
    }
  }
} }});

use('pizzeria');db.createCollection('employee',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "name",
    "surname",
    "nif",
    "shop"
  ],
  "properties": {
    "shop": {
      "bsonType": "objectId"
    },
    "role": {
      "enum": [
        "delivery",
        "cook"
      ]
    },
    "phone": {
      "bsonType": "string"
    },
    "surname": {
      "bsonType": "string"
    },
    "name": {
      "bsonType": "string"
    },
    "nif": {
      "bsonType": "string"
    }
  }
} }});

use('pizzeria');db.createCollection('order',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "order_time",
    "deliveryType",
    "price",
    "customer",
    "shop",
    "deliveryEmployee"
  ],
  "properties": {
    "shop": {
      "bsonType": "objectId"
    },
    "deliveryEmployee": {
      "bsonType": "objectId"
    },
    "deliveryTime": {
      "bsonType": "timestamp"
    },
    "price": {
      "bsonType": "int"
    },
    "deliveryType": {
      "enum": [
        "takeAway",
        "delivery"
      ]
    },
    "order_time": {
      "bsonType": "timestamp"
    },
    "customer": {
      "bsonType": "objectId"
    }
  }
} }});

use('pizzeria');db.createCollection('order-products',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "properties": {
    "productQuant": {
      "bsonType": "int"
    },
    "product": {
      "bsonType": "objectId"
    },
    "order": {
      "bsonType": "objectId"
    }
  }
} }});

use('pizzeria');db.createCollection('pizzaCategory',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "category"
  ],
  "properties": {
    "category": {
      "bsonType": "string"
    }
  }
} }});

use('pizzeria');db.createCollection('product',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "type",
    "name",
    "price"
  ],
  "properties": {
    "pizzaCategory": {
      "bsonType": "array",
      "items": {
        "bsonType": "object"
      }
    },
    "image": {
      "bsonType": "binData"
    },
    "price": {
      "bsonType": "int"
    },
    "name": {
      "bsonType": "string"
    },
    "description": {
      "bsonType": "regex"
    },
    "type": {
      "enum": [
        "pizza",
        "hamburguesa",
        "beguda"
      ]
    }
  }
} }});

use('pizzeria');db.createCollection('shop',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "address"
  ],
  "properties": {
    "address": {
      "bsonType": "string"
    },
    "province": {
      "bsonType": "string"
    },
    "city": {
      "bsonType": "string"
    },
    "postcode": {
      "bsonType": "string"
    }
  }
} }});
