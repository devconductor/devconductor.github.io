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
                    <title>Geek for a Week</title>
                </Head>
                <Header />
                <Section title={<img className="logo" src="/static/img/logos/logo_horizontal_white.png" />}
                    backgroundImage={`url('/static/img/section-background/background-banner.JPG')`}
                    backdrop alignCenter firstSection>
                    <Calendar dateStartEvent="04/22/2019 08:00:00" dateFinishEvent="04/28/2019 12:00:00"/>
                    <br/>
                    <button className="large" onClick={() => { Router.push('/hackathon') }}>Veja mais!</button>
                </Section>
                <MiniSection title="Sobre o Geek for a week"> 
                    <div className={classes.root}>
                        <br/><br/>
                        <Grid container spacing={16} className="about-geek">
                            <Grid item sm={4} xs={12}>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce>
                                    <label>Hackathon</label>
                                    <Avatar color="3e3e3e" className={classes.bigAvatar} src="/static/img/section-about/hackathon.jpg"/>    
                                    <p>
                                        Uma semana competindo pela chance de mudar completamente sua carreira. Não vai faltar networking, comida à vontade e diversão! Traga seu time!
                                    </p>
                                </ScrollAnimation>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce delay={500}>
                                    <label>Equipes mistas</label>
                                    <Avatar color="3e3e3e" className={classes.bigAvatar} src="/static/img/section-about/workshop.jpg"/>    
                                    <p>
                                        As equipes devem ser montadas com integrantes de todas unidades e setores.
                                    </p>
                                </ScrollAnimation>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce delay={1000}>
                                    <label>Lanches</label>
                                    <Avatar color="3e3e3e" className={classes.bigAvatar} src="/static/img/section-about/lanches.jpg"/>    
                                    <p>
                                        Para ser possível "dar o gás" durante o evento, haverá vários lanches e energéticos disponivéis para você e sua equipe.
                                    </p>
                                </ScrollAnimation>
                            </Grid>
                        </Grid>
                    </div>
                </MiniSection>
                <MiniSection backgroundImage={`url('/static/img/section-background/geeks.png')`} alignCenter>
                        <Grid container spacing={8} alignItems="center" justify="space-evenly">
                            <div className="info-metas">
                                <ScrollAnimation animateIn="slideInUp" animateOnce afterAnimatedIn={this.enableAnimatedNumbers}>
                                    <div className="number"><AnimatedNumber number={75} startAnimation={this.state.canAnimatedNumbers}/>+</div>
                                    <div className="unit">milhões</div>
                                    <div className="description">de cartões cadastrados</div>
                                </ScrollAnimation>
                            </div>
                            <div className="info-metas">
                                <ScrollAnimation animateIn="slideInUp" animateOnce>
                                    <div className="number"><AnimatedNumber number={18} startAnimation={this.state.canAnimatedNumbers}/>+</div>
                                    <div className="unit">milhões</div>
                                    <div className="description">de usuários ativos</div>
                                </ScrollAnimation>
                            </div>
                            <div className="info-metas">
                                <ScrollAnimation animateIn="slideInUp" animateOnce>
                                    <div className="number"><AnimatedNumber number={800} fast startAnimation={this.state.canAnimatedNumbers}/>+</div>
                                    <div className="unit">milhões</div>
                                    <div className="description">de transação por ano</div>
                                </ScrollAnimation>
                            </div>
                            <div className="info-metas">
                                <ScrollAnimation animateIn="slideInUp" animateOnce>
                                    <div className="number"><AnimatedNumber number={60} startAnimation={this.state.canAnimatedNumbers}/>+</div>
                                    <div className="unit">bilhões de reais</div>
                                    <div className="description">transacionados por ano</div>
                                </ScrollAnimation>
                            </div>
                            <div className="info-metas">
                                <ScrollAnimation animateIn="slideInUp" animateOnce>
                                    <div className="number"><AnimatedNumber number={600} fast startAnimation={this.state.canAnimatedNumbers}/>+</div>
                                    <div className="unit">funcionários</div>
                                    <div className="description">em três escritórios</div>
                                </ScrollAnimation>
                            </div>
                        </Grid>
                </MiniSection>
                <Section title="Condutor Tecnologia" alignCenter>
                    <br/>
                    <ImageGridList />
                </Section>
                <MiniSection alignCenter backgroundImage={`url('/static/img/section-background/noc.png')`}>
                    <ScrollAnimation animateIn="pulse" duration={2}><img src="/static/img/icons/twitter-white.png" alt="twitter"/><br/></ScrollAnimation>
                    <h1 className="follow-twitter">Siga a hashtag <a href="https://twitter.com/search?q=%23GeekForAWeek" target="_blank">
                            <AnimatedText text="#GeekForAWeek" className="text-styled"/>
                        </a>
                    </h1>
                </MiniSection>
                <Footer />
            </React.Fragment>
        )
    }
} 


export default withStyles(styles)(Index)