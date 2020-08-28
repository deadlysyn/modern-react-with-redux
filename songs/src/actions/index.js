// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    action: "SONG_SELECTED",
    payload: song,
  };
};
