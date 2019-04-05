import ScrollAnimation from 'react-animate-on-scroll'
import Backdrop from './backdrop'

const Section = ({children, backgroundImage, title, alignCenter, backdrop, firstSection}) => (
    <div className="section"style={ backgroundImage ? { backgroundImage: backgroundImage } : { background: '#1d1d1d'} }>
        {
            backdrop &&
            <Backdrop />
        }
        <div className={`section-content ${alignCenter && 'align-center'} ${firstSection && 'section-first'}`}>
            <div className="section-body">
                { 
                    title &&
                    <div className={`title ${!alignCenter && 'title-space'}`}>
                        <ScrollAnimation animateIn={'bounceIn'} animateOnce>
                            <h1>{title}</h1>
                        </ScrollAnimation>
                    </div>
                }
                { children }
            </div>
        </div>
    </div>
)

Section.defaultProps = {
    backdrop: false,
    alignCenter: false,
    firstSection: false,
}

export default Section