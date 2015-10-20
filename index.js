var React = require('react');
//require('./components/testComponent.js');
require('./style/main.scss');
var Calculator = require('./components/calculator.js');
React.render(<Calculator dataUrl="/data/product.json" />, document.getElementById('main'));
