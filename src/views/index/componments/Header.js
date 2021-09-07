import React, {Component, Fragment} from 'react';
//css
import "./header.scss"

class LayerHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <h1 className="logo"><span>LOGO</span></h1>
            </Fragment>
        )
    }
}

export default LayerHeader;