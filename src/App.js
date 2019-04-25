import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Switch from "react-switch";
import './index.css';
import Question from "./Question";
import QuestionList from "./QuestionList";
import AddQuestion from "./AddQuestion";
import NotFound from "./NotFound";
class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = function () {
            console.log("test")
        }
        this.state = { questions: [], checked: true }
        // this.handleChange = this.handleChange.bind(this);
        this.API_URL = window.location.href;
    }
    // handleChange() {
    //     console.log("test");
    // }
    async componentWillMount() {
        //await data.
        const response = await fetch(
            `http://localhost:8080/questions2`
        );

        //assign to const json and set state when we receive data
        const json = await response.json();
        this.setState({ questions: json });
    }
    addQuestion(text) {
        let newQuestion = {
            id: Math.floor(Math.random() * Math.floor(1000000)),
            task: text,
            done: false
        };
        this.setState({
            questions: [...this.state.questions, newQuestion]
        });
    }
    filterByTopic(topic) {
        return this.state.questions.filter((elm) => elm.topic.includes(topic))
    }
   
    async getQuestionFromId(id) {
               //await data.
               const response = await fetch(
                `http://localhost:8080/questions2`
            );
    
            //assign to const json and set state when we receive data
            const json = await response.json();
            this.setState({ questions: json });
            return this.state.questions.find((elm) => Number(elm.id) === Number(id));
    }
    render() {
        var questions = this.state.questions;
        console.log(this.state.questions);
        return (
            <Router>
                <div className="container">
                    <h1>StackOverflow</h1>
                    <Switch onChange={this.handleChange} checked={this.state.checked} >
                    </Switch>
                    <Route exact path={'/'}
                            render={(props) =>
                                <QuestionList {...props}
                                    questions={questions}
                                    header={'Questions Asked'} />
                            }
                        />

                        <Route exact path={'/questions/:id'}
                            render={(props) => <Question {...props}
                                questionsID={props.match.params.id} />}
                        />

                        <Route exact path={'/questions/with/:topic'}
                            render={(props) =>
                                <QuestionList {...props}
                                    questions={this.filterByTopic(props.match.params.topic)}
                                    header={`Questions that consist ${props.match.params.topic}`} />}
                        />

                        <Route component={NotFound} />
                </div>
            </Router>
        );
    }
}

export default App;
