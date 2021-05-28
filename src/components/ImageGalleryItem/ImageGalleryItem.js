import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    largeImage: this.props.largeImageURL,
  };

  render() {
    const { webformatURL, tags, onClick, updateData } = this.props;
    const { largeImage } = this.state;

    return (
      <li
        className="ImageGalleryItem"
        onClick={() => {
          onClick();
          updateData(largeImage);
        }}
      >
        <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
