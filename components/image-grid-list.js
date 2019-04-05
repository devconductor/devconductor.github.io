import { withStyles, GridList, GridListTile } from '@material-ui/core'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
      width: '90%',
      height: '85vh'
    },
})

const tileData = [
    {
        img: '/static/img/venue/venue_5.jpg',
        cols: 1,
    },
    {
        img: '/static/img/venue/venue_9.jpeg',
        cols: 1,
    },
    {
        img: '/static/img/venue/venue_4.jpg',
        cols: 1,
    },
    {
        img: '/static/img/venue/venue_10.jpg',
        cols: 1,
    },
    {
        img: '/static/img/venue/venue_12.jpg',
        cols: 1,
    },
    {
        img: '/static/img/venue/venue_2.jpg',
        cols: 1,
    },
    {
        img: '/static/img/venue/venue_7.jpg',
        cols: 1,
    },
    {
        img: '/static/img/venue/venue_11.jpg',
        cols: 1,
    },
    {
        img: '/static/img/venue/venue_3.jpg',
        cols: 1,
    },
    {
        img: '/static/img/venue/venue_8.jpg',
        cols: 1,
    },
    {
        img: '/static/img/venue/venue_6.jpg',
        cols: 1,
    },
    {
        img: '/static/img/venue/venue_1.jpg',
        cols: 1,
    }

]

class ImageGridList extends React.Component {

    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
              <GridList cellHeight={300} className={classes.gridList} cols={3}>
                {tileData.map(tile => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title}/>
                  </GridListTile>
                ))}
              </GridList>
            </div>
        )
    }

  
}

export default withStyles(styles)(ImageGridList);