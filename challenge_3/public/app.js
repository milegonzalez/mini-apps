'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
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
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.save = _this.save.bind(_this);
    _this.pullInfo = _this.pullInfo.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'pullInfo',
    value: function pullInfo() {
      // let username = this.state.email;
      fetch("http://localhost:3000", {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        // body: JSON.stringify({username})
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        console.log(result, 'this is result');
      }).catch(function (err) {
        console.log('error');
      });
    }
  }, {
    key: 'save',
    value: function save(event) {
      this.handleClick(event);
      fetch("http://localhost:3000", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
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
      }).catch(function (err) {
        console.log('error');
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();

      if (event.target.className === 'beginCheckOut') {
        this.setState({
          visibleForm: FormOne
        });
      }

      if (event.target.className === 'completeFormOne') {
        this.setState({
          visibleForm: FormTwo
        });
      }

      if (event.target.className === 'completeFormTwo') {
        this.setState({
          visibleForm: FormThree
        });
      }

      if (event.target.className === 'completeFormThree') {
        this.setState({
          visibleForm: FormsCompleted
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var _setState;

      var value = event.target.value;
      var username = event.target.email;
      var name = event.target.name;
      var email = event.target.email;
      var password = event.target.password;
      var addressLine1 = event.target.addressLine1;
      var addressLine2 = event.target.addressLine2;
      var city = event.target.city;
      var state = event.target.state;
      var zip = event.target.zip;
      var phone = event.target.phone;
      var CCNumber = event.target.CCNumber;
      var expDate = event.target.expDate;
      var cvv = event.target.cvv;
      var billingZip = event.target.billingZip;

      this.setState((_setState = {}, _defineProperty(_setState, name, value), _defineProperty(_setState, email, value), _defineProperty(_setState, username, value), _defineProperty(_setState, password, value), _defineProperty(_setState, addressLine1, value), _defineProperty(_setState, addressLine2, value), _defineProperty(_setState, city, value), _defineProperty(_setState, state, value), _defineProperty(_setState, zip, value), _defineProperty(_setState, phone, value), _defineProperty(_setState, CCNumber, value), _defineProperty(_setState, expDate, value), _defineProperty(_setState, cvv, value), _defineProperty(_setState, billingZip, value), _setState));
    }
  }, {
    key: 'render',
    value: function render() {
      var VisibleForm = this.state.visibleForm;
      var currentForm = void 0;

      if (VisibleForm === BeginCheckOut) {
        currentForm = React.createElement(BeginCheckOut, {
          handleChange: this.handleChange,
          handleClick: this.handleClick });
      }

      if (VisibleForm === FormOne) {
        currentForm = React.createElement(FormOne, {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          handleChange: this.handleChange,
          handleClick: this.handleClick });
      }

      if (VisibleForm === FormTwo) {
        currentForm = React.createElement(FormTwo, {
          addressLine1: this.state.addressLine1,
          addressLine2: this.state.addressLine2,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip,
          phone: this.state.phone,
          handleChange: this.handleChange,
          handleClick: this.handleClick });
      }

      if (VisibleForm === FormThree) {
        currentForm = React.createElement(FormThree, {
          CCNumber: this.state.CCNumber,
          expDate: this.state.expDate,
          cvv: this.state.cvv,
          billingZip: this.state.billingZip,
          handleChange: this.handleChange,
          handleClick: this.handleClick,
          save: this.save });
      }

      if (VisibleForm === FormsCompleted) {
        currentForm = React.createElement(FormsCompleted, {
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
          billingZip: this.state.billingZip });
      }

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'h1',
          { className: 'site-heading' },
          'Checkout Page'
        ),
        currentForm
      );
    }
  }]);

  return App;
}(React.Component);

var BeginCheckOut = function BeginCheckOut(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Welcome! Lets begin the checkout process. Don\'t worry, your infomation is safe with us, unless, you\'re like Kanye and your password is \'0000\''
    ),
    React.createElement(
      'button',
      {
        type: 'submit',
        value: 'Submit',
        className: 'beginCheckOut',
        onClick: props.handleClick },
      'Begin Checkout'
    )
  );
};

