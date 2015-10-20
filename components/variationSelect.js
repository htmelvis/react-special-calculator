var React = require('react');

var VariationSelect = React.createClass({
  buildVariations: function(){
      var options = this.props.options.map(function(variation, index){
        return <option value={variation.price} data-items={variation.items} key={index}>
                 {variation.val}
               </option>
      });
      return options;
  },
  componentDidUpdate:function(){
    this.buildVariations();
  },
  handleChange: function(e){
     this.props.update(e);
  },
  render: function() {
    return (
      <div className="VariationSelect">
          <select onChange={this.handleChange}>
            <option value="">Select a size</option>
            { this.props.options ? this.buildVariations() : null }
          </select>
      </div>
    );
  }
});

module.exports = VariationSelect;