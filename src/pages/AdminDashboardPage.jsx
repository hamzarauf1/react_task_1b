import React from "react";
import React, { useState, useEffect } from "react";
import SnackBar from "../components/SnackBar";

const AdminDashboardPage = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://reacttask.mkdlabs.com/v1/api/rest/video/PAGINATE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-project": "cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw==",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          payload: {},
          page,
          limit: 10,
        }),
      });
      const data = await response.json();
      if (!data.error) {
        setVideos(data.list);
      }
    };
    fetchData();
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <div className="w-full flex justify-center items-center text-7xl h-screen text-gray-700 ">
      <div>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <h3>{video.title}</h3>
            <img src={video.photo} alt={video.title} />
            <p>Uploaded by: {video.username}</p>
            <p>Likes: {video.like}</p>
          </li>
        ))}
      </ul>
      <div>
        {currentPage > 1 && (
          <button onClick={handlePrevPage}>Prev</button>
        )}
        {currentPage < totalPages && (
          <button onClick={handleNextPage}>Next</button>
        )}
      </div>    </div>
      </div>
      <SnackBar/>
    </>
  );
};

export default AdminDashboardPage;
