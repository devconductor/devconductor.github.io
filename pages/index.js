import Head from 'next/head'
import Router from 'next/router'
import ScrollAnimation from 'react-animate-on-scroll'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Avatar } from '@material-ui/core'
import Section from '../components/section'
import MiniSection from './../components/mini-section'
import Calendar from '../components/calendar'
import Header from './../components/header'
import ImageGridList from '../components/image-grid-list'
import Footer from '../components/footer'
import AnimatedText from '../components/animated-text'
import AnimatedNumber from './../components/animated-number'

import site from '../utils/config'

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: 10,
      paddingBottom: 30
    },
    bigAvatar: {
        margin: '20px auto !important',
        width: 150,
        height: 150,
    }
  });
  

class Index extends React.Component {

    state = {
        canAnimatedNumbers: false
    }

    enableAnimatedNumbers = () => {
        this.setState({ ...this.state, canAnimatedNumbers: true })
    }

    render() {

        const { classes } = this.props

        return (
            <React.Fragment>
                <Head>
                    <title>{site.title}</title>
                </Head>
                <Header />
                <Section title={<img className="logo" src={site.logo} />}
                    backgroundImage={`url('/static/img/section-background/background-banner.JPG')`}
                    backdrop alignCenter firstSection>
                    <Calendar dateStartEvent={site.dateEventStart} dateFinishEvent={site.dateEventFinish}/>
                    <br/>
                    <button className="large" onClick={() => { Router.push('/hackathon') }}>Veja mais!</button>
                </Section>
                <MiniSection title={site.about.title}> 
                    <div className={classes.root}>
                        <br/><br/>
                        <Grid container spacing={16} className="about-geek">
                            {
                                site.about.features.map((feature, index) => {
                                    return <Grid item sm={4} xs={12} key={index}>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={index * 200}>
                                            <label>{feature.title}</label>
                                            <Avatar color="3e3e3e" className={classes.bigAvatar} src={feature.img}/>    
                                            <p>
                                                {feature.description}
                                            </p>
                                        </ScrollAnimation>
                                    </Grid>        
                                })
                            }
                        </Grid>
                    </div>
                </MiniSection>
                <MiniSection backgroundImage={`url('/static/img/section-background/geeks.png')`} alignCenter>
                    <Grid container spacing={8} alignItems="center" justify="space-evenly">
                        {site.about.numbersEnterprise.map((numberEnterprise, index) => {
                            return (
                                <div className="info-metas" key={index}>
                                    <ScrollAnimation animateIn="slideInUp" animateOnce afterAnimatedIn={index === 0 && this.enableAnimatedNumbers}>
                                        <div className="number"><AnimatedNumber number={numberEnterprise.number} startAnimation={this.state.canAnimatedNumbers}/>+</div>
                                        <div className="unit">{numberEnterprise.unit}</div>
                                        <div className="description">{numberEnterprise.description}</div>
                                    </ScrollAnimation>
                                </div>
                            )    
                        })}
                    </Grid>
                </MiniSection>
                <Section alignCenter>
                    <br/>
                    <ImageGridList />
                </Section>
                <MiniSection alignCenter backgroundImage={`url('/static/img/section-background/noc.png')`}>
                    <ScrollAnimation animateIn="pulse" duration={2}><img src="/static/img/icons/twitter-white.png" alt="twitter"/><br/></ScrollAnimation>
                    <h1 className="follow-twitter">Siga a hashtag <a href="https://twitter.com/search?q=%23GeekForAWeek" target="_blank">
                            <AnimatedText text={site.hashtag} className="text-styled"/>
                        </a>
                    </h1>
                </MiniSection>
                <Footer />
            </React.Fragment>
        )
    }
} 


export default withStyles(styles)(Index)