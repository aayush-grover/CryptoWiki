import React,{Component} from 'react';
import './Search.css';
 class Search extends Component{
     render()
     {
         return(
             <div className="head">

                <h1>Crypto Wiki</h1>
                <form>
                    <div><input className="search-input mb-2" type="text" placeholder="Enter the Crypto Currency Name" />
                    <input className="btn btn-success" type="Button" value="Get Info About Coin" />
                    </div>
                </form>
                <p><b>Search For a Coin</b></p>
             </div>
         );
     }
     async componentDidMount()
    {
        const url= "https://randomuser.me/api/";
        const res= await fetch(url);
        const data =await res.json();
        console.log(data.results[0].name.first);
        this.setState({user:data.results[0].name.first,flag: true})
    }
 }
 export default Search;