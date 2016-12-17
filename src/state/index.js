import {observable, computed} from "mobx";

class AppState {
    constructor(Dal, Routing) {
        this.Dal = Dal;
        this.Routing = Routing;
    }

    _options : null
    _categories : null
    _commands : null
    @observable
    selectedCategory : null
    @observable
    selectedCommand : null

    @computed get commandLine() {
        return `${this.selectedCommand.name}`;
    }

    @computed get commands() {
        if (!this._commands) {
            this._commands = this
                .Dal
                .getCommands(this.selectedCategory.name);
        }
        return this._commands;
    }

    @computed get categories() {
        if (!this._categories) {
            this._categories = this
                .Dal
                .getCategories();
        }
        return this._categories;
    }

    @computed get options() {
        if (!this._options) {
            this._options = this
                .Dal
                .getOptions(this.selectedCategory.name, this.selectedCommand.name);
        }
        return this._options;
    }

    loadFromLocation({category, command}) {
        this._options = this._categories = this._commands = null;
        category && (this.selectedCategory = this.Dal.fetchCategory(category));
        command && (this.selectedCommand = this.Dal.fetchCommand(category, command));
    }
}

module.exports = AppState;