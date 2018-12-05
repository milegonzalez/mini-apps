const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dataSchema', { useNewUrlParser: true });
const Schema = mongoose.Schema;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // console.log('were Connected!')
});

let creditCardInfo = new Schema({
  CCNumber: Number,
  Zip: Number,
  ExpDate: Number,
  CVV: Number,
  BillingZip: Number
})

let dataSchema = new Schema({
  Name: String,
  Email: String,
  AddressLine1: String,
  AddressLine2: String,
  City: String,
  State: String,
  Zip: Number,
  Phone: Number,
  CreditCard: [creditCardInfo]

})

let Repo = mongoose.model('Repo', dataSchema);

let userA = new Repo({
  'name': 'mile',
  'Email': 'mile',
  'AddressLine1': 'mile',
  'AddressLine2': 'mile',
  'City': 'mile',
  'State': 'mile',
  'Zip': 8980,
  'Phone': 90887900,
  'CreditCard': [{'CCNumber': 12343213440302, 'Zip': 10010, 'ExpDate': 9809, 'CVV': 654, 'BillingZip': 940}]
})

userA.save(function (err) {
  if (err) {
    console.log('err')
  } else {
    console.log('saved')
  }
});

