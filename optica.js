CREATE DATABASE 'optica'

use('optica');db.createCollection('brand',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "brand",
    "supplier"
  ],
  "properties": {
    "supplier": {
      "bsonType": "objectId"
    },
    "brand": {
      "bsonType": "string"
    }
  }
} }});

use('optica');db.createCollection('customer',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "name",
    "surname",
    "date_enrol"
  ],
  "properties": {
    "referrer": {
      "bsonType": "objectId"
    },
    "address": {
      "bsonType": "long"
    },
    "mail": {
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
    "date_enrol": {
      "bsonType": "date"
    }
  }
} }});

use('optica');db.createCollection('employees',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "name",
    "surname"
  ],
  "properties": {
    "surname": {
      "bsonType": "string"
    },
    "name": {
      "bsonType": "string"
    }
  }
} }});

use('optica');db.createCollection('glassSell',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "employee",
    "glass",
    "time",
    "customer"
  ],
  "properties": {
    "glass": {
      "bsonType": "objectId"
    },
    "time": {
      "bsonType": "timestamp"
    },
    "employee": {
      "bsonType": "objectId"
    },
    "customer": {
      "bsonType": "objectId"
    }
  }
} }});

use('optica');db.createCollection('glasses',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "brand",
    "price"
  ],
  "properties": {
    "refraction": {
      "bsonType": "array",
      "items": {
        "bsonType": "object",
        "properties": {
          "refr_left": {
            "bsonType": "int"
          },
          "refr_right": {
            "bsonType": "int"
          }
        }
      }
    },
    "price": {
      "bsonType": "int"
    },
    "glassColor": {
      "bsonType": "array",
      "items": {
        "bsonType": "object",
        "properties": {
          "glassColorLeft": {
            "bsonType": "string"
          },
          "glassColorRight": {
            "bsonType": "objectId"
          }
        }
      }
    },
    "brand": {
      "bsonType": "objectId"
    },
    "frame": {
      "bsonType": "array",
      "items": {
        "bsonType": "object",
        "properties": {
          "color": {
            "bsonType": "string"
          },
          "type": {
            "bsonType": "string"
          }
        }
      }
    }
  }
} }});

use('optica');db.createCollection('suppliers',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "supplier",
    "nif"
  ],
  "properties": {
    "address": {
      "bsonType": "object",
      "properties": {
        "door": {
          "bsonType": "string"
        },
        "country": {
          "bsonType": "string"
        },
        "city": {
          "bsonType": "string"
        },
        "street": {
          "bsonType": "string"
        },
        "num": {
          "bsonType": "string"
        },
        "postcode": {
          "bsonType": "string"
        },
        "floor": {
          "bsonType": "string"
        }
      }
    },
    "phone": {
      "bsonType": "objectId"
    },
    "supplier": {
      "bsonType": "string"
    },
    "nif": {
      "bsonType": "string"
    },
    "fax": {
      "bsonType": "string"
    }
  }
} }});
