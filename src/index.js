var React = require('react');
var ReactDOM = require('react-dom');
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'
var Home = require('./components/homepage');
var About = require('./components/about/aboutpage');
var Authors = require('./components/authors/authorPage');
var notFoundPage = require('./components/notFoundPage');
var Header = require('./components/common/header');
var manageAuthorPage = require('./components/authors/manageAuthorPage');
var updateAuthorPage = require('./components/authors/updateAuthor');
var test=require('./test');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>
                <div className='container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});
var RouteD = React.createClass({
    render: function () {
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
});
ReactDOM.render(<RouteD />, document.getElementById('app'));