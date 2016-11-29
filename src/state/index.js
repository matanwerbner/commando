import { observable } from 'mobx';
import DAL from '../services';
class AppState {
  @observable categories = null;
  @observable commands = null;
  @observable options = null;


  constructor() {
  }

  resetTimer() {
  }

  fetchCategories() {
      this.categories = DAL.getCategories();
  }
}

export default new AppState();