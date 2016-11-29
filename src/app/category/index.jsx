import React, {Component} from 'react';
import AppState from '../../AppState.js';
import { observer } from 'mobx-react';

@observer
class CategoryPage extends Component {
    render() {
    return (
            <div>
            <h3>{ this.props.params.category }</h3>
            { AppState.timer }
            </div>
        );
    }
}

export default CategoryPage;