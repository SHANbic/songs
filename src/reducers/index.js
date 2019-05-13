import { bindActionCreators } from "redux";

const songsReducer = () => {
  return [
    { title: "Blackened", duration: "7:02" },
    { title: "Satan Prayer", duration: "4:45" },
    { title: "Holy Wars", duration: "6:38" },
    { title: "Davidian", duration: "3:14" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG-SELECTED") {
    return action.payload;
  } else return selectedSong;
};
