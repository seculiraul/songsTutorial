import { combineReducers } from "redux";

// Reducers
const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'adn', duration: '2:03'},
        {title: 'capitanu', duration: '3:21'}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') return action.payload;

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})