import React from "react";
import { connect } from "react-redux";
import { songSelected } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.songSelected(song)}>Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui divided list" style={{ marginTop: "2rem" }}>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
 console.log(state.selectedSong)
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { songSelected }
)(SongList);
