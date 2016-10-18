var React = require('react');
var ReactDOM = require('react-dom');
var SongList = require('./components/songList');

window.onload = function(){
  ReactDOM.render(
    <SongList/>,
    document.getElementById('app')
  );
}