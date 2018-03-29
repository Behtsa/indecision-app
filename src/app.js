class Header extends React.Component {
  render() {
    return <p>This is from Header</p>
  }
}

const jsx = (
  <div>
    <h1>Title</h1>
    <Header />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
// console.log('App.js is running');

// var template = <div><h1>Now this is working!!! :D</h1><p>This is some info</p></div>

// var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);