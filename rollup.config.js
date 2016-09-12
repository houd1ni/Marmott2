import coffee from 'rollup-plugin-coffee-script'

export default {
  entry: 'src/main.coffee',
  format: 'es',
  dest: 'bundle.js',
  plugins: [
    coffee(),
  ]
}
