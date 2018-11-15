module.exports = {
    extends: "airbnb-base",
    rules: {
        // require 参数路径动态
        'import/no-dynamic-require': 0,
        // require 可以写作代码块里
        'global-require': 0,
        'no-console': 0,
        // 允许没有 export default 只用 export
        'import/prefer-default-export': 0,
        // 类的方法中不是必须使用this
        'class-methods-use-this': 0
    }
};