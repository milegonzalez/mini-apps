class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleForm: BeginCheckOut,
      name: '',
      email: '',
      password: '',
      addressLineOne: '',
      AddressLine1: '',
      AddressLine2: '',
      City: '',
      State: '',
      Zip: '',
      Phone: '',
      CCNumber: '',
      ExpDate: '',
      CVV: '',
      BillingZip: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    if (e.target.className === 'beginCheckOut') {
      this.setState({
        visibleForm: FormOne
      })
    } else if (e.target.className === 'completeFormOne') {
      this.setState({
        visibleForm: FormTwo
      })
    } else if (e.target.className === 'completeFormTwo') {
      this.setState({
        visibleForm: FormThree
      })
    } else if (e.target.className === 'completeFormThree') {
      this.setState({
        visibleForm: FormsCompleted
      })
    }
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    let email = event.target.email;
    let password = event.target.password;
    let addressLine1 = event.target.AddressLine1;
    let addressLine2 = event.target.AddressLine2;
    let city = event.target.City;
    let state = event.target.State;
    let zip = event.target.Zip;
    let phone = event.target.Phone;
    let CCNumber = event.target.CCNumber;
    let expDate = event.target.ExpDate;
    let cvv = event.target.CVV;
    let billingZip = event.target.BillingZip;


    this.setState({
      [name]: value,
      [email]: value,
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
        addressLine1={this.state.AddressLine1} addressLine2={this.state.AddressLine2}
        city={this.state.City}
        state={this.state.State}
        zip={this.state.Zip}
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
      handleClick={this.handleClick}/>
    }
    if (VisibleForm === FormsCompleted) {
      currentForm = <FormsCompleted />
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
          value={props.name} onChange={props.handleChange}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={props.email} onChange={props.handleChange}
        />
        <label>Password:</label>
        <input
          type="text"
          name="password" />
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
        <label>NameTOW:</label>
        <input
          type="text"
          name="name" />
        <label>EmailSF:</label>
        <input
          type="text"
          name="email" />
        <label>PasswordDFSD:</label>
        <input
          type="text"
          name="password" />
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
        <label>TOW:</label>
        <input
          type="text"
          name="name" />
        <label>lSF:</label>
        <input
          type="text"
          name="email" />
        <label>PasswordDFSD:</label>
        <input
          type="text"
          name="password" />
        <button
          type="submit"
          value="Submit"
          className="completeFormThree"
          onClick={props.handleClick}>Submit</button>
      </form>
    </div>
  )
}


const FormsCompleted = (props) => {
  return (
    <div>
      <p>
        Thanks form completing your transaction!
    </p>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))


//need to send to the server the information I'm receiving from the forms
