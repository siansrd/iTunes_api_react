var React = require('react');

var Song = function(props){

  return (
    <li>{props.title} by {props.artist}</li>
  )
}

module.exports = Song;