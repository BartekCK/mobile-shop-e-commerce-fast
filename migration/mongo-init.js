db.phones.drop()
db.createCollection("phones")

db.phones.insert({brand: "Samsung", phoneModel: "A1", price: 100, path: "samsung.jpeg"})
db.phones.insert({brand: "Apple", phoneModel: "6s", price: 200, path: "apple.jpeg"})
db.phones.insert({brand: "Nokia", phoneModel: "105 4G", price: 300, path: "nokia.jpeg"})
db.phones.insert({brand: "Sony", phoneModel: "Xperia 1", price: 400, path: "sony.jpeg"})
db.phones.insert({brand: "LG", phoneModel: "W41", price: 500, path: "lg.jpeg"})
db.phones.insert({brand: "HTC", phoneModel: "Desire 20+", price: 600, path: "htc.jpeg"})
db.phones.insert({brand: "MOTOROLA", phoneModel: "Defy", price: 700, path: "motorola.jpeg"})
db.phones.insert({brand: "Xiaomi", phoneModel: "Poco M3", price: 800, path: "xiaomi.jpeg"})
db.phones.insert({brand: "Google", phoneModel: "Pixel2", price: 900, path: "google.jpeg"})
