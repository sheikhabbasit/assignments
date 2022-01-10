import React, { Fragment, useState } from "react";
import FileSaver from "file-saver";
import Button from "../../../components/Button/button";
import Navbar from "../../../components/Header/navbar";
import Card from "../../../components/Card/Card";
import { useFormik } from "formik";
import Loader from "react-loader-spinner";
import styles from "./dashboard.module.css";
import useTheme from "../../../hooks/useTheme";
import Transition from "react-transition-group/Transition";
import Modal from "../../../components/Modal/Modal";

const Dashboard = (props) => {
  const darkTheme = useTheme();
  const [imagesArray, setImagesArray] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  // State to monitor hover over image to display button
  const [imageHovered, setImageHovered] = useState({ state: false, id: "" });
  // Decides if we should show modal
  const [showModal, setShowModal] = useState({ state: false, url: "" });

  const formik = useFormik({
    initialValues: {
      searchQuery: "",
    },
    onSubmit: (values, { resetForm }) => {
      fetchImages(values.searchQuery);
      resetForm();
    },
  });

  const fetchImages = async (searchQuery) => {
    setDataLoading(true);
    const refinedSearchQuery = searchQuery.split(" ").join("+");
    setError(false);
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=8593165-d1e49b45c836abf703a7599af&q=${refinedSearchQuery}&image_type=photo`
      );
      const data = await response.json();
      setImagesArray(data.hits);
      setDataLoading(false);
    } catch (err) {
      setError(true);
    }
  };

  // Helps to download a file
  const downloadHandler = (url) => {
    const slicedNumber = url.lastIndexOf("/");
    const fileName = url.slice(slicedNumber + 1);
    FileSaver.saveAs(url, fileName);
  };

  // Handles hover state on image to display button
  const showButtonHandler = (state, id) => {
    if (state) setImageHovered({ state: true, id });
    if (!state) setImageHovered({ state: false, id: "" });
  };

  const previewModalHandler = (url) => {
    setShowModal({ state: true, url });
  };

  const hideModalHandler = () => {
    setShowModal({ state: false, url: "" });
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

        {error && <p>Something went wrong!</p>}

        <div className={styles.grid}>
          {imagesArray.map((image) => (
            // It is now a div instead of single image, holds img and btn
            <div className={styles.grid_item} key={image.id}>
              <div className={styles.inner_wrapper}>
                <img
                  className={styles.image_item}
                  src={image.previewURL}
                  alt="img"
                  onMouseEnter={() => showButtonHandler(true, image.id)}
                  onMouseLeave={() => showButtonHandler(false, image.id)}
                />

                {/* Component from React-Transition-Group allows us to use custom css */}
                <Transition
                  // "In" below takes the conditions in which case the button shows
                  in={imageHovered.state && imageHovered.id === image.id}
                  timeout={{ enter: 300, exit: 100 }}
                  mountOnEnter
                  unmountOnExit
                >
                  <button
                    className={styles.preview_button}
                    onMouseEnter={() => showButtonHandler(true, image.id)}
                    onClick={() => previewModalHandler(image.largeImageURL)}
                  >
                    Preview
                  </button>
                </Transition>
              </div>
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

      {/* Display Modal preview of the image in case the state is set to true */}
      {showModal.state && (
        <Modal url={showModal.url} onClick={hideModalHandler} />
      )}
    </Fragment>
  );
};

export default Dashboard;
