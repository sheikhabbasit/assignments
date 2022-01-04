import React, { Fragment, useState } from "react";
import FileSaver from "file-saver";
import Button from "../../components/Button/button";
import Navbar from "../../components/Header/navbar";
import Card from "../../components/Card/Card";
import { useFormik } from "formik";
import Loader from "react-loader-spinner";
import styles from "./dashboard.module.css";
import useTheme from "../../hooks/useTheme";

const Dashboard = (props) => {
  const darkTheme = useTheme();

  // ImagesArray stores the images that we receive from api
  const [imagesArray, setImagesArray] = useState([]);
  // When data is fetching, with the help of this state, we show a spinner
  const [dataLoading, setDataLoading] = useState(false);
  // Stores error in case we have it
  const [error, setError] = useState(false);

  // Formik
  const formik = useFormik({
    initialValues: {
      searchQuery: "",
    },
    onSubmit: (values, { resetForm }) => {
      // Gets the search query and sends it to the another function to fetch data
      fetchImages(values.searchQuery);
      resetForm();
    },
  });

  // Fetch images by search query
  const fetchImages = async (searchQuery) => {
    setDataLoading(true);
    // Splits the string to match the requirement of the website url
    const refinedSearchQuery = searchQuery.split(" ").join("+");
    // If the previous query returns error, this sets that to false
    setError(false);
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=8593165-d1e49b45c836abf703a7599af&q=${refinedSearchQuery}&image_type=photo`
      );
      const data = await response.json();
      // Sets the imagesArray to the array of images we received
      setImagesArray(data.hits);
      // Data finished loading, we set this to false to stop showing loader
      setDataLoading(false);
    } catch (err) {
      // Sets error state to true and shows error on screen
      setError(true);
    }
  };

  // Helps to download a file
  const downloadHandler = (url) => {
    const photoURL = url.split("/");
    const fileName = photoURL[photoURL.length - 1];
    FileSaver.saveAs(url, fileName);
  };

  return (
    <Fragment>
      <Navbar />
      <h1 className={darkTheme ? styles.dark_dashboard : ""}>Dashboard</h1>
      <Card>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <input
            id="searchQuery"
            name="searchQuery"
            onChange={formik.handleChange}
            value={formik.values.searchQuery}
            type="text"
            placeholder="Search for Images"
          />
          <button type="submit">Search</button>
        </form>
      </Card>
      {/* The container that renders images, errors and loader */}
      <Card>
        {/* Loader */}
        {dataLoading && (
          <Fragment>
            <Loader type="Puff" color="#1a374d" height={50} width={50} />
            <p className={darkTheme ? styles.dark_dashboard : ""}>Loading...</p>
          </Fragment>
        )}
        {/* Shows error */}
        {error && <p>Something went wrong!</p>}
        {/* Displays images */}
        <div className={styles.grid}>
          {imagesArray.map((image) => (
            // it is now a div instead of single image, holds img and btn
            <div className={styles.grid_item} key={image.id}>
              <a href={image.largeImageURL} target="_blank" rel="noreferrer">
                <img
                  className={styles.image_item}
                  src={image.previewURL}
                  alt="img"
                />
              </a>
              <Button onClick={() => downloadHandler(image.largeImageURL)}>
                Download
              </Button>
            </div>
          ))}
          {imagesArray.length === 0 ? (
            <h3
              className={`${styles.h3} ${
                darkTheme ? styles.dark_dashboard : ""
              }`}
            >
              No search results were found!
            </h3>
          ) : (
            ""
          )}
        </div>
      </Card>
    </Fragment>
  );
};

export default Dashboard;
