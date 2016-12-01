import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import CommandsList from './commandsList';
import { browserHistory } from 'react-router'

@inject('routing', 'commands')
@observer
class CategoryPage extends Component {
     constructor(props) {
        super(props);
        this._onCommandClicked = this._onCommandClicked.bind(this);
    }

    _onCommandClicked(command) {
        this.props.routing.push(`/${this.props.params.category}/${command.name}`);
    }

    componentDidMount() {
        this.props.commands.fetchCommands(this.props.params.category);
    }
    
    render() {
        const { commands } = this.props;
        return (
            <div className="categoriesPageContainer">
            <h3>{ this.props.params.category } Commands Page</h3>
            { 
                commands.values.length > 0 && 
                <CommandsList 
                    onClicked={ this._onCommandClicked }
                    commands={ commands.values } />  }
            </div>
        );
    }
}

export default CategoryPage;