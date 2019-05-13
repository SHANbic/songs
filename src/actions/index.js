export const songSelected = song => {   // action creator
  return {                              // action returned
    type: "SONG_SELECTED",
    payload: song
  };
};
