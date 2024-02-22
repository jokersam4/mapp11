// import React, { useState } from 'react'
// import { useStateValue } from '../context/StateProvider';
// import { actionType } from '../context/reducer';

// const SongCard = ({ data, index }) => {
//     const [isDeleted, setIsDeleted] = useState(false);
//     const [alert, setAlert] = useState(false);
//     const [alertMsg, setAlertMsg] = useState(null);

//     const [{ allSongs, song, isSongPlaying }, dispatch] = useStateValue();


//     const addSongToContext = () => {
//         if (!isSongPlaying) {
//             dispatch({
//                 type: actionType.SET_SONG_PLAYING,
//                 isSongPlaying: true,
//             });
//         }
//         if (song !== index) {
//             dispatch({
//                 type: actionType.SET_SONG,
//                 song: index,
//             });
//         }
//     };}

// export default SongCard;