var FormOne = function FormOne(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'form',
      null,
      React.createElement(
        'label',
        null,
        'Name:'
      ),
      React.createElement('input', {
        type: 'text',
        name: 'name',
        value: props.name,
        onChange: props.handleChange
      }),
      React.createElement(
        'label',
        null,
        'Email:'
      ),
      React.createElement('input', {
        type: 'text',
        name: 'email',
        value: props.email,
        onChange: props.handleChange
      }),
      React.createElement(
        'label',
        null,
        'Password:'
      ),
      React.createElement('input', {
        type: 'text',
        name: 'password',
        value: props.password,
        onChange: props.handleChange }),
      React.createElement(
        'button',
        {
          type: 'submit',
          value: 'Submit',
          className: 'completeFormOne',
          onClick: props.handleClick },
        'Next Step'
      )
    )
  );
};

var FormTwo = function FormTwo(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'form',
      null,
      React.createElement(
        'label',
        null,
        'Address Line 1:'
      ),
      React.createElement('input', {
        type: 'text',
        name: 'addressLine1',
        value: props.addressLine1,
        onChange: props.handleChange }),
      React.createElement(
        'label',
        null,
        'Address Line 2:'
      ),
      React.createElement('input', {
        type: 'text',
        name: 'addressLine2',
        value: props.addressLine2,
        onChange: props.handleChange }),
      React.createElement(
        'label',
        null,
        'City:'
      ),
      React.createElement('input', {
        type: 'text',
        name: 'city',
        value: props.city,
        onChange: props.handleChange }),
      React.createElement(
        'label',
        null,
        'State:'
      ),
      React.createElement('input', {
        type: 'text',
        name: 'state',
        value: props.state,
        onChange: props.handleChange }),
      React.createElement(
        'label',
        null,
        'Zip Code:'
      ),
      React.createElement('input', {
        type: 'text',
        name: 'zip',
        value: props.zip,
        onChange: props.handleChange }),
      React.createElement(
        'label',
        null,
        'Phone Number:'
      ),
      React.createElement('input', {
        type: 'text',
        name: 'phone',
        value: props.phone,
        onChange: props.handleChange }),
      React.createElement(
        'button',
        {
          type: 'submit',
          value: 'Submit',
          className: 'completeFormTwo',
          onClick: props.handleClick },
        'Next Step'
      )
    )
  );
};

var FormThree = function FormThree(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'form',
      null,
      React.createElement(
        'label',
        null,
        'Credit Card Number:'
      ),
      React.createElement('input', {
        type: 'text',
        name: 'CCNumber',
        value: props.CCNumber,
        onChange: props.handleChange }),
      React.createElement(
        'label',
        null,
        'Expiration Date:'
      ),
      React.createElement('input', {
        type: 'text',
        name: 'expDate',
        value: props.expDate,
        onChange: props.handleChange }),
      React.createElement(
        'label',
        null,
        'CVV:'
      ),
      React.createElement('input', {
        type: 'text',
        name: 'cvv',
        value: props.cvv,
        onChange: props.handleChange }),
      React.createElement(
        'label',
        null,
        'Billing Zip Code:'
      ),
      React.createElement('input', {
        type: 'text',
        name: 'billingZip',
        value: props.billingZip,
        onChange: props.handleChange }),
      React.createElement(
        'button',
        {
          type: 'submit',
          value: 'Submit',
          className: 'completeFormThree',
          onClick: props.save },
        'Submit'
      )
    )
  );
};

