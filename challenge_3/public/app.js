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
    return _this;
  }

  //Need to build save function.


  _createClass(App, [{
    key: 'save',
    value: function save() {}
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();

      if (e.target.className === 'beginCheckOut') {
        this.setState({
          visibleForm: FormOne
        });
      }

      if (e.target.className === 'completeFormOne') {
        this.setState({
          visibleForm: FormTwo
        });
      }

      if (e.target.className === 'completeFormTwo') {
        this.setState({
          visibleForm: FormThree
        });
      }

      if (e.target.className === 'completeFormThree') {
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
          handleClick: this.handleClick });
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
          onClick: props.handleClick },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJ2aXNpYmxlRm9ybSIsIkJlZ2luQ2hlY2tPdXQiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImFkZHJlc3NMaW5lMSIsImFkZHJlc3NMaW5lMiIsImNpdHkiLCJ6aXAiLCJwaG9uZSIsIkNDTnVtYmVyIiwiZXhwRGF0ZSIsImN2diIsImJpbGxpbmdaaXAiLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJzZXRTdGF0ZSIsIkZvcm1PbmUiLCJGb3JtVHdvIiwiRm9ybVRocmVlIiwiRm9ybXNDb21wbGV0ZWQiLCJldmVudCIsInZhbHVlIiwiVmlzaWJsZUZvcm0iLCJjdXJyZW50Rm9ybSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7O0lBS01BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhQyxhQURGO0FBRVhDLFlBQU0sRUFGSztBQUdYQyxhQUFPLEVBSEk7QUFJWEMsZ0JBQVUsRUFKQztBQUtYQyxvQkFBYyxFQUxIO0FBTVhDLG9CQUFjLEVBTkg7QUFPWEMsWUFBTSxFQVBLO0FBUVhSLGFBQU8sRUFSSTtBQVNYUyxXQUFLLEVBVE07QUFVWEMsYUFBTyxFQVZJO0FBV1hDLGdCQUFVLEVBWEM7QUFZWEMsZUFBUyxFQVpFO0FBYVhDLFdBQUssRUFiTTtBQWNYQyxrQkFBWTtBQWRELEtBQWI7O0FBaUJBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtB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QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUEY7QUFRRTtBQUNFLGNBQUssTUFEUDtBQUVFLGNBQUssU0FGUDtBQUdFLGVBQU9sQixNQUFNYSxPQUhmO0FBSUUsa0JBQVViLE1BQU1rQixZQUpsQixHQVJGO0FBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQWJGO0FBY0U7QUFDRSxjQUFLLE1BRFA7QUFFRSxjQUFLLEtBRlA7QUFHRSxlQUFPbEIsTUFBTWMsR0FIZjtBQUlFLGtCQUFVZCxNQUFNa0IsWUFKbEIsR0FkRjtBQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BbkJGO0FBb0JFO0FBQ0UsY0FBSyxNQURQO0FBRUUsY0FBSyxZQUZQO0FBR0UsZUFBT2xCLE1BQU1lLFVBSGY7QUFJRSxrQkFBVWYsTUFBTWtCLFlBSmxCLEdBcEJGO0FBeUJFO0FBQUE7QUFBQTtBQUNFLGdCQUFLLFFBRFA7QUFFRSxpQkFBTSxRQUZSO0FBR0UscUJBQVUsbUJBSFo7QUFJRSxtQkFBU2xCLE1BQU1nQixXQUpqQjtBQUFBO0FBQUE7QUF6QkY7QUFERixHQURGO0FBbUNELENBcENEOztBQXVDQSxJQUFNVyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUMzQixLQUFELEVBQVc7QUFDaEMsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsR0FERjtBQU9ELENBUkQ7O0FBV0FrQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyp0byBjb21wbGV0ZSBub3cgbmVlZCB0byBzZW5kIHRoZSBwb3N0IHJlcXVlc3QgdG8gdGhlXG5zZXJ2ZXIgb25jZSBhbGwgdGhlIGluZm8gaGFzIGJlZW4gYWRkZWQgdG8gdGhlIHN0YXRlICovXG5cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aXNpYmxlRm9ybTogQmVnaW5DaGVja091dCxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgYWRkcmVzc0xpbmUxOiAnJyxcbiAgICAgIGFkZHJlc3NMaW5lMjogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHppcDogJycsXG4gICAgICBwaG9uZTogJycsXG4gICAgICBDQ051bWJlcjogJycsXG4gICAgICBleHBEYXRlOiAnJyxcbiAgICAgIGN2djogJycsXG4gICAgICBiaWxsaW5nWmlwOiAnJ1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy9OZWVkIHRvIGJ1aWxkIHNhdmUgZnVuY3Rpb24uXG4gIHNhdmUoKSB7XG5cbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnYmVnaW5DaGVja091dCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2aXNpYmxlRm9ybTogRm9ybU9uZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcGxldGVGb3JtT25lJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpc2libGVGb3JtOiBGb3JtVHdvXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdjb21wbGV0ZUZvcm1Ud28nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaWJsZUZvcm06IEZvcm1UaHJlZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcGxldGVGb3JtVGhyZWUnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaWJsZUZvcm06IEZvcm1zQ29tcGxldGVkXG4gICAgICB9KVxuXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgbGV0IGVtYWlsID0gZXZlbnQudGFyZ2V0LmVtYWlsO1xuICAgIGxldCBwYXNzd29yZCA9IGV2ZW50LnRhcmdldC5wYXNzd29yZDtcbiAgICBsZXQgYWRkcmVzc0xpbmUxID0gZXZlbnQudGFyZ2V0LmFkZHJlc3NMaW5lMTtcbiAgICBsZXQgYWRkcmVzc0xpbmUyID0gZXZlbnQudGFyZ2V0LmFkZHJlc3NMaW5lMjtcbiAgICBsZXQgY2l0eSA9IGV2ZW50LnRhcmdldC5jaXR5O1xuICAgIGxldCBzdGF0ZSA9IGV2ZW50LnRhcmdldC5zdGF0ZTtcbiAgICBsZXQgemlwID0gZXZlbnQudGFyZ2V0LnppcDtcbiAgICBsZXQgcGhvbmUgPSBldmVudC50YXJnZXQucGhvbmU7XG4gICAgbGV0IENDTnVtYmVyID0gZXZlbnQudGFyZ2V0LkNDTnVtYmVyO1xuICAgIGxldCBleHBEYXRlID0gZXZlbnQudGFyZ2V0LmV4cERhdGU7XG4gICAgbGV0IGN2diA9IGV2ZW50LnRhcmdldC5jdnY7XG4gICAgbGV0IGJpbGxpbmdaaXAgPSBldmVudC50YXJnZXQuYmlsbGluZ1ppcDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgIFtlbWFpbF06IHZhbHVlLFxuICAgICAgW3Bhc3N3b3JkXTogdmFsdWUsXG4gICAgICBbYWRkcmVzc0xpbmUxXTogdmFsdWUsXG4gICAgICBbYWRkcmVzc0xpbmUyXTogdmFsdWUsXG4gICAgICBbY2l0eV06IHZhbHVlLFxuICAgICAgW3N0YXRlXTogdmFsdWUsXG4gICAgICBbemlwXTogdmFsdWUsXG4gICAgICBbcGhvbmVdOiB2YWx1ZSxcbiAgICAgIFtDQ051bWJlcl06IHZhbHVlLFxuICAgICAgW2V4cERhdGVdOiB2YWx1ZSxcbiAgICAgIFtjdnZdOiB2YWx1ZSxcbiAgICAgIFtiaWxsaW5nWmlwXTogdmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IFZpc2libGVGb3JtID0gdGhpcy5zdGF0ZS52aXNpYmxlRm9ybTtcbiAgICBsZXQgY3VycmVudEZvcm07XG5cbiAgICBpZiAoVmlzaWJsZUZvcm0gPT09IEJlZ2luQ2hlY2tPdXQpIHtcbiAgICAgIGN1cnJlbnRGb3JtID0gPEJlZ2luQ2hlY2tPdXRcbiAgICAgICAgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IC8+XG4gICAgfVxuXG4gICAgaWYgKFZpc2libGVGb3JtID09PSBGb3JtT25lKSB7XG4gICAgICBjdXJyZW50Rm9ybSA9IDxGb3JtT25lXG4gICAgICAgIG5hbWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgZW1haWw9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgIHBhc3N3b3JkPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30gLz5cbiAgICB9XG5cbiAgICBpZiAoVmlzaWJsZUZvcm0gPT09IEZvcm1Ud28pIHtcbiAgICAgIGN1cnJlbnRGb3JtID0gPEZvcm1Ud29cbiAgICAgICAgYWRkcmVzc0xpbmUxPXt0aGlzLnN0YXRlLmFkZHJlc3NMaW5lMX1cbiAgICAgICAgYWRkcmVzc0xpbmUyPXt0aGlzLnN0YXRlLmFkZHJlc3NMaW5lMn1cbiAgICAgICAgY2l0eT17dGhpcy5zdGF0ZS5jaXR5fVxuICAgICAgICBzdGF0ZT17dGhpcy5zdGF0ZS5zdGF0ZX1cbiAgICAgICAgemlwPXt0aGlzLnN0YXRlLnppcH1cbiAgICAgICAgcGhvbmU9e3RoaXMuc3RhdGUucGhvbmV9XG4gICAgICAgIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSAvPlxuICAgIH1cblxuICAgIGlmIChWaXNpYmxlRm9ybSA9PT0gRm9ybVRocmVlKSB7XG4gICAgICBjdXJyZW50Rm9ybSA9IDxGb3JtVGhyZWVcbiAgICAgICAgQ0NOdW1iZXI9e3RoaXMuc3RhdGUuQ0NOdW1iZXJ9XG4gICAgICAgIGV4cERhdGU9e3RoaXMuc3RhdGUuZXhwRGF0ZX1cbiAgICAgICAgY3Z2PXt0aGlzLnN0YXRlLmN2dn1cbiAgICAgICAgYmlsbGluZ1ppcD17dGhpcy5zdGF0ZS5iaWxsaW5nWmlwfVxuICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30gLz5cbiAgICB9XG5cbiAgICBpZiAoVmlzaWJsZUZvcm0gPT09IEZvcm1zQ29tcGxldGVkKSB7XG4gICAgICBjdXJyZW50Rm9ybSA9IDxGb3Jtc0NvbXBsZXRlZCAvPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2l0ZS1oZWFkaW5nXCI+Q2hlY2tvdXQgUGFnZTwvaDE+XG4gICAgICAgIHtjdXJyZW50Rm9ybX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbmNvbnN0IEJlZ2luQ2hlY2tPdXQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+XG4gICAgICAgIFdlbGNvbWUhIExldHMgYmVnaW4gdGhlIGNoZWNrb3V0IHByb2Nlc3MuIERvbid0IHdvcnJ5LCB5b3VyIGluZm9tYXRpb24gaXMgc2FmZSB3aXRoIHVzLCB1bmxlc3MsXG4gICAgICAgIHlvdSdyZSBsaWtlIEthbnllIGFuZCB5b3VyIHBhc3N3b3JkIGlzICcwMDAwJ1xuICAgICAgPC9wPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxuICAgICAgICBjbGFzc05hbWU9XCJiZWdpbkNoZWNrT3V0XCJcbiAgICAgICAgb25DbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9PkJlZ2luIENoZWNrb3V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBGb3JtT25lID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8bGFiZWw+TmFtZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5uYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbD5FbWFpbDo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMuZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5wYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBsZXRlRm9ybU9uZVwiXG4gICAgICAgICAgb25DbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9Pk5leHQgU3RlcDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuY29uc3QgRm9ybVR3byA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGxhYmVsPkFkZHJlc3MgTGluZSAxOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiYWRkcmVzc0xpbmUxXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMuYWRkcmVzc0xpbmUxfVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxsYWJlbD5BZGRyZXNzIExpbmUgMjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImFkZHJlc3NMaW5lMlwiXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLmFkZHJlc3NMaW5lMn1cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8bGFiZWw+Q2l0eTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImNpdHlcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5jaXR5fVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxsYWJlbD5TdGF0ZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInN0YXRlXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMuc3RhdGV9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGxhYmVsPlppcCBDb2RlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiemlwXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMuemlwfVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxsYWJlbD5QaG9uZSBOdW1iZXI6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnBob25lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29tcGxldGVGb3JtVHdvXCJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+TmV4dCBTdGVwPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBGb3JtVGhyZWUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxsYWJlbD5DcmVkaXQgQ2FyZCBOdW1iZXI6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJDQ051bWJlclwiXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLkNDTnVtYmVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxsYWJlbD5FeHBpcmF0aW9uIERhdGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJleHBEYXRlXCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMuZXhwRGF0ZX1cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8bGFiZWw+Q1ZWOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiY3Z2XCJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMuY3Z2fVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxsYWJlbD5CaWxsaW5nIFppcCBDb2RlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiYmlsbGluZ1ppcFwiXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLmJpbGxpbmdaaXB9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb21wbGV0ZUZvcm1UaHJlZVwiXG4gICAgICAgICAgb25DbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuY29uc3QgRm9ybXNDb21wbGV0ZWQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+XG4gICAgICAgIFRoYW5rcyBmb3JtIGNvbXBsZXRpbmcgeW91ciB0cmFuc2FjdGlvbiFcbiAgICA8L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcbiJdfQ==