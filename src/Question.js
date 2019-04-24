import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AddQuestion from "./AddQuestion";

class Question extends Component {

    render() {
        let question = this.props.questions;
        let addQuestion = this.props.input;
        let list = [];

        question.topic.forEach((elm) => {
            list.push(<li>
                <Link to={`/questions/with/${elm}`}>{elm}</Link>
            </li>)
        });

        return (
            <div>
                <h3>{question.title}</h3>

                <p>{question.description}</p>

                <p>
                    Topics:
                    <ul>
                        {list}
                    </ul>
                </p>
            </div>
        );
    }
}

export default Question;