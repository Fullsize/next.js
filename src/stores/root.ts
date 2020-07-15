import UserStore from './user';
class RootStore{
	[x:string]:any;
	constructor(initialStore?:any){
		this.userStore=new UserStore();
	}
}
export default RootStore;