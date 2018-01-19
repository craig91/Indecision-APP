console.log('App.js is running!');

// JSX --> JavaScript XML

var template = ( 
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>);
    
var templateTwo = (
    <div>
        <h1>Craig Dejean</h1>
        <p>Age: 26</p>
        <p>Location: New York City</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);