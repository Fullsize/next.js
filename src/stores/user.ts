import { action, observable } from 'mobx';

class UserStore {
  @observable name = 'hello world';
  @action setName = (na) => {
    this.name = na;
  };
}
export default UserStore;
