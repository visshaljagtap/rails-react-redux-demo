
import Header from './Header'
import ImageList from '../containers/image-list';

const Gallery = () => (
    <div>
        <Header> </Header>
        <div className="sub-header-top sub-header">
            <h2>Gallery</h2>
            <ImageList />
        </div>
    </div>
);

export default Gallery;
