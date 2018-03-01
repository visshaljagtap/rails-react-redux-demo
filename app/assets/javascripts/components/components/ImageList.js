
import React, { Component } from 'react';
import Header from './Header'

class ImageList extends Component {
    renderImages() {
        return this.props.images.map((image) => {
            return (
                <img src={image.thumbnail} alt="true" key={image.id}/>
            );
        });
    }

    renderImageGrid() {
        return this.props.images.map((image) => {
            return (
                <li key={image.id}>
                    <a className="rig-cell">
                        <img className="rig-img" src={image.thumbnail} />
                        <span className="rig-overlay"></span>
                        <span className="rig-text">{image.description}</span>
                    </a>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div id="slider">
                    <figure>
                        {this.renderImages()}
                    </figure>
                </div>
                <br></br>
                <ul id="rig">
                    {this.renderImageGrid()}
                </ul>
            </div>
        );
    }
}

export default ImageList;
