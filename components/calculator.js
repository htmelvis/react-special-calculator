var React = require('react');
var $ = require('jquery');
var _ = require('lodash');
var VariationSelect = require('./variationSelect');
var ProductOptionSelect = require('./productOptionSelect');
var NetDetails = require('./netDetails');
//This will house the pieces of the calculator and also let it be
//convert to es6
require('./calculator.scss');
var Calculator = React.createClass({
  propTypes: {
    dataUrl: React.PropTypes.string.isRequired
  },
  getInitialState: function(){
    return {
      data: [],
      livePrice: 0,
      variations: ['Select a net type'],
      kitItems: ["Everything you need to get started"]
    }
  },
  componentDidMount: function(){
   //ajax
   if(this.isMounted()){
    this.loadProduct();
   }
  },
  loadProduct: function(){
    $.ajax({
      url: this.props.dataUrl,
      type: 'get',
      dataType: 'json'
    })
    .done(function(data) {
      //product data set
      this.setState({ data: data });
    }.bind(this))
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  },
  changeProductType: function(e){
    let selected = e.target.options[e.target.options.selectedIndex];
    //get the variations available by the selected option
    let productVariations = _.result(_.findWhere(this.state.data.types,
      {'name': selected.value}), 'variations');

    this.setState({variations: productVariations });

    // this.setState({selectedType: selectedData});
    //console.log(this.state.selectedType);
  },
  setLivePrice:function(e) {
    let selected = e.target.options[e.target.options.selectedIndex];
    let livePrice = selected.value;
    let kitItems = $(selected).data('items');
    kitItems = kitItems.split(',');

    this.setState({livePrice: livePrice, kitItems: kitItems});
  },
  render: function(){
    return (
        <div className="calculator">
          <div className="half columns">
            <h2>{this.state.data.name} Calculator</h2>
            <form action="">

              <ProductOptionSelect
                  selected={this.state.selectedType}
                  update={this.changeProductType}
                  options={this.state.data} />

              <VariationSelect update={this.setLivePrice} options={this.state.variations} />

              <div>
                <label htmlFor="quantity">Qty: </label>
                <input type="text" name="quantity" value="" />
              </div>
              <input type="submit" value="Buy Something"/>
            </form>
            <div className="livePrice">$ {this.state.livePrice}</div>
            </div>
            <NetDetails items={this.state.kitItems} />
        </div>
    );
  }
});

module.exports = Calculator;
