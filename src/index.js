import React from 'react';
import ReactDOM from 'react-dom';

const App =()=> {
    return (
        <div> 
            <h1> My React Apps</h1>
            <ul>
                <li><a href="https://michaelwoo921.github.io/pics" >Image Search </a></li>
                <li><a href="https://michaelwoo921.github.io/videos-hooks" > Video Search</a></li>
                <li><a href="https://node-react-123.herokuapp.com" >Survey</a></li>
  <li><a href="https://react-heroku123.herokuapp.com/home" >React specialization from Coursera</a></li>
                

            </ul>
            <h1> Non React Apps </h1>
            <ul>
            <li><a href="https://michaelwoo921.github.io/bootstrap4" >Using Bootstraps </a></li>
            <li><a href="https://bridge2020.herokuapp.com" >To Do App (password protected)</a></li>
            <li><a href="https://complexapp2020.herokuapp.com" >Prayer Blog </a></li>


            </ul>
        </div>
    );
    }
    
    ReactDOM.render(<App />,
        document.querySelector('#root'))
