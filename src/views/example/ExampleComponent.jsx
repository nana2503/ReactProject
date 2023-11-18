import React from "react";
import ChildComponent from "./childComponent";
import AddComponent from "./addComponent";
class MyComponent extends React.Component {
  state = {
    arrSongs: [
      { id: "T1", name: "Lost", author: "obito" },
      { id: "T2", name: "Devil's love", author: "obito & Seachain" },
      { id: "T3", name: "Đường về nhà", author: "Đen" },
    ],
  };

  addNewSong = (niceSong) => {
    let currentSong = this.state.arrSongs;
    currentSong.push(niceSong);
    this.setState({
      arrSongs: currentSong,
    });
  };

  deleteSong = (niceSong) => {
    let currentSong = this.state.arrSongs;
    currentSong = currentSong.filter((item) => item.id !== niceSong.id);
    this.setState({ arrSongs: currentSong });
  };

  render() {
    return (
      <>
        <AddComponent addNewSong={this.addNewSong} />
        <ChildComponent
          arrSongs={this.state.arrSongs}
          deleteSong={this.deleteSong}
        />
      </>
    );
  }
}
export default MyComponent;
