export default{
	//主意点这里的函数名字不能和mutations里的函数名字一样,---------------不能一样------
	headShow:(state)=>{
		return state.header;
	},
	loading:(state)=>{
		return state.loading;
	},
	
}
