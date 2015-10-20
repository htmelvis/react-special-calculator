var React = require('react');

var NetOption = React.createClass({
  render: function() {
    return (
      <option value={this.props.netType.name}>{this.props.netType.name}</option>
    );
  }
});

module.exports = NetOption;