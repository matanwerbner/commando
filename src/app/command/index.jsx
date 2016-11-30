import React, {Component} from 'react';
const AppState = require('../../state');
import { observer } from 'mobx-react';
import OptionsList from './optionsList';
import { browserHistory } from 'react-router'

@observer
class CommandPage extends Component {
     constructor(props) {
        super(props);
    }

    componentDidMount() {
        AppState.fetchOptions(this.props.params.command);
    }
    
    render() {
        return (
            <div className="optionsPageContainer">
            <h3>{ this.props.params.command } Command Page</h3>
            { 
                AppState.options.length > 0 && 
                <OptionsList 
                    options={ AppState.options } />  }
            </div>
        );
    }
}

export default CommandPage;