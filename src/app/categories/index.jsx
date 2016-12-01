import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import CategoryList from './categoryList';
import './categoriesPage.scss';

@inject('routing', 'categories')
@observer
class CategoriesPage extends Component {

    constructor(props) {
        super(props);
        this._onCategoryClicked = this._onCategoryClicked.bind(this);
    }

    _onCategoryClicked(category) {
        this.props.routing.push(`/${category.name}`);
    }

    componentDidMount() {
        this.props.categories.fetchCategories();
    }
    
    render() {
        const { categories } = this.props;
        
        return (
            <div className="categoriesPageContainer">
            <h3>All Categories Page</h3>
            { 
                categories.values.length > 0  && 
                <CategoryList 
                    onClicked={ this._onCategoryClicked }
                    categories={ categories.values } />  }
            </div>
        );
    }
}

export default CategoriesPage;