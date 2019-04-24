import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Switch from "react-switch";
import './index.css';
import Question from "./Question";
import QuestionList from "./QuestionList";
import AddQuestion from "./AddQuestion";
import NotFound from "./NotFound";
import axios from 'axios';
function axiosTest() {
    return axios.get('http://localhost:8080/questions2').then(response => {

        return response.data
    })
}

class App extends Component {
    constructor(props) {
        super(props);
        this.gotData = false;
        this.state = { questions: this.getData()}
        // this.handleChange = this.handleChange.bind(this);
        this.API_URL=window.location.href;
    }
    // handleChange() {
    //     console.log("test");
    // }
    componentDidMount() {
        axiosTest().then(data => {
            this.setState({
                questions: data
            });
            this.gotData = true;
        });
    }
    componentWillMount() {
        axiosTest().then(data => {
            this.setState({
                questions: data
            });
            this.gotData = true;
        });
    }
    storage(){
        let data = this.state.data;
        localStorage.setItem("data", JSON.stringify(data))
    };
        getData(){
        console.log(this);
            axiosTest().then(data => {
                this.setState({
                    questions: data
                });
                this.gotData = true;
            });
        this.storage()
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
    getQuestionFromId(id) {
        return this.state.questions.find((elm) => elm.id === Number(id));
    }

    filterByTopic(topic) {
        return this.state.questions.filter((elm) => elm.topic.includes(topic))
    }

    render() {
        var questions = this.state.questions;
        console.log(this.state.questions);
        return (
            <Router>
                <div className="container">
                    <h1>StackOverflow</h1>

                    <Switch onChange={this.handleChange} checked={this.state.checked} >
                        <Route exact path={'/'}
                               render={(props) =>
                                   <QuestionList gotData={true} {...props}
                                                 questions={questions}
                                                 header={'Questions Asked'}/>
                               }
                        />

                        <Route exact path={'/questions/:id'}
                               render={(props) => <Question {...props}
                                                            questions={this.getQuestionFromId(props.match.params.id)}/>}
                        />

                        <Route exact path={'/questions/with/:topic'}
                               render={(props) =>
                                   <QuestionList {...props}
                                                 questions={this.filterByTopic(props.match.params.topic)}
                                                 header={`Questions that consist ${props.match.params.topic}`}/>}
                        />

                        <Route component={NotFound} />
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;
