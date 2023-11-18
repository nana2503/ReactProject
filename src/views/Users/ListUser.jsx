import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom";

class ListUser extends React.Component {
  state = {
    DataList: [],
  };
  async componentDidMount() {
    let user = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      DataList: user && user.data && user.data.data ? user.data.data : [],
    });
  }
  handleOnClickUserDetail(user) {
    this.props.history.push(`/user/${user.id}`);
  }
  render() {
    let list = this.state.DataList;
    return (
      <>
        <div className="title">This is User List from reqres.in API</div>
        <div className="table">
          {list &&
            list.length > 0 &&
            list.map((item, index) => {
              return (
                <div
                  className="item"
                  key={item.id}
                  onClick={() => {
                    this.handleOnClickUserDetail(item);
                  }}
                >
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
export default withRouter(ListUser);
