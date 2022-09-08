import React from "react";
import { Image, View } from "react-native";

class ImageSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: props.images,
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      this.setState({
        currentImage: 0,
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 1500);
  }

  render() {
    return (
      <Image
        style={{
          height: 250,
          margin: 10,
        }}
        resizeMode="contain"
        source={{ uri: this.state.images[this.state.currentImage].trim() }}
      />
    );
  }
}

export default ImageSwitcher;
