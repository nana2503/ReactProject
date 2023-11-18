import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import { connect } from "react-redux";

class HomePage extends React.Component {
  handleDeleteUser = (user) => {
    this.props.deleteUser(user);
  };
  handleCreateButton = () => {
    this.props.createUser();
  };
  render() {
    let listData = this.props.dataRedux;
    return (
      <>
        <div>
          Hello world from Home Page <br />
          {listData &&
            listData.length > 0 &&
            listData.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}{" "}
                  <button
                    onClick={() => {
                      this.handleDeleteUser(item);
                    }}
                  >
                    {" "}
                    X{" "}
                  </button>
                  <button
                    onClick={() => {
                      this.handleCreateButton();
                    }}
                  >
                    Create new user
                  </button>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (user) => dispatch({ type: "DELETE_USER", payload: user }),
    createUser: () => dispatch({ type: "CREATE_USER" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
