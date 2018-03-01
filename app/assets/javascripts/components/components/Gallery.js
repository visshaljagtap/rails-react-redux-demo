
import Header from './Header'

const Gallery = () => (
    <div>
        <Header> </Header>
        <div className="sub-header-top sub-header">
            <h2>Gallery</h2>
            <div id="slider">
                <figure>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg" alt />
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/taj-mahal_copy.jpg" alt />
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ankor-wat.jpg" alt />
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg" alt />
                </figure>
            </div>
        </div>
    </div>
);

export default Gallery;
