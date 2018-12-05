'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*to complete now need to send the post request to the
server once all the info has been added to the state */

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      visibleForm: BeginCheckOut,
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
    return _this;
  }

  //Need to build save function.


  _createClass(App, [{
    key: 'save',
    value: function save(e) {
      console.log('this is e.target', e.target);
      console.log('this is this.state', this.state);
      event.preventDefault();
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

      this.setState((_setState = {}, _defineProperty(_setState, name, value), _defineProperty(_setState, email, value), _defineProperty(_setState, password, value), _defineProperty(_setState, addressLine1, value), _defineProperty(_setState, addressLine2, value), _defineProperty(_setState, city, value), _defineProperty(_setState, state, value), _defineProperty(_setState, zip, value), _defineProperty(_setState, phone, value), _defineProperty(_setState, CCNumber, value), _defineProperty(_setState, expDate, value), _defineProperty(_setState, cvv, value), _defineProperty(_setState, billingZip, value), _setState));
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
        currentForm = React.createElement(FormsCompleted, null);
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
      'Thanks form completing your transaction!'
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJ2aXNpYmxlRm9ybSIsIkJlZ2luQ2hlY2tPdXQiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImFkZHJlc3NMaW5lMSIsImFkZHJlc3NMaW5lMiIsImNpdHkiLCJ6aXAiLCJwaG9uZSIsIkNDTnVtYmVyIiwiZXhwRGF0ZSIsImN2diIsImJpbGxpbmdaaXAiLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJzYXZlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NOYW1lIiwic2V0U3RhdGUiLCJGb3JtT25lIiwiRm9ybVR3byIsIkZvcm1UaHJlZSIsIkZvcm1zQ29tcGxldGVkIiwidmFsdWUiLCJWaXNpYmxlRm9ybSIsImN1cnJlbnRGb3JtIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7SUFLTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWFDLGFBREY7QUFFWEMsWUFBTSxFQUZLO0FBR1hDLGFBQU8sRUFISTtBQUlYQyxnQkFBVSxFQUpDO0FBS1hDLG9CQUFjLEVBTEg7QUFNWEMsb0JBQWMsRUFOSDtBQU9YQyxZQUFNLEVBUEs7QUFRWFIsYUFBTyxFQVJJO0FBU1hTLFdBQUssRUFUTTtBQVVYQyxhQUFPLEVBVkk7QUFXWEMsZ0JBQVUsRUFYQztBQVlYQyxlQUFTLEVBWkU7QUFhWEMsV0FBSyxFQWJNO0FBY1hDLGtCQUFZO0FBZEQsS0FBYjs7QUFpQkEsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNB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IiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qdG8gY29tcGxldGUgbm93IG5lZWQgdG8gc2VuZCB0aGUgcG9zdCByZXF1ZXN0IHRvIHRoZVxuc2VydmVyIG9uY2UgYWxsIHRoZSBpbmZvIGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBzdGF0ZSAqL1xuXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlzaWJsZUZvcm06IEJlZ2luQ2hlY2tPdXQsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGFkZHJlc3NMaW5lMTogJycsXG4gICAgICBhZGRyZXNzTGluZTI6ICcnLFxuICAgICAgY2l0eTogJycsXG4gICAgICBzdGF0ZTogJycsXG4gICAgICB6aXA6ICcnLFxuICAgICAgcGhvbmU6ICcnLFxuICAgICAgQ0NOdW1iZXI6ICcnLFxuICAgICAgZXhwRGF0ZTogJycsXG4gICAgICBjdnY6ICcnLFxuICAgICAgYmlsbGluZ1ppcDogJydcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vTmVlZCB0byBidWlsZCBzYXZlIGZ1bmN0aW9uLlxuICBzYXZlKGUpIHtcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBlLnRhcmdldCcsIGUudGFyZ2V0KVxuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHRoaXMuc3RhdGUnLHRoaXMuc3RhdGUpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnYmVnaW5DaGVja091dCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2aXNpYmxlRm9ybTogRm9ybU9uZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NvbXBsZXRlRm9ybU9uZScpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2aXNpYmxlRm9ybTogRm9ybVR3b1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NvbXBsZXRlRm9ybVR3bycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2aXNpYmxlRm9ybTogRm9ybVRocmVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcGxldGVGb3JtVGhyZWUnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaWJsZUZvcm06IEZvcm1zQ29tcGxldGVkXG4gICAgICB9KVxuXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgbGV0IGVtYWlsID0gZXZlbnQudGFyZ2V0LmVtYWlsO1xuICAgIGxldCBwYXNzd29yZCA9IGV2ZW50LnRhcmdldC5wYXNzd29yZDtcbiAgICBsZXQgYWRkcmVzc0xpbmUxID0gZXZlbnQudGFyZ2V0LmFkZHJlc3NMaW5lMTtcbiAgICBsZXQgYWRkcmVzc0xpbmUyID0gZXZlbnQudGFyZ2V0LmFkZHJlc3NMaW5lMjtcbiAgICBsZXQgY2l0eSA9IGV2ZW50LnRhcmdldC5jaXR5O1xuICAgIGxldCBzdGF0ZSA9IGV2ZW50LnRhcmdldC5zdGF0ZTtcbiAgICBsZXQgemlwID0gZXZlbnQudGFyZ2V0LnppcDtcbiAgICBsZXQgcGhvbmUgPSBldmVudC50YXJnZXQucGhvbmU7XG4gICAgbGV0IENDTnVtYmVyID0gZXZlbnQudGFyZ2V0LkNDTnVtYmVyO1xuICAgIGxldCBleHBEYXRlID0gZXZlbnQudGFyZ2V0LmV4cERhdGU7XG4gICAgbGV0IGN2diA9IGV2ZW50LnRhcmdldC5jdnY7XG4gICAgbGV0IGJpbGxpbmdaaXAgPSBldmVudC50YXJnZXQuYmlsbGluZ1ppcDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgIFtlbWFpbF06IHZhbHVlLFxuICAgICAgW3Bhc3N3b3JkXTogdmFsdWUsXG4gICAgICBbYWRkcmVzc0xpbmUxXTogdmFsdWUsXG4gICAgICBbYWRkcmVzc0xpbmUyXTogdmFsdWUsXG4gICAgICBbY2l0eV06IHZhbHVlLFxuICAgICAgW3N0YXRlXTogdmFsdWUsXG4gICAgICBbemlwXTogdmFsdWUsXG4gICAgICBbcGhvbmVdOiB2YWx1ZSxcbiAgICAgIFtDQ051bWJlcl06IHZhbHVlLFxuICAgICAgW2V4cERhdGVdOiB2YWx1ZSxcbiAgICAgIFtjdnZdOiB2YWx1ZSxcbiAgICAgIFtiaWxsaW5nWmlwXTogdmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IFZpc2libGVGb3JtID0gdGhpcy5zdGF0ZS52aXNpYmxlRm9ybTtcbiAgICBsZXQgY3VycmVudEZvcm07XG5cbiAgICBpZiAoVmlzaWJsZUZvcm0gPT09IEJlZ2luQ2hlY2tPdXQpIHtcbiAgICAgIGN1cnJlbnRGb3JtID0gPEJlZ2luQ2hlY2tPdXRcbiAgICAgICAgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IC8+XG4gICAgfVxuXG4gICAgaWYgKFZpc2libGVGb3JtID09PSBGb3JtT25lKSB7XG4gICAgICBjdXJyZW50Rm9ybSA9IDxGb3JtT25lXG4gICAgICAgIG5hbWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgZW1haWw9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgIHBhc3N3b3JkPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30gLz5cbiAgICB9XG5cbiAgICBpZiAoVmlzaWJsZUZvcm0gPT09IEZvcm1Ud28pIHtcbiAgICAgIGN1cnJlbnRGb3JtID0gPEZvcm1Ud29cbiAgICAgICAgYWRkcmVzc0xpbmUxPXt0aGlzLnN0YXRlLmFkZHJlc3NMaW5lMX1cbiAgICAgICAgYWRkcmVzc0xpbmUyPXt0aGlzLnN0YXRlLmFkZHJlc3NMaW5lMn1cbiAgICAgICAgY2l0eT17dGhpcy5zdGF0ZS5jaXR5fVxuICAgICAgICBzdGF0ZT17dGhpcy5zdGF0ZS5zdGF0ZX1cbiAgICAgICAgemlwPXt0aGlzLnN0YXRlLnppcH1cbiAgICAgICAgcGhvbmU9e3RoaXMuc3RhdGUucGhvbmV9XG4gICAgICAgIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSAvPlxuICAgIH1cblxuICAgIGlmIChWaXNpYmxlRm9ybSA9PT0gRm9ybVRocmVlKSB7XG4gICAgICBjdXJyZW50Rm9ybSA9IDxGb3JtVGhyZWVcbiAgICAgICAgQ0NOdW1iZXI9e3RoaXMuc3RhdGUuQ0NOdW1iZXJ9XG4gICAgICAgIGV4cERhdGU9e3RoaXMuc3RhdGUuZXhwRGF0ZX1cbiAgICAgICAgY3Z2PXt0aGlzLnN0YXRlLmN2dn1cbiAgICAgICAgYmlsbGluZ1ppcD17dGhpcy5zdGF0ZS5iaWxsaW5nWmlwfVxuICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgc2F2ZT17dGhpcy5zYXZlfSAvPlxuICAgIH1cblxuICAgIGlmIChWaXNpYmxlRm9ybSA9PT0gRm9ybXNDb21wbGV0ZWQpIHtcbiAgICAgIGN1cnJlbnRGb3JtID0gPEZvcm1zQ29tcGxldGVkIC8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaXRlLWhlYWRpbmdcIj5DaGVja291dCBQYWdlPC9oMT5cbiAgICAgICAge2N1cnJlbnRGb3JtfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuY29uc3QgQmVnaW5DaGVja091dCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5cbiAgICAgICAgV2VsY29tZSEgTGV0cyBiZWdpbiB0aGUgY2hlY2tvdXQgcHJvY2Vzcy4gRG9uJ3Qgd29ycnksIHlvdXIgaW5mb21hdGlvbiBpcyBzYWZlIHdpdGggdXMsIHVubGVzcyxcbiAgICAgICAgeW91J3JlIGxpa2UgS2FueWUgYW5kIHlvdXIgcGFzc3dvcmQgaXMgJzAwMDAnXG4gICAgICA8L3A+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImJlZ2luQ2hlY2tPdXRcIlxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+QmVnaW4gQ2hlY2tvdXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNvbnN0IEZvcm1PbmUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxsYWJlbD5OYW1lOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLm5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5lbWFpbH1cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWw+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnBhc3N3b3JkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29tcGxldGVGb3JtT25lXCJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+TmV4dCBTdGVwPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBGb3JtVHdvID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8bGFiZWw+QWRkcmVzcyBMaW5lIDE6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJhZGRyZXNzTGluZTFcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5hZGRyZXNzTGluZTF9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGxhYmVsPkFkZHJlc3MgTGluZSAyOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiYWRkcmVzc0xpbmUyXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMuYWRkcmVzc0xpbmUyfVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxsYWJlbD5DaXR5OjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLmNpdHl9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGxhYmVsPlN0YXRlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5zdGF0ZX1cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8bGFiZWw+WmlwIENvZGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ6aXBcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy56aXB9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGxhYmVsPlBob25lIE51bWJlcjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMucGhvbmV9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb21wbGV0ZUZvcm1Ud29cIlxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT5OZXh0IFN0ZXA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNvbnN0IEZvcm1UaHJlZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGxhYmVsPkNyZWRpdCBDYXJkIE51bWJlcjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cIkNDTnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMuQ0NOdW1iZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGxhYmVsPkV4cGlyYXRpb24gRGF0ZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImV4cERhdGVcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5leHBEYXRlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxsYWJlbD5DVlY6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJjdnZcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5jdnZ9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGxhYmVsPkJpbGxpbmcgWmlwIENvZGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJiaWxsaW5nWmlwXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMuYmlsbGluZ1ppcH1cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBsZXRlRm9ybVRocmVlXCJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5zYXZlfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNvbnN0IEZvcm1zQ29tcGxldGVkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPlxuICAgICAgICBUaGFua3MgZm9ybSBjb21wbGV0aW5nIHlvdXIgdHJhbnNhY3Rpb24hXG4gICAgPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXG4iXX0=