# js-validator

validator by native javascript code

## Usage

``` js
import Validator from './src'

const validator = new Validator()
validator.add('1', [
    { strategy: 'isNonEmpty', errorMsg: '用户名不能为空' },
    { strategy: 'minLength:10', errorMsg: '不能小于10' },
])

// 返回第一个校验错误的msg，没有错返回undefined
const errorMsg = validator.valid()
console.log(errorMsg)
```
