import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
class UserDetail extends React.Component {
  state = {
    Ud: {},
  };
  async componentDidMount() {
    let id = this.props.match.params.id;
    let user = await axios.get(`https://reqres.in/api/users/${id}`);
    this.setState({
      Ud: user && user.data && user.data.data ? user.data.data : {},
    });
  }
  backToPrevious() {
    this.props.history.push("/user");
  }
  render() {
    let user = this.state.Ud;
    let isEmpty = Object.keys(user).length === 0;
    return (
      <>
        <div>User Detail with id: {}</div>
        <div className="detail">
          {isEmpty === false && (
            <>
              <div>
                Name: {user.first_name} {user.last_name}
              </div>
              <div>Email: {user.email}</div>
              <img src={user.avatar} alt="this is avatar" /> <br />
              <button
                onClick={() => {
                  this.backToPrevious();
                }}
              >
                back
              </button>
            </>
          )}
        </div>
      </>
    );
  }
}
export default withRouter(UserDetail);
