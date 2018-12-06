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
  ExpDate: Number,
  CVV: Number,
  BillingZip: Number
})

let dataSchema = new Schema({
  username: String,
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


const newUser = function (data, err) {
  // console.log(data, 'this is data')
  var user = new Repo({
    'username': data.name,
    'name': data.name,
    'Email': data.email,
    'AddressLine1': data.addressLine1,
    'AddressLine2': data.addressLine1,
    'City': data.city,
    'State': data.state,
    'Zip': data.zip,
    'Phone': data.phone,
    'CreditCard': [{ 'CCNumber': data.CCNumber, 'ExpDate': data.expDate, 'CVV': data.cvv, 'BillingZip': data.billingZip }]
  })

  user.save(function (err) {
    if (err) {
      console.log('the data fields some data fields are not correct, make sure they are numbers')
    } else {
      console.log('saved')
    }
  });
};


const findInfo = function () {
  // data.find({});
}


findInfo();


module.exports.newUser = newUser;
module.exports.findInfo = findInfo;