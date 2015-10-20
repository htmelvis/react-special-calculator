var React = require('react');

var NetDetails = React.createClass({
  getInitialState: function(){
    return {
      items: this.props.items
    }
  },
  render: function(){
    return (
      <div className="half columns last">
           <h3>What you get with this kit</h3>
           <ul>
            {this.props.items.map(function(item, index){
              return <li>{item}</li>
           })}
           </ul>
      </div>
    );
  }
});

module.exports = NetDetails;
