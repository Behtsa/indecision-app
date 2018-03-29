class IndecisionApp extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Action />
    		<Options />
    		<AddOption />
			</div>
			);
	}
}

class Header extends React.Component {
  render() {
    return (
    	<div>
    		<h1>Indecision</h1>
    		<h2>Put your life in the hands of a computer</h2>
    	</div>
    	);
  }
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button>What should I do?</button>
			</div>
			);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
			<div>Options component here</div>
			<Option />
			</div>
			);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				<p>Option Component Here</p>
			</div>);
	}
}

class AddOption extends React.Component {
	render() {
		return (
			<div>AddOption Component here</div>);
	}
}

const jsx = (
  <div>
    <h1>Title</h1>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// console.log('App.js is running');

// var template = <div><h1>Now this is working!!! :D</h1><p>This is some info</p></div>

// var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);