import site from '../utils/config'

export default () => (
    <div className="footer">
        <div className="footer-info">
            <div className="footer-social-network">
                {
                    site.footer.socialsNetwork.map(socialsNetwork => {
                        return (
                            <a key={socialsNetwork.name} href={socialsNetwork.url} target="_blank">
                                <img src={socialsNetwork.icon} alt={socialsNetwork.name} />
                            </a>
                        )
                    })
                }
            </div>
            <br/>
            <div className="footer-copyright">
                <img src={site.enterprise.logo} alt={site.enterprise.name} width="120" height="auto"/>
                <br/><br/>
                <h5>{site.footer.copyrigth}</h5>
                <h5>Site desenvolvido pela <a href={site.enterprise.site} target="_blank">{site.enterprise.name}</a>.</h5>
            </div>
        </div>
    </div>
)