import React, { useEffect, useState } from "react";
import { getAllSongs, allAlbums, getAllAlbums, allArtists, getAllArtist } from "../api";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { SongCard } from "./DashboardSongs";
import Filter from "./Filter";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";

const Songs = () => {
    const [
      {
        searchTerm,
        isSongPlaying,
        song,
        allSongs,
        artistFilter,
        filterTerm,
        albumFilter,
        languageFilter,
        allAlbums,
        allArtists
  
      },
      dispatch,
    ] = useStateValue();
    useEffect(() => {
      if (!allAlbums) {
        getAllAlbums().then((data) => {
          dispatch({
            type: actionType.SET_ALL_ALBUMS,
            allAlbums: data.album
          });
        });
      }
    }, []);
    useEffect(() => {
      if (!allArtists) {
        getAllArtist().then((data) => {
          dispatch({
            type: actionType.SET_ALL_ARTISTS,
            allArtists: data.artist
          });
        });
      }
    }, []);
  
    const [filteredSongs, setFilteredSongs] = useState(null);
  
    useEffect(() => {
      if (!allSongs) {
        getAllSongs().then((data) => {
          dispatch({
            type: actionType.SET_ALL_SONGS,
            allSongs: data.data,
          });
        });
      }
    }, []);
  
   
  
    useEffect(() => {
      // ... (other useEffect blocks)
  
      let filtered;
  
      if (albumFilter) {
        filtered = allSongs?.filter((data) => data.album === albumFilter);
      } else if (filterTerm) {
        filtered = allSongs?.filter((data) => data.category === filterTerm);
      }
  
      if (filtered) {
        setFilteredSongs(filtered);
      } else {
        setFilteredSongs(null);
      }
    }, [albumFilter, filterTerm, allSongs]);
  
 
  
    
  
    return (
      <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
  <div className="fixed w-full bg-white py-4 shadow-md z-10 top-0 ">
    <Header />
  </div>

  {/* Add margin-top to create space between the header and search bar */}
  {/* <div className="w-full mt-40">
    <SearchBar />
  </div> */}

  {
    <p className="my-4 text-base text-textColor mt-40">
      {/* Searched for : */}
      <span className="text-xl text-cartBg font-semibold">
        {searchTerm}
      </span>
    </p>
  }
 <Filter setFilteredSongs={setFilteredSongs} />
  <div className="w-full h-auto flex items-center justify-evenly gap-4 flex-wrap p-4">
    <HomeSongContainer musics={filteredSongs ? filteredSongs : allSongs} />
  </div>
</div>

    );
  };
  
  export const HomeSongContainer = ({ musics }) => {
    const [{ isSongPlaying, song , allSongs}, dispatch] = useStateValue();
  
    const addSongToContext = (index) => {
      if (!isSongPlaying) {
        dispatch({
          type: actionType.SET_ISSONG_PLAYING,
          isSongPlaying: true,
        });
      }
  
      // Update the song index based on the filtered songs if they exist.
      if (musics && musics.length > 0) {
        const songIndex = allSongs.findIndex((song) => song._id === musics[index]._id);
        if (songIndex !== -1) {
          dispatch({
            type: actionType.SET_SONG_INDEX,
            songIndex,
          });
        }
      }
    };
  
    return (
      <>
        {musics?.map((data, index) => (
          <motion.div
            key={data._id}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0  }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative w-40 min-w-210 px-2 py-4 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
            onClick={() => addSongToContext(index)}
          >
            <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={data.imageURL}
                alt=""
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
  
            <p className="text-base text-headingColor font-semibold my-2">
              {data.name.length > 25 ? `${data.name.slice(0, 25)}..` : data.name}
              <span className="block text-sm text-gray-400 my-1">
                {data.artist}
              </span>
            </p>
          </motion.div>
        ))}
      </>
    );
  };
  


export default Songs