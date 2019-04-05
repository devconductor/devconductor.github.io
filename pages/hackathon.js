import Head from 'next/head'
import ScrollAnimation from 'react-animate-on-scroll'
import Section from "../components/section"
import Header from "../components/header"
import MiniSection from "../components/mini-section"
import Footer from '../components/footer'
import { timeUtils } from '../utils/time'

class Hackathon extends React.Component {

    render() {

        const inscricoesAbertas = timeUtils.compareDateWithToday('04/22/2019 08:00:00')

        return (
            <React.Fragment>
                <Head>
                    <title>Geek for a Week</title>
                </Head>
                <Header/>
                <Section firstSection alignCenter title={<img className="logo" src="/static/img/logos/logo_horizontal_white.png" />}
                    backgroundImage={`url('/static/img/section-background/background-banner-2.JPG')`}>
                    <h1>De 22 a 28 de Abril!</h1>
                </Section>
                <MiniSection title={inscricoesAbertas ? 'Inscrições Abertas!' : 'Inscrições encerradas!'}>
                    <br/>
                    <div className="bt-central">
                        {/* <button className="large">Regulamento</button> */}
                        {
                            inscricoesAbertas &&
                            <a href="https://pt.surveymonkey.com/r/geekforaweek" target="_blank"><button className="large">Inscreva-se</button></a>
                        }
                    </div>
                    <div className="event-details">
                        <h2>Como saber se você está “nos trinques” para o Hackaton?</h2>
                        <p>Isso é fácil! Se você responder afirmativamente às perguntas abaixo, cara... é só se inscrever!</p>
                        <ul>
                            <li>Gosta bastante de programar?</li>
                            <li>Gosta de desafios?</li>
                            <li>Gosta de trabalhar em equipe?</li>
                            <li>Domina alguma linguagem de programação?</li>
                            <li>Quer conhecer uma empresa de tecnologia com uma cultura transformadora?</li>
                            <li>Tem uma máquina pessoal pronta, com tudo que você precisa e gosta de usar, para que você consiga dar o seu show de desenvolvimento de software?</li>
                        </ul>
                        <br/><br/>
                        <h2>O que você precisa fazer para se inscrever?</h2>
                        <p>Não se aperreie não que a gente explica!</p>
                        <ul>
                            <li>Monte sua equipe ou “euquipe”!</li>
                            <li>Você pode participar individualmente ou em equipe. Se a escolha for em equipe, essa deve 
                                ser composta por, no máximo, 3 pessoas e deve ser montada antes do evento e será formalizada no momento da inscrição.</li>
                            <li>Inscreva-se no evento! Se for em uma equipe, cada um deve realizar sua inscrição.</li>
                        </ul>
                        <br/><br/>
                        <h2>Eita! E como será o Hackathon?</h2>
                        <p>Ocorrerá no dia 22 a 28 de abril de 2019!</p>
                        <ul>
                            <li>Um tema será lançado e as equipes inscritas deverão formular uma ideia e, literalmente, desenvolvê-la.</li>
                            <li>A tecnologia utilizada? Vocês escolhem!</li>
                            <li>Vocês poderão desenvolver um produto desktop, mobile ou web... vocês escolhem!</li>
                            <li>Ao final do evento, a equipe deverá apresentar o projeto para os jurados. Vocês terão 5 minutos para apresentar o projeto e os jurados terão 5 minutos para questionamentos.</li>
                            <li>Caprichem no produto! Cresçam na apresentação! Conquistem os jurados!</li>
                        </ul>
                    </div>
                </MiniSection>
                <MiniSection title="Prêmios" alignCenter>
                    <div className="awards">
                        <div className="award">
                            <ScrollAnimation animateIn="tada" animateOnce delay={1500}>
                                <img src="/static/img/sprites/cash.png" width="180"/>
                                <h2>1º Lugar</h2>
                                <p>3 mil reais</p>
                            </ScrollAnimation>
                        </div>
                        <div className="award">
                            <ScrollAnimation animateIn="fadeIn" animateOnce delay={800}>
                                <img src="/static/img/sprites/cash.png" width="180"/>
                                <h2>2º Lugar</h2>
                                <p>900 reais</p>
                            </ScrollAnimation>
                        </div>
                        <div className="award">
                            <ScrollAnimation animateIn="fadeIn" animateOnce>
                                <img src="/static/img/sprites/cash.png" width="180"/>
                                <h2>3º Lugar</h2>
                                <p>600 reais</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </MiniSection>
                <MiniSection title="Jurados" alignCenter backgroundImage={`url('/static/img/section-background/judges.png')`}>
                    <div className="judges">
                        <div className="judge">
                            <ScrollAnimation animateIn="fadeInLeftBig" animateOnce>
                                <img src="/static/img/people/FernandoDePaula.jpg" />
                                <h2>Fernando de Paula</h2>
                            </ScrollAnimation>
                        </div>
                        <div className="judge">
                            <ScrollAnimation animateIn="fadeInLeftBig" animateOnce delay={200}>
                                <img src="/static/img/people/CarlosBiribilli.jpg" />
                                <h2>Carlos Biribilli</h2>
                            </ScrollAnimation>
                        </div>
                        <div className="judge">
                            <ScrollAnimation animateIn="fadeInLeftBig" animateOnce delay={400}>
                                <img src="/static/img/people/DanielBarbosa.jpg" />
                                <h2>Daniel Barbosa</h2>
                            </ScrollAnimation>
                        </div>
                        <div className="judge">
                            <ScrollAnimation animateIn="fadeInLeftBig" animateOnce delay={600}>
                                <img src="/static/img/people/EdreiCosta.jpg" />
                                <h2>Edrei Costa</h2>
                            </ScrollAnimation>
                        </div>
                    </div>
                </MiniSection>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Hackathon