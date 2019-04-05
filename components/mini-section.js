const MiniSection = ({children, backgroundImage, title, alignCenter}) => (
    <div className="mini-section" style={ backgroundImage ? { backgroundImage: backgroundImage } : { background: '#1d1d1d'} }>
        <div className={`mini-section-content ${alignCenter && 'align-center'}`}>
            <div className="mini-section-body">
                { 
                    title &&
                    <div className={`title ${!alignCenter && 'title-space'}`}>
                        <h1>{title}</h1>
                    </div>
                }
                { children }
            </div>
        </div>
    </div>
)

MiniSection.defaultProps = {
    alignCenter: false,
}

export default MiniSection