import React, { Component } from 'react';

export class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 7);
        this.setState({ spans });
    };

    render() {
        const { urls, alt_description } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    src={urls.small}
                    alt={alt_description}
                    ref={this.imageRef}
                />
            </div>
        );
    }
}

export default ImageCard;
