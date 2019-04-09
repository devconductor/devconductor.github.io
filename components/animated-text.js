import ScrollAnimation from 'react-animate-on-scroll'

class AnimatedText extends React.Component {

    createCharsAnimated = (text) => {
        const chars = []
        for (let i = 0; i < text.length; i++) {
            chars.push(<ScrollAnimation className="word" key={i} animateIn="fadeInDownBig" animateOnce delay={i * 70}>{text.charAt(i)}</ScrollAnimation>)
        }
        return chars
    }

    render() {
        const { text, className }= this.props

        return (
            <span className={`animated-text ${className ? className : ''}`}>
                {
                    this.createCharsAnimated(text)
                }
            </span>
        )
    }
}

export default AnimatedText