db.phones.drop()
db.createCollection("phones")

db.phones.insert({brand: "Samsung", model: "A1", price: 123.123, path: "samsung.jpeg"})
db.phones.insert({brand: "Apple", model: "6s", price: 123.123, path: "apple.jpeg"})
db.phones.insert({brand: "Nokia", model: "105 4G", price: 123.123, path: "nokia.jpeg"})
db.phones.insert({brand: "Sony", model: "Xperia 1", price: 123.123, path: "sony.jpeg"})
db.phones.insert({brand: "LG", model: "W41", price: 123.123, path: "lg.jpeg"})
db.phones.insert({brand: "HTC", model: "Desire 20+", price: 123.123, path: "htc.jpeg"})
db.phones.insert({brand: "MOTOROLA", model: "Defy", price: 123.123, path: "motorola.jpeg"})
db.phones.insert({brand: "Xiaomi", model: "Poco M3", price: 123.123, path: "xiaomi.jpeg"})
db.phones.insert({brand: "Google", model: "Pixel2", price: 123.123, path: "google.jpeg"})
