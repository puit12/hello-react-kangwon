import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
  let { title, videourl, description,publishdate,channeltitle,thumbnailurl } = this.props; // 부모에게서 전달받는 것
    return (
                                                  <ul id="results" className="item-list">
                                                    <li className="item">

                                                    <div className="image-wrapper" >
                                                       <img src={thumbnailurl}/>
                                                    </div>

                                                    <div className="text-wrapper">
                                                      <a href= {videourl} target="_blank">{title}</a>
                                                      <div className="description">
                                                        <small>By <span className="channel-title">{channeltitle}</span> on <time>{publishdate}</time></small>
                                                        <p>{description}</p>
                                                      </div>
                                                     </div>
                                                     </li>
                                                  </ul>
    );
  }
}

export default Search;
