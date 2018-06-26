import React, { Component } from 'react';
import SingleSide from './SingleSide';
import axios from 'axios';

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
        };
    }

    componentDidMount() {
        let url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=09ef819989214e788bd5c136781c8b90`;

        axios.get(url)
        .then((response) => {
            this.setState({
                sidenews: response.data.articles
            })
        })
        .catch((error) => console.log(error));
    }
    renderItems () {
        return this.state.sidenews.map((item) => (
            <SingleSide key={item.url} item={item} />
        ));
    }
    render (){
     return (
        //  <div className="row">
        //      {this.renderItems()}
        // </div>
        <div class="row">
            <div class="col s12 m12">
              <div class="card-panel white">
                <span class="black-text">
                  {this.renderItems()}
                </span>
              </div>
            </div>
          </div>
     );
    }
}



export default Sidenews;
