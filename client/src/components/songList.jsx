var React = require('react');
var Song = require('./song');

var SongList = React.createClass({

  getInitialState: function(){
    return { songs: [] };
  },

  componentDidMount: function() {
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState({ songs: data.feed.entry })
    }.bind(this);
    request.send();
  },

  render: function(){

    var songList = this.state.songs.map(function(song, index){
      return  <Song 
                key={index} 
                title={song['im:name'].label} 
                artist={song['im:artist'].label}>
              </Song>
    })
    console.log("song list", songList)
    console.log("songs", this.state.songs)

    return(
      <div>
        <h2>Song List</h2>
        <ol>{songList}</ol>
      </div>
    )
  }

})

module.exports = SongList;