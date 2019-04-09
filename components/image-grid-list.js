import { withStyles, GridList, GridListTile } from '@material-ui/core'
import ImageGallery from 'react-image-gallery'
import site from '../utils/config'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
      width: '90%',
      height: '95vh'
    },
})

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
        const { classes } = this.props

        return (
            // <div className={classes.root}>
            //   <GridList cellHeight={500} className={classes.gridList} cols={2}>
            //     {site.enterpriseGallery.tileData.map(tile => (
            //       <GridListTile key={tile.img} cols={tile.cols || 1}>
            //             <img src={tile.img} alt={tile.title}/>
            //       </GridListTile>
            //     ))}
            //   </GridList>
            // </div>
            <ImageGallery items={this.getImages()} thumbnailPosition="left" additionalClass="gallery-custom" autoPlay/>

        )
    }

  
}

export default withStyles(styles)(ImageGridList);