import React from "react";
import { toast } from "react-toastify";

class AddItem extends React.Component {
  state = {
    title: "",
  };

  handleInputChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleAddButton = () => {
    if (!this.state.title) {
      toast.error("Please write a thing u want to do today");
      return;
    }
    this.props.handleAddItemClick({
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
    });
    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <>
        <div className="addTodos">
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => {
              this.handleInputChange(event);
            }}
          />
          <button type="button" onClick={() => this.handleAddButton()}>
            Add
          </button>
        </div>
      </>
    );
  }
}

export default AddItem;
