import { find } from 'lodash';

class FixtureService {

    constructor() {
        this.req = require.context("../../fixtures", true, /^(.*\.(js$))[^.]*$/igm);
        this.req.keys().forEach((key) => {
            this.req(key);
        });
    }

    getCategories() {
        return this.req('./index.js');
    }

    getCommands(category) {
        return this.req(`./${category}/index.js`);
    }

    getOptions(category, command) {
        return this.req(`./${category}/${command}/index.js`);
    }

    fetchCategory(category) {
        return find(this.getCategories(), {name: category});
    }

    fetchCommand(category, command) {
        return find(this.getCommands(category), {name: command});
    }
}

export default FixtureService;