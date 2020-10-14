import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import QuizList from './containers/QuizList/QuizList'
import Auth from './containers/Auth/Auth'

function App() {
  return (
    <Layout className="Layout">
      <Switch>
        <Route path={'/auth'} exact component={Auth} />
        <Route path={'/quiz-creator'} exact component={QuizCreator} />
        <Route path={'/quiz/:id'} exact component={Quiz} />
        <Route path={'/'} exact component={QuizList} />
      </Switch>
    </Layout>
  );
}

export default App;
