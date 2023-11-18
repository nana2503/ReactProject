import React from "react";
import "./Todos.scss";
import AddItem from "./AddItem.jsx";
import { toast } from "react-toastify";
class listTodos extends React.Component {
  state = {
    list: [
      { id: "1", title: "I do something today" },
      { id: "2", title: "Corsair" },
      { id: "3", title: "Logitech" },
    ],
    edit: {},
  };
  handleAddItemClick = (item) => {
    this.setState({
      list: [...this.state.list, item],
    });
    toast.success("Added");
  };
  handleDeleteButtonClick = (delItem) => {
    // give a current array of list
    let currentList = this.state.list;
    // use filter method to remove chosen item from list and store it in currentList
    currentList = currentList.filter((item) => item.id !== delItem.id);
    // update state with currentList which just filter
    this.setState({ list: currentList });
    // show notification that list has changed
    toast.success("Item deleted");
  };
  handleEditButtonClick = (item) => {
    let { edit, list } = this.state;
    let isEmpty = Object.keys(edit).length === 0;
    if (isEmpty === false && edit.id === item.id) {
      let listTodos = [...list];
      let objIndex = listTodos.findIndex((i) => i.id === item.id);
      listTodos[objIndex].title = edit.title;
      this.setState({ list: listTodos, edit: {} });
      // set edit object to empty aigain to react show edit button below
      toast.success("Updated list successfully");
      return;
    }
    this.setState({ edit: item });
  };
  handleEditOnchange = (event) => {
    let editTodo = { ...this.state.edit };
    editTodo.title = event.target.value;
    this.setState({ edit: editTodo });
  };
  render() {
    let { list, edit } = this.state;
    let isEmpty = Object.keys(edit).length === 0;
    return (
      <>
        <div className="container">
          <h1>This is Todos List</h1>
          {/* Start add item to list */}
          <AddItem handleAddItemClick={this.handleAddItemClick} />
          {/* End add item to list */}

          {/* Start render list */}
          <div className="dataList">
            {list.map((item, index) => {
              return (
                <div className="item" key={item.id}>
                  {isEmpty === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {edit.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            type="text"
                            value={edit.title}
                            onChange={(event) => {
                              this.handleEditOnchange(event);
                            }}
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <div className="button">
                    <button
                      type="button"
                      onClick={() => this.handleEditButtonClick(item)}
                    >
                      {isEmpty === false && edit.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        this.handleDeleteButtonClick(item);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {/* End render list */}
        </div>
      </>
    );
  }
}

export default listTodos;
