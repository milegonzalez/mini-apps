class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleForm: BeginCheckOut,
      username: '',
      name: '',
      email: '',
      password: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      CCNumber: '',
      expDate: '',
      cvv: '',
      billingZip: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.pullInfo = this.pullInfo.bind(this);
  }


  pullInfo() {
    // let username = this.state.email;
    fetch("http://localhost:3000", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({username})
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result, 'this is result')
        })
      .catch(err => {
        console.log('error')
      })
  }

  save(event) {
    this.handleClick(event)
    fetch("http://localhost:3000", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        username: this.state.email,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        addressLine1: this.state.addressLine1,
        addressLine2: this.state.addressLine2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        phone: this.state.phone,
        CCNumber: this.state.CCNumber,
        expDate: this.state.expDate,
        cvv: this.state.cvv,
        billingZip: this.state.billingZip
      })
    })
      .catch(err => {
        console.log('error')
      })
  }

  handleClick(event) {
    event.preventDefault();

    if (event.target.className === 'beginCheckOut') {
      this.setState({
        visibleForm: FormOne
      })
    }

    if (event.target.className === 'completeFormOne') {
      this.setState({
        visibleForm: FormTwo
      })
    }

    if (event.target.className === 'completeFormTwo') {
      this.setState({
        visibleForm: FormThree
      })
    }

    if (event.target.className === 'completeFormThree') {
      this.setState({
        visibleForm: FormsCompleted
      })

    }
  }

  handleChange(event) {
    let value = event.target.value;
    let username = event.target.email;
    let name = event.target.name;
    let email = event.target.email;
    let password = event.target.password;
    let addressLine1 = event.target.addressLine1;
    let addressLine2 = event.target.addressLine2;
    let city = event.target.city;
    let state = event.target.state;
    let zip = event.target.zip;
    let phone = event.target.phone;
    let CCNumber = event.target.CCNumber;
    let expDate = event.target.expDate;
    let cvv = event.target.cvv;
    let billingZip = event.target.billingZip;


    this.setState({
      [name]: value,
      [email]: value,
      [username]: value,
      [password]: value,
      [addressLine1]: value,
      [addressLine2]: value,
      [city]: value,
      [state]: value,
      [zip]: value,
      [phone]: value,
      [CCNumber]: value,
      [expDate]: value,
      [cvv]: value,
      [billingZip]: value,
    });
  }

  render() {
    let VisibleForm = this.state.visibleForm;
    let currentForm;

    if (VisibleForm === BeginCheckOut) {
      currentForm = <BeginCheckOut
        handleChange={this.handleChange}
        handleClick={this.handleClick} />
    }

    if (VisibleForm === FormOne) {
      currentForm = <FormOne
        name={this.state.name}
        email={this.state.email}
        password={this.state.password}
        handleChange={this.handleChange}
        handleClick={this.handleClick} />
    }

    if (VisibleForm === FormTwo) {
      currentForm = <FormTwo
        addressLine1={this.state.addressLine1}
        addressLine2={this.state.addressLine2}
        city={this.state.city}
        state={this.state.state}
        zip={this.state.zip}
        phone={this.state.phone}
        handleChange={this.handleChange}
        handleClick={this.handleClick} />
    }

    if (VisibleForm === FormThree) {
      currentForm = <FormThree
        CCNumber={this.state.CCNumber}
        expDate={this.state.expDate}
        cvv={this.state.cvv}
        billingZip={this.state.billingZip}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        save={this.save} />
    }

    if (VisibleForm === FormsCompleted) {
      currentForm = <FormsCompleted
      name={this.state.name}
      email={this.state.email}
      password={this.state.password}
      addressLine1={this.state.addressLine1}
      addressLine2={this.state.addressLine2}
      city={this.state.city}
      state={this.state.state}
      zip={this.state.zip}
      phone={this.state.phone}
      CCNumber={this.state.CCNumber}
      expDate={this.state.expDate}
      cvv={this.state.cvv}
      billingZip={this.state.billingZip} />
    }

    return (
      <div className="container">
        <h1 className="site-heading">Checkout Page</h1>
        {currentForm}
      </div>
    )
  }
}


const BeginCheckOut = (props) => {
  return (
    <div>
      <p>
        Welcome! Lets begin the checkout process. Don't worry, your infomation is safe with us, unless,
        you're like Kanye and your password is '0000'
      </p>
      <button
        type="submit"
        value="Submit"
        className="beginCheckOut"
        onClick={props.handleClick}>Begin Checkout</button>
    </div>
  )
}


const FormOne = (props) => {
  return (
    <div>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={props.name}
          onChange={props.handleChange}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={props.email}
          onChange={props.handleChange}
        />
        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={props.password}
          onChange={props.handleChange} />
        <button
          type="submit"
          value="Submit"
          className="completeFormOne"
          onClick={props.handleClick}>Next Step</button>
      </form>
    </div>
  )
}


const FormTwo = (props) => {
  return (
    <div>
      <form>
        <label>Address Line 1:</label>
        <input
          type="text"
          name="addressLine1"
          value={props.addressLine1}
          onChange={props.handleChange} />
        <label>Address Line 2:</label>
        <input
          type="text"
          name="addressLine2"
          value={props.addressLine2}
          onChange={props.handleChange} />
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={props.city}
          onChange={props.handleChange} />
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={props.state}
          onChange={props.handleChange} />
        <label>Zip Code:</label>
        <input
          type="text"
          name="zip"
          value={props.zip}
          onChange={props.handleChange} />
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={props.phone}
          onChange={props.handleChange} />
        <button
          type="submit"
          value="Submit"
          className="completeFormTwo"
          onClick={props.handleClick}>Next Step</button>
      </form>
    </div>
  )
}


const FormThree = (props) => {
  return (
    <div>
      <form>
        <label>Credit Card Number:</label>
        <input
          type="text"
          name="CCNumber"
          value={props.CCNumber}
          onChange={props.handleChange} />
        <label>Expiration Date:</label>
        <input
          type="text"
          name="expDate"
          value={props.expDate}
          onChange={props.handleChange} />
        <label>CVV:</label>
        <input
          type="text"
          name="cvv"
          value={props.cvv}
          onChange={props.handleChange} />
        <label>Billing Zip Code:</label>
        <input
          type="text"
          name="billingZip"
          value={props.billingZip}
          onChange={props.handleChange} />
        <button
          type="submit"
          value="Submit"
          className="completeFormThree"
          onClick={props.save}>Submit</button>
      </form>
    </div>
  )
}


const FormsCompleted = (props) => {
  return (
    <div>
      <p>
        Thanks form completing your transaction, here is a summary of your transaction:
    </p>
      <label>Name:</label>
      <div className="summary">{props.name}</div>
      <label>Email:</label>
      <div className="summary">{props.email}</div>
      <label>Address One:</label>
      <div className="summary">{props.addressLine1}</div>
      <label>Address Two:</label>
      <div className="summary">{props.addressLine2}</div>
      <label>City:</label>
      <div className="summary">{props.city}</div>
      <label>State:</label>
      <div className="summary">{props.state}</div>
      <label>Zip:</label>
      <div className="summary">{props.zip}</div>
      <label>Phone:</label>
      <div className="summary">{props.phone}</div>
      <label>Billing Zip:</label>
      <div className="summary">{props.billingZip}</div>
      <button
        type="submit"
        value="Submit"
        className="formsCompleted"
        onClick={props.pullInfo}>Purchase</button>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
