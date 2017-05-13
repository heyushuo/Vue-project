import {normalTime,b} from './normalTime.js'


//这样写报错了
//可以在js文件中混用require和export。
//但是不能混用import 以及module.exports。
//module.exports = {
//	normalTime
//};

export default {
	normalTime
}


