import { observable, computed } from "mobx";
import DAL from '../services';

class AppState {
    constructor(routingStore) {
        this.routing = routingStore;
    }

    categories = {
        @observable values: [],
        fetchCategories: function() {
            this.values = DAL.getCategories();
        }
    };

    commands = {
        @observable values: [],
        fetchCommands: function(category) {
            this.values = DAL.getCommands(category);
        }
    };

    options = {
        @observable values: [],
        selectedValues: [],
        fetchOptions: function(command) {
            this.values = DAL.getOptions(command);
        }
    };

    @computed get commandLine() {
        return 'sdfsdf';
    }
}

module.exports = AppState;