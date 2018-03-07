
import Header from './Header'
import GoogleMap from './GoogleMap'

const About = () => (
    <div>
        <Header> </Header>
        <div className="sub-header-top sub-header">
            <h2>Map</h2>
            <GoogleMap />
        </div>
    </div>
);

export default About;
