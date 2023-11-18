import React from "react";

class childComponent extends React.Component {
  state = {
    conditional: false,
  };
  handleShowHide = () => {
    this.setState({
      conditional: !this.state.conditional,
    });
  };
  handleDeleteButtonClick = (item) => {
    this.props.deleteSong(item);
  };
  render() {
    let arrSongs = this.props.arrSongs;
    return (
      <>
        {this.state.conditional === false ? (
          <div>
            <button
              onClick={() => {
                this.handleShowHide();
              }}
            >
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="songList">
              {arrSongs.map((item) => {
                return (
                  <div key={item.id}>
                    {item.name} - {item.author} - <></>
                    <button
                      onClick={() => {
                        this.handleDeleteButtonClick(item);
                      }}
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                onClick={() => {
                  this.handleShowHide();
                }}
              >
                Hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default childComponent;
