import coffee from 'rollup-plugin-coffee-script'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/main.coffee',
  format: 'es',
  dest: 'bundle.js',
  plugins: [
    coffee(),
    uglify()
  ]
}
