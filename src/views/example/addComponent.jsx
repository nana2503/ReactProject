import React from "react";

class addComponent extends React.Component {
  state = {
    name: "",
    author: "",
  };
  handleChangeSongName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleChangeAuthor = (event) => {
    this.setState({ author: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.name || !this.state.author) {
      alert("missing param");
    }
    this.props.addNewSong({
      id: Math.floor(Math.random() * 100),
      name: this.state.name,
      author: this.state.author,
    });
    this.setState({ name: "", author: "" });
  };
  render() {
    return (
      <form>
        <label htmlFor="Sname">Song name:</label>
        <br />
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => {
            this.handleChangeSongName(event);
          }}
        />
        <br />
        <label htmlFor="Author">Author:</label>
        <br />
        <input
          type="text"
          value={this.state.author}
          onChange={(event) => this.handleChangeAuthor(event)}
        />
        <br />
        <br />
        <input
          type="submit"
          onClick={(event) => {
            this.handleSubmit(event);
          }}
        />
      </form>
    );
  }
}

export default addComponent;
