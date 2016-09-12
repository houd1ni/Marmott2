import commonjs from 'rollup-plugin-commonjs'
import coffee from 'rollup-plugin-coffee-script'

export default {
  entry: 'src/main.coffee',
  format: 'cjs',
  dest: 'bundle.js',
  plugins: [
    coffee(),
    commonjs({
      extensions: ['.js', '.coffee']
    })
  ]
}
