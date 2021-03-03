import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            message: "",
            chirps: [{username: "peepee", message: "poopoo"},
                    {username: "hello", message: "world"},
                    {username: "Jimmmy", message: "i be coolin"},
        ]
        }
    }



    render() {
        return (
            <h1 className="display-1">Hello World</h1>
        )
    }
}

export default App;