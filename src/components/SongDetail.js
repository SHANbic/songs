import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (song) return (
    <div>
      <h3>Details for</h3>
      <p>
        title : {song.title}
        <br />
        duration : {song.duration}
      </p>
    </div>
  );
  else return <div>Select a song</div>
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
