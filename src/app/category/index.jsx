import React, {Component} from 'react';
const AppState = require('../../state');
import { observer } from 'mobx-react';
import CommandsList from './commandsList';
import { browserHistory } from 'react-router'

@observer
class CategoryPage extends Component {
     constructor(props) {
        super(props);
        this._onCommandClicked = this._onCommandClicked.bind(this);
    }

    _onCommandClicked(command) {
        debugger;
        browserHistory.push(`/${this.props.params.category}/${command.name}`);
    }

    componentDidMount() {
        AppState.fetchCommands(this.props.params.category);
    }
    
    render() {
        return (
            <div className="categoriesPageContainer">
            <h3>{ this.props.params.category } Commands Page</h3>
            { 
                AppState.commands.length > 0 && 
                <CommandsList 
                    onClicked={ this._onCommandClicked }
                    commands={ AppState.commands } />  }
            </div>
        );
    }
}

export default CategoryPage;