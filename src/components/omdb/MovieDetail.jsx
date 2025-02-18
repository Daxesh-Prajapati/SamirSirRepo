import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css'; // Import a CSS file for styling

export const MovieDetail = () => {
  const { id } = useParams(); // Extract the movie ID from the URL parameters
  const [detail, setDetail] = useState({}); // State to hold movie details
  const [loading, setLoading] = useState(false); // State to manage loading state

  const getDetail = async () => {
    setLoading(true); // Set loading to true while fetching data
    try {
      const res = await axios.get(
        'http://www.omdbapi.com/?apikey=cc1be374&i=' + id, // Fetch movie details using the ID
      );
      console.log(res.data); // Log the response data
      setDetail(res.data); // Update the state with the fetched movie details
    } catch (error) {
      console.error('Error fetching movie details:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  // Fetch movie details when the component mounts
  React.useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <div className="movie-detail-container">
      {loading ? (
        <h2>Loading...</h2> // Show loading message while fetching data
      ) : (
        <>
          <h1>
            {detail.Title} ({detail.Year})
          </h1>
          <div className="movie-detail">
            <img
              src={detail.Poster}
              alt={detail.Title}
              className="movie-poster"
            />
            <div className="movie-info">
              <h2>Details</h2>
              <p>
                <strong>Genre:</strong> {detail.Genre}
              </p>
              <p>
                <strong>Director:</strong> {detail.Director}
              </p>
              <p>
                <strong>Actors:</strong> {detail.Actors}
              </p>
              <p>
                <strong>Plot:</strong> {detail.Plot}
              </p>
              <p>
                <strong>Country:</strong> {detail.Country}
              </p>
              <p>
                <strong>Rating:</strong> {detail.imdbRating} / 10
              </p>
              <p>
                <strong>Runtime:</strong> {detail.Runtime}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
