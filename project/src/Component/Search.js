import React,{Component} from 'react';
import './Search.css';
import Loading from './Loading';
import Searchedcoin from './Searchedcoin';
 class Search extends Component{
    state={
        flag: false,
        coins: [],
        coin_name:'',
        api_found: false,
        searched_coin:[],
    }
    searchEvent =(e) =>
    {
        this.setState({
           [e.target.name]: ((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1))
        });
        console.log(this.state.coin_name);
        //here searched value is stored in coin_name
    }
    handleSubmit =(e) =>
    {
        e.preventDefault();
        let coin_id = this.state.coins.filter(coin =>{
            return coin.name===this.state.coin_name;
        }
            );
            console.log(coin_id);
            //here i used different method of calling api as  i was not able to use await keyword here
            var xhr= new XMLHttpRequest();
            xhr.open("GET","https://api.coingecko.com/api/v3/coins/"+coin_id[0].id+"");
            xhr.send();
            var data;
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                 data=JSON.parse(xhr.responseText);//changing the data into json format
                 console.log(data);
                 this.setState({searched_coin:data,api_found: true});            
                }
              };
            //  this.setState({searched_coin:data,api_found: true});
              //console.log(searched_coin);
              
    }
     render()
     {
         return(
             <div>
             {this.state.flag ?
             (
             <div className="head">

                <h1>Crypto Wiki</h1>
                <form>
                    <div><input className="search-input mb-2" type="text" placeholder="Enter the Crypto Currency Name" name="coin_name" value={this.state.value} onKeyUp={this.searchEvent}  />
                    <button className="btn btn-success" type="button"  onClick={this.handleSubmit}>Get Info About Coin</button>
                    </div>
                </form>

                {this.state.api_found ? (<Searchedcoin api_data={this.state.searched_coin}  />) : (<p><b>Search For a Coin</b></p>)}

             </div>)
             :
             (
                  <Loading />
             )}
             
             </div>
         );
         //in this we used a flag (initialised as false)such data when api is fetched only then html code should be rendered 
         //another variable is used to found variable (same working as of flag) which will call
     }
     async componentDidMount()
    {
        const url= "https://api.coingecko.com/api/v3/coins/list";
        const res= await fetch(url);
        const data =await res.json();
        console.log(data);
        this.setState({coins:data,flag: true});
        //here flag is true that means api is fetched and now we can render our code of search bar
    }
 }
 export default Search;