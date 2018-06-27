import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';
import { Timeline } from 'react-twitter-widgets'

class Buffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        news1: {
            type: 'top-headlines',
            query: 'sources=financial-times,espn'
        },
        news2: {
            type: 'everything',
            query: 'source=techcrunch'
        },
        news3: {
          type: 'everything',
          query: 'source=hacker-news'
        }
    };
}
  render() {
    return (
    //   <div className="container-fluid">
    //   <div className="navbar-fixed">
    //   <nav>
    //     <div className="nav-wrapper indigo lighten-4">
    //      <a href="/" cllassName="bran-logo center">OneSource</a>
    //       </div>
    //      </nav>
    //     </div>
      <div className="row">
       <div className="col s8">
          <News news={this.state.news1} />
          <News news={this.state.news2} />
        </div>
        <div className="col s4">
        <div>
          <Timeline 
          dataSource={{
            sourceType: 'profile',
            screenName: 'OneSourceNews1'
          }}
          options={{
            username: 'OncSourceNews',
            height: '730'
          }}
          onLoad={() => console.log('Timeline is loaded!')}
          />
        </div>
 <Sidenews news={this.state.news3} />
       </div>
      </div>
    //   </div>
    );
  }
}

export default Buffer;
