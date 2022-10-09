import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// functional component
const HeadingComponent = (props) => {
  return <h1> {props.title } {props.count} </h1>
}

// class component
class HeadingComponentUsingClass extends React.Component {
  render(){
  return <h1> coming render from class component == {this.props.title} </h1>
  }
}

class ClassWalaComponent extends React.Component {
  render() {
    return <h1> classwala component == {this.props.title} </h1>
  }
}

// function component
const CurrentTime = () => {
  return <p> {+new Date()} ==
   <HeadingComponentUsingClass title="passed from currenttime" /> </p> 
}


const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval( () => {
root.render(
  <React.StrictMode>
 <HeadingComponent title="hello from Component" count="5" />
 <CurrentTime />
 <ClassWalaComponent title="classwala component se aaya hai" />
  </React.StrictMode>
);
},3000)