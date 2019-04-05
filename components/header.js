import Link from 'next/link'
import Head from 'next/head'

class Header extends React.Component {
    
    state = {
        scrolling: false
    }

    componentDidMount() {
        window.onscroll = () => this.handleScroll()
        this.handleScroll()
    }

    handleScroll() { 
        if (!this.state.scrolling && document.documentElement.scrollTop > 100) {
            this.setState({ ...this.state, scrolling: true })
        }
        
        if (this.state.scrolling && document.documentElement.scrollTop === 0) {
            this.setState({ ...this.state, scrolling: false })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Head>
                    { !this.state.scrolling && <meta name="theme-color" content="#1D1D1D"/>}
                    { this.state.scrolling && <meta name="theme-color" content="#FFFFFF"/>}
                </Head>
                <div className={`header ${this.state.scrolling && 'scrolling'}`}>
                    <div className="left">
                        {
                            !this.state.scrolling &&
                            <Link href="/"><a><img src="/static/img/logos/logo_vertical_white.png" alt="logo-evento"/></a></Link>
                        }
                        {
                            this.state.scrolling &&
                            <Link href="/"><a><img src="/static/img/logos/logo_vertical_purple.png" alt="logo-evento"/></a></Link>
                        }
                    </div>
                    <div className="center">
                        <ul>
                            <li><Link href="/"><a>Início</a></Link></li>
                            <li><Link href="/hackathon"><a>Hackathon</a></Link></li>
                        </ul>
                    </div>
                    <div className="right">
                        { 
                            !this.state.scrolling && 
                            <a href="https://conductor.com.br" target="_blank"><img src="/static/img/logos/logo_conductor_branca.png" alt="logo-conductor"/></a>
                        }
                        {
                            this.state.scrolling &&
                            <a href="https://pt.surveymonkey.com/r/geekforaweek" target="_blank"><button>Inscreva-se</button></a>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header