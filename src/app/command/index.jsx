import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import OptionsList from './optionsList';
import { browserHistory } from 'react-router'
import CommandLine from './commandLine';

@inject('routing', 'options', 'commandLine')
@observer
class CommandPage extends Component {
     constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.options.fetchOptions(this.props.params.command);
    }
    
    render() {
        const { options, commandLine } = this.props;
        return (
            <div className="optionsPageContainer">
            <h3>{ this.props.params.command } Command Page</h3>
            { 
                options.values.length > 0 && 
                <OptionsList 
                    options={ options.values } />  
            }
            <CommandLine command={ commandLine } />
            </div>
        );
    }
}

export default CommandPage;