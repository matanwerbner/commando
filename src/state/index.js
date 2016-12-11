import {observable, computed} from "mobx";

class AppState {
    constructor(Dal, Routing) {
        this.Dal = Dal;
        this.Routing = Routing;
    }

    @observable options: []
    @observable categories: []
    @observable commands: []
    @observable selectedCategory: null
    @observable selectedCommand: null

    @computed get commandLine() {
        return `${this.selectedCommand.name}`;
    }

    fetchCommands(category) {
        this.commands = this.Dal.getCommands(category);
    }

    fetchCategories() {
        this.categories = this.Dal.getCategories();
    }

    fetchOptions(category, command) {
        this.options = this.Dal.getOptions(category, command);
    }

    loadFromLocation({category, command}) {
        category && (this.selectedCategory = this.Dal.fetchCategory(category));
        command && (this.selectedCommand = this.Dal.fetchCommand(category, command));
    }
}

module.exports = AppState;