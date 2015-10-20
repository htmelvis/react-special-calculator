var React = require('react');
var NetOption = require('./netOption');
var ProductOptionSelect = React.createClass({
  changeHandler: function(e){
    //get the pared down object on select
    this.props.update(e);
  },
  render: function() {
    var options = this.props.options.types || [];
    return (
      <div className="ProductOptionSelect">
        <select onChange={this.changeHandler}>
          <option value="">Select a net type</option>
          {options.map(function(option, index){
            return <NetOption netType={option} key={index}  />
          })}
        </select>
      </div>
    );
  }
});

module.exports = ProductOptionSelect;