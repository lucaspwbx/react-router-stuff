import React from 'react';
import Router from 'react-router';
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigation = Router.Navigation;

class About extends React.Component {
  render() {
    return (
      <div>
       About
      </div>
    )
  }
}

class Inbox extends React.Component {
  render() {
    return (
      <div>
      Inbox
      <Router.RouteHandler/>
      </div>
    )
  }
}

class Message extends React.Component {
  componentDidMount() {
    var id = this.props.params.id;
    console.log(id);
  }
  render() {
    return (
      <div>
      Message
      </div>
    )
  }
}

class Company extends React.Component {
  handleClick() {
    var router = this.context.router;
    router.transitionTo('/');
  }
  render() {
    return (
      <div>
        Company
        <button onClick={this.handleClick.bind(this)}>Teste</button>
      </div>
    )
  }
}

Company.contextTypes = {
    router: React.PropTypes.func.isRequired
};

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Link to="about" path="/about">About</Link>
        <Link to="inbox" path="/inbox">Inbox</Link>
        <Link to="messages" params={{id: 1}}>Message</Link>
        <RouteHandler/>
      </div>
    )
  }
}

var routes = (
  <Route handler={App}>
    <Route name="about" path="about" handler={About}/>
    <Route name="company" path="about/company" handler={Company}/>
    <Route name="inbox" path="inbox" handler={Inbox}>
      <Route name="messages" path="messages/:id" handler={Message}/>
    </Route>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('app'));
});

export default App;

//React.render(<App/>, document.getElementById('app'));
