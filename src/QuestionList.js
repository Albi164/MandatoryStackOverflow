import React,{Component} from 'react';
import {Link} from "react-router-dom";

class QuestionsList extends Component {

    render(){
        let list = [];
        console.log(this);
        let check = this.props.questions;
        let content = <p>Test</p>
        if (check === undefined){
            content = <p>Wait for the list</p>
        }
        // else {
        // this.props.questions.forEach((elm) => {
        //     list.push(<li>
        //             <Link to={`/questions/${elm.id}`}>{elm.title}</Link>
        //     </li>)
        //
        //     content = <ul>list</ul>
        // });}

        return (
            <div>
                <h3>{this.props.header}</h3>

                    {content}

            </div>
        );

    }
}{}
export default QuestionsList;