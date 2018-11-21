import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './component/Search';

class App extends Component {
  state = {
    word:"",
    info:[]
  }


handleSubmit(event) {

    event.preventDefault();
    this.setState({word:"", info:[] });
    console.log(this.state.word);
    let fetchurl = "https://www.googleapis.com/youtube/v3/search?key=YOUTUVE API KEY&part=snippet&q=" + this.state.word;
    let result,url;
    console.log(fetchurl);
    {
    fetch(fetchurl).then(res=>res.json()).then(
    data=> {{}
    for(let i = 0; i<5;i++){
            url = data.items[i].id.videoId;
            result = data.items[i].snippet;
            let { info } = this.state;

            this.setState({
            info:
                       info.concat({
                        videourl: "http://youtu.be/" + url,
                        title : result.title,
                        description :result.description,
                        publishdate : result.publishedAt,
                        channeltitle: result.channelTitle,
                        thumbnailurl: result.thumbnails.medium.url
                        })
                        });
                        }

});


}
}

handleChange(e){
    this.setState({
      word: e.target.value
    });
  }

  render() {
  let {info}  = this.state;
  console.log(info);
  let list = info.map( (data,i) =>  (<Search key={i} title ={ data.title } videourl={data.videourl}
                         description = {data.description} publishdate = {data.publishdate}
                          channeltitle = {data.channeltitle} thumbnailurl={data.thumbnailurl}/>) );
    return (
      <div className="App">
       <div id="container">
                             <header>
                               <h1>Search <span>Videos</span></h1>
                               <p>Search all YouTube Videos</p>
                             </header>
                             <section>
                               <form id="search-form" method="get" onSubmit={this.handleSubmit.bind(this)}>
                                 <div className="fieldcontainer">
                                   <input type="search" name="query" className="search-field" placeholder="Search YouTube" value={this.state.word} onChange={this.handleChange.bind(this)}/>
                                   <input type="submit" name="search-btn" className="search-btn" value="검색"/>
                                 </div>
                               </form>
                              </section>
            { list }
        </div>
      </div>
    );
  }
}

export default App;
