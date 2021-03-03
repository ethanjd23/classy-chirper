import { Component } from 'react';


class Chirp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="card m-3 col-12">
            <p className="card-header">{this.props.username}</p>
            <div className="card-body">
                {/* <p className="card-title">Subject</p> */}
                <h5 className="card-text">{this.props.message}</h5>
            </div>
        </div>
        )
    }
}

export default Chirp;