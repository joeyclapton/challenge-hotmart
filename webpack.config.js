// webpack.config.js
module.exports = {
  // outras opções...
  module: {
    // `module.rules` é o mesmo que `module.loaders` em 1.x
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // `loaders` substituirá os carregadores padrões.
          // A configuração a seguir fará com que todas as tags `<script>` sem
          // o atributo `lang` sejam carrega com `coffee-loader`
          loaders: {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
                scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
              },
            },
          },
        },
      },
    ],
  },
}
