import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import CategoryList from './categoryList';
import './categoriesPage.scss';

@inject('AppState', 'Routing')
@observer
class CategoriesPage extends Component {

    constructor(props) {
        super(props);
        this._onCategoryClicked = this._onCategoryClicked.bind(this);
    }

    _onCategoryClicked(category) {
        this.props.Routing.push(`/${category.name}`);
    }

    componentDidMount() {
        this.props.AppState.fetchCategories();
    }
    
    render() {
        const { categories } = this.props.AppState;
        
        return (
            <div className="categoriesPageContainer">
            <h3>All Categories Page</h3>
            { 
                categories && 
                <CategoryList 
                    onClicked={ this._onCategoryClicked }
                    categories={ categories } />  }
            </div>
        );
    }
}

export default CategoriesPage;