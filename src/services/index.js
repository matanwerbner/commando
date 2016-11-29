import Fixtures from './Fixtures';
import Api from './Api';

 class dal {

    getCategories() {
        return Fixtures.getCategories();
    }

};

export default new dal();