import React, {Component} from 'react';
import AppState from '../../state';
import { observer } from 'mobx-react';

@observer
class CategoryPage extends Component {
    componentDidMount() {
        AppState.fetchCategories();
    }
    
    render() {
        return (
            <div>
            <h3>{ this.props.params.category }</h3>
            </div>
        );
    }
}

export default CategoryPage;