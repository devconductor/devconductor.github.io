import ImageGallery from 'react-image-gallery'
import site from '../utils/config'

class ImageGridList extends React.Component {

    getImages = () => {
      return site.enterpriseGallery.tileData.map(tile => {
        return {
          original: tile.img,
          thumbnail: tile.img
        }
      })
    }

    render() {
        return (
            <ImageGallery items={this.getImages()} thumbnailPosition="left" additionalClass="gallery-custom"/>
        )
    }

  
}

export default ImageGridList