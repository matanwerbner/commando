class FixtureService {
    getCategories() {
        return require('../../fixtures/categories.json');
    }

    getCommands(category) {
        return require('../../fixtures/commands.json');
    }

    getOptions(command) {
        return require('../../fixtures/options.json');
    }
}

export default new FixtureService();