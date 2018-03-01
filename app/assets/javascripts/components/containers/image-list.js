import { connect } from 'react-redux';
import ImageList from '../components/ImageList'

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        images: state.images
    };
}

export default connect(mapStateToProps)(ImageList);
