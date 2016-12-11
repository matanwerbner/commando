import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import OptionsList from './optionsList';
import { browserHistory } from 'react-router'
import CommandLine from './commandLine';
import './commandPage.scss';

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
            <div className="commandPageContainer">
           <div className="optionsListContainer">
             { 
                options.values.length > 0 && 
                <OptionsList 
                    options={ options.values } />  
            }</div>
            <div className="commandLineContainer">
             <CommandLine command={ this.props.params.command } />
            </div>
            </div>
        );
    }
}

export default CommandPage;