var FormsCompleted = function FormsCompleted(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Thanks form completing your transaction, here is a summary of your transaction:'
    ),
    React.createElement(
      'label',
      null,
      'Name:'
    ),
    React.createElement(
      'div',
      { className: 'summary' },
      props.name
    ),
    React.createElement(
      'label',
      null,
      'Email:'
    ),
    React.createElement(
      'div',
      { className: 'summary' },
      props.email
    ),
    React.createElement(
      'label',
      null,
      'Address One:'
    ),
    React.createElement(
      'div',
      { className: 'summary' },
      props.addressLine1
    ),
    React.createElement(
      'label',
      null,
      'Address Two:'
    ),
    React.createElement(
      'div',
      { className: 'summary' },
      props.addressLine2
    ),
    React.createElement(
      'label',
      null,
      'City:'
    ),
    React.createElement(
      'div',
      { className: 'summary' },
      props.city
    ),
    React.createElement(
      'label',
      null,
      'State:'
    ),
    React.createElement(
      'div',
      { className: 'summary' },
      props.state
    ),
    React.createElement(
      'label',
      null,
      'Zip:'
    ),
    React.createElement(
      'div',
      { className: 'summary' },
      props.zip
    ),
    React.createElement(
      'label',
      null,
      'Phone:'
    ),
    React.createElement(
      'div',
      { className: 'summary' },
      props.phone
    ),
    React.createElement(
      'label',
      null,
      'Billing Zip:'
    ),
    React.createElement(
      'div',
      { className: 'summary' },
      props.billingZip
    ),
    React.createElement(
      'button',
      {
        type: 'submit',
        value: 'Submit',
        className: 'formsCompleted',
        onClick: props.pullInfo },
      'Purchase'
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJ2aXNpYmxlRm9ybSIsIkJlZ2luQ2hlY2tPdXQiLCJ1c2VybmFtZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiY2l0eSIsInppcCIsInBob25lIiwiQ0NOdW1iZXIiLCJleHBEYXRlIiwiY3Z2IiwiYmlsbGluZ1ppcCIsImhhbmRsZUNsaWNrIiwiYmluZCIsImhhbmRsZUNoYW5nZSIsInNhdmUiLCJwdWxsSW5mbyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXZlbnQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwic2V0U3RhdGUiLCJGb3JtT25lIiwiRm9ybVR3byIsIkZvcm1UaHJlZSIsIkZvcm1zQ29tcGxldGVkIiwidmFsdWUiLCJWaXNpYmxlRm9ybSIsImN1cnJlbnRGb3JtIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYUMsYUFERjtBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLFlBQU0sRUFISztBQUlYQyxhQUFPLEVBSkk7QUFLWEMsZ0JBQVUsRUFMQztBQU1YQyxvQkFBYyxFQU5IO0FBT1hDLG9CQUFjLEVBUEg7QUFRWEMsWUFBTSxFQVJLO0FBU1hULGFBQU8sRUFUSTtBQVVYVSxXQUFLLEVBVk07QUFXWEMsYUFBTyxFQVhJO0FBWVhDLGdCQUFV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QVZGO0FBV0U7QUFBQTtBQUFBLFFBQUssV0FBVSxTQUFmO0FBQTBCUixZQUFNUztBQUFoQyxLQVhGO0FBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVpGO0FBYUU7QUFBQTtBQUFBLFFBQUssV0FBVSxTQUFmO0FBQTBCVCxZQUFNVTtBQUFoQyxLQWJGO0FBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWRGO0FBZUU7QUFBQTtBQUFBLFFBQUssV0FBVSxTQUFmO0FBQTBCVixZQUFNQztBQUFoQyxLQWZGO0FBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FoQkY7QUFpQkU7QUFBQTtBQUFBLFFBQUssV0FBVSxTQUFmO0FBQTBCRCxZQUFNVztBQUFoQyxLQWpCRjtBQWtCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbEJGO0FBbUJFO0FBQUE7QUFBQSxRQUFLLFdBQVUsU0FBZjtBQUEwQlgsWUFBTVk7QUFBaEMsS0FuQkY7QUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXBCRjtBQXFCRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFNBQWY7QUFBMEJaLFlBQU1nQjtBQUFoQyxLQXJCRjtBQXNCRTtBQUFBO0FBQUE7QUFDRSxjQUFLLFFBRFA7QUFFRSxlQUFNLFFBRlI7QUFHRSxtQkFBVSxnQkFIWjtBQUlFLGlCQUFTaEIsTUFBTXFCLFFBSmpCO0FBQUE7QUFBQTtBQXRCRixHQURGO0FBOEJELENBL0JEOztBQWtDQTRCLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aXNpYmxlRm9ybTogQmVnaW5DaGVja091dCxcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgYWRkcmVzc0xpbmUxOiAnJyxcbiAgICAgIGFkZHJlc3NMaW5lMjogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHppcDogJycsXG4gICAgICBwaG9uZTogJycsXG4gICAgICBDQ051bWJlcjogJycsXG4gICAgICBleHBEYXRlOiAnJyxcbiAgICAgIGN2djogJycsXG4gICAgICBiaWxsaW5nWmlwOiAnJ1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHVsbEluZm8gPSB0aGlzLnB1bGxJbmZvLmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIHB1bGxJbmZvKCkge1xuICAgIC8vIGxldCB1c2VybmFtZSA9IHRoaXMuc3RhdGUuZW1haWw7XG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICAvLyBib2R5OiBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWV9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKFxuICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LCAndGhpcyBpcyByZXN1bHQnKVxuICAgICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXG4gICAgICB9KVxuICB9XG5cbiAgc2F2ZShldmVudCkge1xuICAgIHRoaXMuaGFuZGxlQ2xpY2soZXZlbnQpXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZCxcbiAgICAgICAgYWRkcmVzc0xpbmUxOiB0aGlzLnN0YXRlLmFkZHJlc3NMaW5lMSxcbiAgICAgICAgYWRkcmVzc0xpbmUyOiB0aGlzLnN0YXRlLmFkZHJlc3NMaW5lMixcbiAgICAgICAgY2l0eTogdGhpcy5zdGF0ZS5jaXR5LFxuICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZS5zdGF0ZSxcbiAgICAgICAgemlwOiB0aGlzLnN0YXRlLnppcCxcbiAgICAgICAgcGhvbmU6IHRoaXMuc3RhdGUucGhvbmUsXG4gICAgICAgIENDTnVtYmVyOiB0aGlzLnN0YXRlLkNDTnVtYmVyLFxuICAgICAgICBleHBEYXRlOiB0aGlzLnN0YXRlLmV4cERhdGUsXG4gICAgICAgIGN2djogdGhpcy5zdGF0ZS5jdnYsXG4gICAgICAgIGJpbGxpbmdaaXA6IHRoaXMuc3RhdGUuYmlsbGluZ1ppcFxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXG4gICAgICB9KVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdiZWdpbkNoZWNrT3V0Jykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpc2libGVGb3JtOiBGb3JtT25lXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcGxldGVGb3JtT25lJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpc2libGVGb3JtOiBGb3JtVHdvXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcGxldGVGb3JtVHdvJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpc2libGVGb3JtOiBGb3JtVGhyZWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjb21wbGV0ZUZvcm1UaHJlZScpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2aXNpYmxlRm9ybTogRm9ybXNDb21wbGV0ZWRcbiAgICAgIH0pXG5cbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgbGV0IHVzZXJuYW1lID0gZXZlbnQudGFyZ2V0LmVtYWlsO1xuICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgbGV0IGVtYWlsID0gZXZlbnQudGFyZ2V0LmVtYWlsO1xuICAgIGxldCBwYXNzd29yZCA9IGV2ZW50LnRhcmdldC5wYXNzd29yZDtcbiAgICBsZXQgYWRkcmVzc0xpbmUxID0gZXZlbnQudGFyZ2V0LmFkZHJlc3NMaW5lMTtcbiAgICBsZXQgYWRkcmVzc0xpbmUyID0gZXZlbnQudGFyZ2V0LmFkZHJlc3NMaW5lMjtcbiAgICBsZXQgY2l0eSA9IGV2ZW50LnRhcmdldC5jaXR5O1xuICAgIGxldCBzdGF0ZSA9IGV2ZW50LnRhcmdldC5zdGF0ZTtcbiAgICBsZXQgemlwID0gZXZlbnQudGFyZ2V0LnppcDtcbiAgICBsZXQgcGhvbmUgPSBldmVudC50YXJnZXQucGhvbmU7XG4gICAgbGV0IENDTnVtYmVyID0gZXZlbnQudGFyZ2V0LkNDTnVtYmVyO1xuICAgIGxldCBleHBEYXRlID0gZXZlbnQudGFyZ2V0LmV4cERhdGU7XG4gICAgbGV0IGN2diA9IGV2ZW50LnRhcmdldC5jdnY7XG4gICAgbGV0IGJpbGxpbmdaaXAgPSBldmVudC50YXJnZXQuYmlsbGluZ1ppcDtcblxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgW2VtYWlsXTogdmFsdWUsXG4gICAgICBbdXNlcm5hbWVdOiB2YWx1ZSxcbiAgICAgIFtwYXNzd29yZF06IHZhbHVlLFxuICAgICAgW2FkZHJlc3NMaW5lMV06IHZhbHVlLFxuICAgICAgW2FkZHJlc3NMaW5lMl06IHZhbHVlLFxuICAgICAgW2NpdHldOiB2YWx1ZSxcbiAgICAgIFtzdGF0ZV06IHZhbHVlLFxuICAgICAgW3ppcF06IHZhbHVlLFxuICAgICAgW3Bob25lXTogdmFsdWUsXG4gICAgICBbQ0NOdW1iZXJdOiB2YWx1ZSxcbiAgICAgIFtleHBEYXRlXTogdmFsdWUsXG4gICAgICBbY3Z2XTogdmFsdWUsXG4gICAgICBbYmlsbGluZ1ppcF06IHZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBWaXNpYmxlRm9ybSA9IHRoaXMuc3RhdGUudmlzaWJsZUZvcm07XG4gICAgbGV0IGN1cnJlbnRGb3JtO1xuXG4gICAgaWYgKFZpc2libGVGb3JtID09PSBCZWdpbkNoZWNrT3V0KSB7XG4gICAgICBjdXJyZW50Rm9ybSA9IDxCZWdpbkNoZWNrT3V0XG4gICAgICAgIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSAvPlxuICAgIH1cblxuICAgIGlmIChWaXNpYmxlRm9ybSA9PT0gRm9ybU9uZSkge1xuICAgICAgY3VycmVudEZvcm0gPSA8Rm9ybU9uZVxuICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgIGVtYWlsPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICBwYXNzd29yZD17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IC8+XG4gICAgfVxuXG4gICAgaWYgKFZpc2libGVGb3JtID09PSBGb3JtVHdvKSB7XG4gICAgICBjdXJyZW50Rm9ybSA9IDxGb3JtVHdvXG4gICAgICAgIGFkZHJlc3NMaW5lMT17dGhpcy5zdGF0ZS5hZGRyZXNzTGluZTF9XG4gICAgICAgIGFkZHJlc3NMaW5lMj17dGhpcy5zdGF0ZS5hZGRyZXNzTGluZTJ9XG4gICAgICAgIGNpdHk9e3RoaXMuc3RhdGUuY2l0eX1cbiAgICAgICAgc3RhdGU9e3RoaXMuc3RhdGUuc3RhdGV9XG4gICAgICAgIHppcD17dGhpcy5zdGF0ZS56aXB9XG4gICAgICAgIHBob25lPXt0aGlzLnN0YXRlLnBob25lfVxuICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30gLz5cbiAgICB9XG5cbiAgICBpZiAoVmlzaWJsZUZvcm0gPT09IEZvcm1UaHJlZSkge1xuICAgICAgY3VycmVudEZvcm0gPSA8Rm9ybVRocmVlXG4gICAgICAgIENDTnVtYmVyPXt0aGlzLnN0YXRlLkNDTnVtYmVyfVxuICAgICAgICBleHBEYXRlPXt0aGlzLnN0YXRlLmV4cERhdGV9XG4gICAgICAgIGN2dj17dGhpcy5zdGF0ZS5jdnZ9XG4gICAgICAgIGJpbGxpbmdaaXA9e3RoaXMuc3RhdGUuYmlsbGluZ1ppcH1cbiAgICAgICAgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgIHNhdmU9e3RoaXMuc2F2ZX0gLz5cbiAgICB9XG5cbiAgICBpZiAoVmlzaWJsZUZvcm0gPT09IEZvcm1zQ29tcGxldGVkKSB7XG4gICAgICBjdXJyZW50Rm9ybSA9IDxGb3Jtc0NvbXBsZXRlZFxuICAgICAgbmFtZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgZW1haWw9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICBwYXNzd29yZD17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgIGFkZHJlc3NMaW5lMT17dGhpcy5zdGF0ZS5hZGRyZXNzTGluZTF9XG4gICAgICBhZGRyZXNzTGluZTI9e3RoaXMuc3RhdGUuYWRkcmVzc0xpbmUyfVxuICAgICAgY2l0eT17dGhpcy5zdGF0ZS5jaXR5fVxuICAgICAgc3RhdGU9e3RoaXMuc3RhdGUuc3RhdGV9XG4gICAgICB6aXA9e3RoaXMuc3RhdGUuemlwfVxuICAgICAgcGhvbmU9e3RoaXMuc3RhdGUucGhvbmV9XG4gICAgICBDQ051bWJlcj17dGhpcy5zdGF0ZS5DQ051bWJlcn1cbiAgICAgIGV4cERhdGU9e3RoaXMuc3RhdGUuZXhwRGF0ZX1cbiAgICAgIGN2dj17dGhpcy5zdGF0ZS5jdnZ9XG4gICAgICBiaWxsaW5nWmlwPXt0aGlzLnN0YXRlLmJpbGxpbmdaaXB9IC8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaXRlLWhlYWRpbmdcIj5DaGVja291dCBQYWdlPC9oMT5cbiAgICAgICAge2N1cnJlbnRGb3JtfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuY29uc3QgQmVnaW5DaGVja091dCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5cbiAgICAgICAgV2VsY29tZSEgTGV0cyBiZWdpbiB0aGUgY2hlY2tvdXQgcHJvY2Vzcy4gRG9uJ3Qgd29ycnksIHlvdXIgaW5mb21hdGlvbiBpcyBzYWZlIHdpdGggdXMsIHVubGVzcyxcbiAgICAgICAgeW91J3JlIGxpa2UgS2FueWUgYW5kIHlvdXIgcGFzc3dvcmQgaXMgJzAwMDAnXG4gICAgICA8L3A+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImJlZ2luQ2hlY2tPdXRcIlxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+QmVnaW4gQ2hlY2tvdXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNvbnN0IEZvcm1PbmUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxsYWJlbD5OYW1lOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLm5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5lbWFpbH1cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWw+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnBhc3N3b3JkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29tcGxldGVGb3JtT25lXCJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+TmV4dCBTdGVwPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBGb3JtVHdvID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8bGFiZWw+QWRkcmVzcyBMaW5lIDE6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJhZGRyZXNzTGluZTFcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5hZGRyZXNzTGluZTF9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGxhYmVsPkFkZHJlc3MgTGluZSAyOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiYWRkcmVzc0xpbmUyXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMuYWRkcmVzc0xpbmUyfVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxsYWJlbD5DaXR5OjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLmNpdHl9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGxhYmVsPlN0YXRlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5zdGF0ZX1cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8bGFiZWw+WmlwIENvZGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ6aXBcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy56aXB9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGxhYmVsPlBob25lIE51bWJlcjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMucGhvbmV9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb21wbGV0ZUZvcm1Ud29cIlxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT5OZXh0IFN0ZXA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNvbnN0IEZvcm1UaHJlZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGxhYmVsPkNyZWRpdCBDYXJkIE51bWJlcjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cIkNDTnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMuQ0NOdW1iZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGxhYmVsPkV4cGlyYXRpb24gRGF0ZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImV4cERhdGVcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5leHBEYXRlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxsYWJlbD5DVlY6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJjdnZcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5jdnZ9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGxhYmVsPkJpbGxpbmcgWmlwIENvZGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJiaWxsaW5nWmlwXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMuYmlsbGluZ1ppcH1cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBsZXRlRm9ybVRocmVlXCJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5zYXZlfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNvbnN0IEZvcm1zQ29tcGxldGVkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPlxuICAgICAgICBUaGFua3MgZm9ybSBjb21wbGV0aW5nIHlvdXIgdHJhbnNhY3Rpb24sIGhlcmUgaXMgYSBzdW1tYXJ5IG9mIHlvdXIgdHJhbnNhY3Rpb246XG4gICAgPC9wPlxuICAgICAgPGxhYmVsPk5hbWU6PC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPntwcm9wcy5uYW1lfTwvZGl2PlxuICAgICAgPGxhYmVsPkVtYWlsOjwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj57cHJvcHMuZW1haWx9PC9kaXY+XG4gICAgICA8bGFiZWw+QWRkcmVzcyBPbmU6PC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPntwcm9wcy5hZGRyZXNzTGluZTF9PC9kaXY+XG4gICAgICA8bGFiZWw+QWRkcmVzcyBUd286PC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPntwcm9wcy5hZGRyZXNzTGluZTJ9PC9kaXY+XG4gICAgICA8bGFiZWw+Q2l0eTo8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+e3Byb3BzLmNpdHl9PC9kaXY+XG4gICAgICA8bGFiZWw+U3RhdGU6PC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPntwcm9wcy5zdGF0ZX08L2Rpdj5cbiAgICAgIDxsYWJlbD5aaXA6PC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPntwcm9wcy56aXB9PC9kaXY+XG4gICAgICA8bGFiZWw+UGhvbmU6PC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPntwcm9wcy5waG9uZX08L2Rpdj5cbiAgICAgIDxsYWJlbD5CaWxsaW5nIFppcDo8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+e3Byb3BzLmJpbGxpbmdaaXB9PC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm1zQ29tcGxldGVkXCJcbiAgICAgICAgb25DbGljaz17cHJvcHMucHVsbEluZm99PlB1cmNoYXNlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcbiJdfQ==