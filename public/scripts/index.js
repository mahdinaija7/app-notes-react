"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function _addNote() {
  var _this = this;

  var notesCopy = [].concat(_toConsumableArray(this.state.notes));
  var id = makeid(10);
  notesCopy.push(React.createElement(Note, {
    key: id,
    deleteNote: function deleteNote() {
      console.log("Hello World");
      var temp = [];
      var tempState = [].concat(_toConsumableArray(_this.state.notes));
      for (var i = 0; i < tempState.length; i++) {
        console.log(tempState[i].key);
        if (tempState[i].key != id) {
          temp.push(tempState[i]);
        }
      }
      _this.setState({ notes: temp });
      console.log(notesCopy);
    }
  }));
  this.setState({ notes: notesCopy });
}

var Note = function (_React$Component) {
  _inherits(Note, _React$Component);

  function Note(props) {
    _classCallCheck(this, Note);

    var _this2 = _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).call(this, props));

    _this2.props = props;
    return _this2;
  }

  _createClass(Note, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "grid-item note" },
        React.createElement(
          "span",
          { className: "delete" },
          React.createElement("i", { onClick: this.props.deleteNote, className: "fas fa-times" })
        ),
        React.createElement("div", {
          className: "item-title",
          contentEditable: true,
          suppressContentEditableWarning: true
        }),
        React.createElement("div", {
          className: "item-body",
          contentEditable: true,
          suppressContentEditableWarning: true
        })
      );
    }
  }]);

  return Note;
}(React.Component);

var Notes = function (_React$Component2) {
  _inherits(Notes, _React$Component2);

  function Notes(props) {
    _classCallCheck(this, Notes);

    var _this3 = _possibleConstructorReturn(this, (Notes.__proto__ || Object.getPrototypeOf(Notes)).call(this, props));

    _this3.state = { notes: [] };
    _addNote = _addNote.bind(_this3);
    return _this3;
  }

  _createClass(Notes, [{
    key: "render",
    value: function render() {
      return [this.state.notes];
    }
  }]);

  return Notes;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return [React.createElement(Header, { key: "header" }), React.createElement(GridContainer, { key: "grid" })];
    }
  }]);

  return App;
}(React.Component);

var GridContainer = function (_React$Component4) {
  _inherits(GridContainer, _React$Component4);

  function GridContainer() {
    _classCallCheck(this, GridContainer);

    return _possibleConstructorReturn(this, (GridContainer.__proto__ || Object.getPrototypeOf(GridContainer)).apply(this, arguments));
  }

  _createClass(GridContainer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "grid-container" },
        React.createElement(Notes, null)
      );
    }
  }]);

  return GridContainer;
}(React.Component);

var Header = function (_React$Component5) {
  _inherits(Header, _React$Component5);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
  }

  _createClass(Header, [{
    key: "addNote",
    value: function addNote() {
      _addNote();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "header" },
        React.createElement(
          "button",
          { className: "add-note-button", onClick: this.addNote },
          "Add Note"
        )
      );
    }
  }]);

  return Header;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
