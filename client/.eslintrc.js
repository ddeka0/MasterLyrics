// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
	"indent": "off",
	"no-tabs": 0,
    'generator-star-spacing': 'off',
    // allow debugger during development
	'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	"quotes": ["error","double"],
	"no-trailing-spaces": 0,
	"quotes": 0,
	"key-spacing": 0,
	"eol-last": 0,
	"no-unused-vars": 0,
	"comma-spacing": 0,
	"comma-dangle": 0,
	"keyword-spacing":0,
	"no-mixed-spaces-and-tabs":0
	
	
  }
}
