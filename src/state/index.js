import { observable } from 'mobx';
import DAL from '../services';
class AppState {
  @observable categories = [];
  @observable commands = [];
  @observable options = [];


  constructor() {
  }

  resetTimer() {
  }

  fetchCategories() {
      this.categories = DAL.getCategories();
  }

  fetchCommands(category) {
    this.commands = DAL.getCommands(category);
  }

  fetchOptions(command) {
    this.options = DAL.getOptions(command);
  }
}

const state = new AppState();

module.exports = state;