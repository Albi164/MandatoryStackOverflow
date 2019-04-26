import React, {Component} from 'react';
import props from "./App";
class PostAnswer extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: null,
            rating: null
        }
    }
    render() {
        return (
            <div style={{ padding: "10px" }}>
                <input
                    type="text"
                    onChange={e => this.setState({ text: e.target.value })}
                    placeholder="This is how you start"
                    style={{ width: "200px" }}
                />
                <button onClick={() => this.props.state.postAnswersToDB(this.state.answers.text)}>
                    ADD
                </button>
                <button onClick={() => this.props.state.updateRating(this.state.answers.rating)}>

                </button>
            </div>
        );
    }
}

export default PostAnswer;