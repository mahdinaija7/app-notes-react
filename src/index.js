function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function addNote() {
  let notesCopy = [...this.state.notes];
  const id = makeid(10);
  notesCopy.push(
    <Note
      key={id}
      deleteNote={() => {
        console.log("Hello World");
        const temp = [];
        const tempState = [...this.state.notes];
        for (let i = 0; i < tempState.length; i++) {
          console.log(tempState[i].key);
          if (tempState[i].key != id) {
            temp.push(tempState[i]);
          }
        }
        this.setState({ notes: temp });
        console.log(notesCopy);
      }}
    />
  );
  this.setState({ notes: notesCopy });
}

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="grid-item note">
        <span className="delete">
          <i onClick={this.props.deleteNote} className="fas fa-times"></i>
        </span>
        <div
          className="item-title"
          contentEditable={true}
          suppressContentEditableWarning={true}
        ></div>
        <div
          className="item-body"
          contentEditable={true}
          suppressContentEditableWarning={true}
        ></div>
      </div>
    );
  }
}

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
    addNote = addNote.bind(this);
  }

  render() {
    return [this.state.notes];
  }
}

class App extends React.Component {
  render() {
    return [<Header key="header" />, <GridContainer key="grid" />];
  }
}

class GridContainer extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <Notes />
      </div>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  addNote() {
    addNote();
  }

  render() {
    return (
      <div className="header">
        <button className="add-note-button" onClick={this.addNote}>
          Add Note
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
