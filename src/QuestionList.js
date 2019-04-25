import React, { Component } from 'react';
import { Link } from "react-router-dom";

class QuestionsList extends Component {
    render() {
        return (
            <div>
                <h3>This is my QuestionList.js component</h3>
                {this.props.questions.map(el => (
                    <p key={el._id}>Title: {el.title},<br></br>
                        Description: {el.description},<br></br>
                        topic: {el.topic}</p>
                ))}
            </div>
        );

    }
}
export default QuestionsList;