
// const path = require('path');

module.exports = {
  entry: '', // Dette skal være samme entry som definert i package.json
  mode: '', 
  optimization: {
  },
  devServer: { // Her ønsker vi å konfigurere devserveren slik at den henter innholder fra dist mappa og kjører på localhost:3000
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  module: { // Her ønsker vi en babel-loader for våre jsx filer med @babel/preset-react
    
  },
  plugins: [
    // Her ønsker vi å koble vår html template med HtmlWebpackPlugin
   // Bonus sette opp LiveReloadPlugin
  ],
};
