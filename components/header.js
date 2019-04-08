import Link from 'next/link'
import Head from 'next/head'
import site from '../utils/config'
import { timeUtils } from '../utils/time'

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

        const registration = timeUtils.todayIsLessThanDateCompare(site.dateRegistrationFinish)

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
                            <Link href="/"><a><img src={site.menu.logos.initial} alt="logo-evento"/></a></Link>
                        }
                        {
                            this.state.scrolling &&
                            <Link href="/"><a><img src={site.menu.logos.scrolling} alt="logo-evento"/></a></Link>
                        }
                    </div>
                    <div className="center">
                        <ul>
                            { site.menu.links.map(link => <li key={link.name}><Link href={link.path}><a>{link.name}</a></Link></li>)}
                        </ul>
                    </div>
                    <div className="right">
                        { 
                            !this.state.scrolling && 
                            <a href={site.enterprise.site} target="_blank"><img src={site.enterprise.logo} alt={site.enterprise.name}/></a>
                        }
                        {
                            this.state.scrolling && registration &&
                            <a href={site.hackathon.linkRegistration} target="_blank"><button>Inscreva-se</button></a>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header