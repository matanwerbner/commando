import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import OptionsList from './optionsList';
import { browserHistory } from 'react-router'
import CommandLine from './commandLine';
import './commandPage.scss';

@inject('AppState')
@observer
class CommandPage extends Component {
     constructor(props) {
        super(props);
    }

    

    componentDidMount() {
        this.props.AppState.fetchOptions(
            this.props.params.category, 
            this.props.params.command
        );
    }
    
    render() {
        const { options, commandLine } = this.props.AppState;
        return (
            <div className="commandPageContainer">
           <div className="optionsListContainer">
             { 
                options && 
                <OptionsList 
                    options={ options } />  
            }</div>
            <div className="commandLineContainer">
             <CommandLine command={ commandLine } />
            </div>
            </div>
        );
    }
}

export default CommandPage;