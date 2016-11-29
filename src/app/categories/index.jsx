import React, {Component} from 'react';
import AppState from '../../state';
import { observer } from 'mobx-react';
import CategoryList from './categoryList';
import './categoriesPage.scss';
import { browserHistory } from 'react-router'

@observer
class CategoriesPage extends Component {

    constructor(props) {
        super(props);
        this._onCategoryClicked = this._onCategoryClicked.bind(this);
    }

    _onCategoryClicked(category) {
        browserHistory.push(`/${category.name}`);
    }

    componentDidMount() {
        AppState.fetchCategories();
    }
    
    render() {
        return (
            <div className="categoriesPageContainer">
            <h3>All Categories Page</h3>
            { 
                AppState.categories && 
                <CategoryList 
                    onClicked={ this._onCategoryClicked }
                    categories={ AppState.categories } />  }
            </div>
        );
    }
}

export default CategoriesPage;