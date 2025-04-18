---
outline: deep
---

# Prettier

prettier 是对代码美观，风格做出了统一的要求，方便团队合作时能比较舒适的阅读他人的代码，增加可读性。在.prettierrc.js内配置类常见的样式选项，后续可讨论完善。

参考配置：
.prettierrc.js

```js
module.exports = {
    // 每行末尾自动添加分号
    semi: false,
    // 尾逗号
    trailingComma: 'none',
    // 使用单引号
    singleQuote: true,
    // 对象中空格 默认true
    // true: { foo: bar }
    // false: {foo: bar}
    bracketSpacing: true,
    // 箭头函数参数括号 默认avoid 可选 avoid| always
    // avoid 能省略括号的时候就省略 例如x => x
    // always 总是有括号
    arrowParens: 'avoid',
    // 换行长度，默认80
    printWidth: 80,
    tabWidth: 2,
    // 设置为true时,将多行JSX元素的 > 放在最后一行的末尾，而不是单独放在下一行
    jsxBracketSameLine: true,
    endOfLine: "auto"
};
```