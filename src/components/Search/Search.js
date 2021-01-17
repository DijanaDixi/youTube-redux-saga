import React, { useEffect, useState} from "react";
import {useDispatch} from "react-redux"
import PropTypes from "prop-types";
import {fetchVideos} from "../../redux/youTube/youTubeActionCreactors"
import styles from "../Search/Search.module.css";

function Search() {
  // dispatch fetchData
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(fetchVideos())
  }, []);

  const getValue = (e) => {
    e.preventDefault();
    const value = e.target.value;
     dispatch(fetchVideos(value))
  };

  return (
    <>
      <div className={`row ${styles.logo}`}>
        <div className={styles.holder}>
          <img
            className={styles.imgLogo}
            src="https://ucarecdn.com/3360c17f-9a61-402b-9529-c0d514c75ed5/yt_logo_rgb_light.png"
            alt=""
          />
        </div>
        <div className={styles.input}>
          <input
            className="form-control mt-2 h-25"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={getValue}
          />
        </div>
      </div>
    </>
  );
}

Search.propTypes = {
  handleValue: PropTypes.func,
};

// const mapStateToProps = (state) => {
//   return {
//     videos: state.videos,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onRequest: () => dispatch({ type: "FETCH_VIDEOS_SUCCESS" }),
//     // onChangeValue: () => dispatch({ type: "GET_VALUE" }),
//   };
// };
export default Search;
