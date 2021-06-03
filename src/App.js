import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';
import Loader from 'react-loader-spinner';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import Container from './components/Container';
import fetchImages from './services/apiService';

class App extends Component {
  state = {
    isLoading: false,
    isOpen: false,
    currentPage: 1,
    seachQuery: '',
    images: [],
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.seachQuery !== this.state.seachQuery) {
      this.fetchData();
    }
    if (prevState.currentPage !== this.state.currentPage) {
      this.scrollToBottom();
    }
  }

  onChangeQuery = query => {
    this.setState({ seachQuery: query, currentPage: 1, images: [] });
  };

  fetchData = () => {
    const { seachQuery, currentPage } = this.state;

    this.setState({ isLoading: true });
    fetchImages(seachQuery, currentPage)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  updateData = largeImage => {
    this.setState({ largeImage: largeImage });
  };

  scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: 'endView',
    });
  };

  render() {
    const { images, largeImage } = this.state;

    return (
      <div className="App">
        <SearchBar onSubmit={this.onChangeQuery} />
        <ImageGallery
          images={images}
          onClick={this.toggleModal}
          updateData={this.updateData}
        />
        <Container>
          {this.state.isLoading && (
            <Loader
              type="ThreeDots"
              color="#3f51b5"
              height={100}
              width={100}
              timeout={3000}
            />
          )}
        </Container>
        {images.length > 0 && <Button onClick={this.fetchData} id="endView" />}

        {this.state.isOpen && (
          <Modal onClose={this.toggleModal} largeImage={largeImage} />
        )}
      </div>
    );
  }
}

export default App;
