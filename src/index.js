import React from'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'
import Home from './components/homepage';
import About from './components/about/aboutpage';
import Authors from './components/authors/authorPage';
import notFoundPage from './components/notFoundPage';
import Header from './components/common/header';
import manageAuthorPage from './components/authors/manageAuthorPage';
import updateAuthorPage from './components/authors/updateAuthor';
import test from './test';

class App extends React.Component{
    render() {
        return (
            <div>
                <Header/>
                <div className='container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
class RouteD extends React.Component{
    render() {
        return (<Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/" component={Home}/>
                <Route path="about" component={About}/>
                <Route path="authors" component={Authors}/>
                <Route path="addAuthor" component={manageAuthorPage}/>
                <Route path="authorUpdate/:id" component={updateAuthorPage}/>
                <Route path="test" component={test}/>
                <Redirect from="abt" to="about"/>
                <Redirect from="about/*" to="about"/>
                <Route path='*' component={notFoundPage}/>
            </Route>
        </Router>);
    }
}
ReactDOM.render(<RouteD />, document.getElementById('app'));