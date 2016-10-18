var React = require('react');
var Song = require('./song');

var SongList = React.createClass({

  getInitialState: function(){
    return { songs: "Test song 1" };
  },

  render: function(){
    return(
      <div>
        <Song title={this.state.songs}></Song>
      </div>
    )
  }

})

module.exports = SongList;