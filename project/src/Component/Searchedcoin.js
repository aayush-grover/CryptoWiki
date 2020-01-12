import React , {Component} from 'react';
import './Searchedcoin.css';
class Searchedcoin extends Component{
    render()
    {
        return(
            <div>
    <div className="id_heading"><h3 onClick={()=>{
        window.open(this.props.api_data.links.homepage[0]);
    }}>{this.props.api_data.id} - {this.props.api_data.symbol}</h3></div>
    <div className="content">
    <div className="col-lg-3 col-md-3 col-xl-3" >
                   <table className="tabl" border="1px" >
                     <tr>
                       <td> <img src={this.props.api_data.image.large} alt="searched coin img" height="100%" width="100%" /></td>
                      </tr>
                      <tr>
                        <td >
                            <ul className="list-unstyled">
                            <li >country of origin -<br /> {this.props.api_data.country_origin}<br /></li> 
                            <li> Date of Apperance -<br/> {this.props.api_data.genesis_date}</li>
                            <li> Market Cap Rank - {this.props.api_data.market_cap_rank}</li>
                            <li> Coin Gecho</li>
                            <li> Rank - {this.props.api_data.coingecko_rank}</li>
                            <li> Score - {this.props.api_data.coingecko_score}</li>
                            <li>Developer Score -<br /> {this.props.api_data.developer_score}</li>
                            <li> Community Sore -<br />{this.props.api_data.community_score}</li>
                            <li> Liquidity Sore -<br /> {this.props.api_data.liquidity_score}</li>
                            <li> Public Interest Score -<br /> {this.props.api_data.public_interest_score}</li>
                            </ul>
                        </td>
                         </tr>
                      </table>
    </div>
    <div className="col-lg-9 col-md-9 col-xl-9 description">
    <div dangerouslySetInnerHTML={{__html : this.props.api_data.description.en }} />
    </div>
            </div>
        </div>
        );
    }
}
export default Searchedcoin;