import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AddQuestion from "./AddQuestion";

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {questions:[]}
    }
    async componentWillMount() {
        //await data.
        const response = await fetch(
            `http://localhost:8080/questions2`
        );

        //assign to const json and set state when we receive data
        const json = await response.json();
        this.setState({ questions: json });
    }
    render() {
        let question = this.state.questions;
        let addQuestion = this.props.input;
        let list = [];
         this.state.questions.forEach((elm) => {
            list.push(<li key={elm.id}>
                <Link key={elm.id} to={`/questions/with/${elm.topic}`}>{elm.topic}</Link>
            </li>)
        });

        return (
            <div>
                <h3>{question.title}</h3>

                <p>{question.description}</p>

                Topics:
                    <ul>
                        {list}
                    </ul>
            </div>
        );
    }
}

export default Question;