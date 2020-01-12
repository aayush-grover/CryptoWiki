import React, {Component} from 'react';
import './Loading.css';

class Loading extends Component{
    render()
    {
        return(
            <div className="load">
                  <h1>Crypto Wiki</h1>
                  <h3>Loading The Coin List</h3>
            </div>
        );
    }
}
export default Loading;