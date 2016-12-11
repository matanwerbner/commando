import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import CommandsList from './commandsList';

@inject('AppState', 'Routing')
@observer
class CategoryPage extends Component {
     constructor(props) {
        super(props);
        this._onCommandClicked = this._onCommandClicked.bind(this);
    }

    _onCommandClicked(command) {
        this.props.Routing.push(`/${this.props.params.category}/${command.name}`);
    }


    componentDidMount() {
        this.props.AppState.fetchCommands(this.props.params.category);
    }
    
    render() {
        const { commands } = this.props.AppState;
        return (
            <div className="categoriesPageContainer">
            <h3>{ this.props.params.category } Commands Page</h3>
            { 
                commands && 
                <CommandsList 
                    onClicked={ this._onCommandClicked }
                    commands={ commands } />  }
            </div>
        );
    }
}

export default CategoryPage;