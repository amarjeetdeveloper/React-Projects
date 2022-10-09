import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// functional component
const HeadingComponent = () => {
  return <h1> coming from functional component </h1>
}

// class component
class HeadingComponentUsingClass extends React.Component {
  render(){
  return <h1> coming render from class component </h1>
  }
}

const FunctionalComponent = () => {
  return <p> {+new Date()} </p> 
}
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval( () => {
root.render(
  <React.StrictMode>
 <h1> hello world</h1>
 <HeadingComponent />
 <HeadingComponentUsingClass />
 <FunctionalComponent />
  </React.StrictMode>
);
},6000)