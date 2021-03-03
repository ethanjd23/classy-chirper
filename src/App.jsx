import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Chirp from "./components/Chirp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      message: "",
      chirps: [
        { id: uuidv4(), username: "peepee", message: "poopoo" },
        { id: uuidv4(), username: "hello", message: "world" },
        { id: uuidv4(), username: "Jimmmy", message: "i be coolin" },
      ],
    };
  }

  handleClick(e) {
    this.setState({
      chirps: [
        ...this.state.chirps,
        { id: uuidv4(), username: this.state.username, message: this.state.message },
      ],
    });
  }

  render() {
    return (
      <>
      <header className="jumbotron bg-secondary">
          <h1 className="display-5 text-success">Classy Chirpr</h1>
      </header>
        <div className="d-flex flex-direction-column">
          <div>
            <div className="input-group">
              <span className="input-group-text">Username</span>
              <input
                type="text"
                className="form-control"
                aria-label="Subject"
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
              ></input>
            </div>
            <div className="input-group">
              <span className="input-group-text">Message</span>
              <textarea
                className="form-control"
                aria-label="Message"
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
              ></textarea>
            </div>
          </div>
          <button
            className="btn btn-success btn-md h-25"
            onClick={(e) => this.handleClick(e)}
          >
            Post Chirp
          </button>
          <div className="card-deck d-flex flex-column align-items-center col-8">
            {this.state.chirps
              .slice(0)
              .reverse()
              .map((chirp) => {
                /* Reverses array so chirps display from newest to oldest */
                return (
                  <Chirp username={chirp.username} message={chirp.message} />
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
