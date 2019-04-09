import Head from 'next/head'
import ScrollAnimation from 'react-animate-on-scroll'
import Section from "../components/section"
import Header from "../components/header"
import MiniSection from "../components/mini-section"
import Footer from '../components/footer'
import site from '../utils/config'
import { timeUtils } from '../utils/time'

class Hackathon extends React.Component {

    render() {

        const registration = timeUtils.todayIsLessThanDateCompare(site.dateRegistrationFinish)

        return (
            <React.Fragment>
                <Head>
                    <title>Geek for a Week</title>
                </Head>
                <Header/>
                <Section firstSection alignCenter title={<img className="logo" src={site.logo} />}
                    backgroundImage={`url('/static/img/section-background/background-banner-2.JPG')`}>
                    <h1>{site.dateEventDetail}</h1>
                </Section>
                <MiniSection title={registration ? 'Inscrições Abertas!' : 'Inscrições encerradas!'}>
                    <br/>
                    <div className="bt-central">
                        {/* <button className="large">Regulamento</button> */}
                        {
                            registration &&
                            <a href={site.hackathon.linkRegistration} target="_blank"><button className="large">Inscreva-se</button></a>
                        }
                    </div>
                    <div className="event-details">
                        { 
                            site.hackathon.details.map((detail, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <h2>{detail.title}</h2>
                                        <p>{detail.description}</p>
                                        <ul>
                                            {
                                                detail.topics.map((topic, index) => <li key={index}>{topic}</li>)
                                            }
                                        </ul>
                                        <br/><br/>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </MiniSection>
                <MiniSection title="Premiação" alignCenter>
                    <div className="awards">
                        {
                            site.hackathon.awards.map((award, index) => {
                                return (
                                    <div className="award" key={index}>
                                        <ScrollAnimation animateIn="tada" animateOnce delay={index * 500}>
                                            <img src="/static/img/icons/money.png" width="180"/>
                                            <h2>{award.title}</h2>
                                            <p>{award.award}</p>
                                        </ScrollAnimation>
                                    </div>
                                )
                            })
                        }
                    </div>
                </MiniSection>
                <MiniSection title="Jurados" alignCenter backgroundImage={`url('/static/img/section-background/judges.png')`}>
                    <div className="judges">
                        {
                            site.hackathon.judges.map((judges, index) => {
                                return (
                                    <div className="judge" key={index}>
                                        <ScrollAnimation animateIn="fadeInLeftBig" animateOnce delay={index * 200}>
                                            <img src={judges.img} />
                                            <h2>{judges.name}</h2>
                                        </ScrollAnimation>
                                    </div>
                                )
                            })
                        }
                    </div>
                </MiniSection>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Hackathon