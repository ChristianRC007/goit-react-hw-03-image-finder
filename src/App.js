import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Container from './components/Container/Container';
import fetchImages from './services/apiService';

class App extends Component {
  state = {
    isLoading: false,
    isOpen: false,
    currentPage: 1,
    seachQuery: '',
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.seachQuery !== this.state.seachQuery) {
      this.fetchData();
    }
  }

  onChangeQuery = query => {
    this.setState({ seachQuery: query, currentPage: 1, images: [] });
  };

  fetchData = () => {
    this.setState({ isLoading: true });
    fetchImages(this.state.seachQuery)
      .then(response => {
        this.setState({
          images: response.hits,
        });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onChangeQuery} />
        <ImageGallery images={this.state.images} />
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
        {this.state.images.length > 0 && <Button />}

        {this.state.isOpen && <Modal />}
      </div>
    );
  }
}

export default App;
