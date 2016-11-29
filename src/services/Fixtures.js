class FixtureService {
    getCategories() {
        return require('../../fixtures/categories.json');
    }
}

export default new FixtureService();