import Fixtures from './Fixtures';
import Api from './Api';

 class dal {

    getCategories() {
        return Fixtures.getCategories();
    }

    getCommands(category) {
        return Fixtures.getCommands(category);
    }

    getOptions(command) {
        return Fixtures.getOptions(command);
    }

};

export default new dal();