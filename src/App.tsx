import React, { Component } from 'react';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';
import { AppHeader } from './components/AppHeader';
import './App.scss';
import styled from 'styled-components';
import marked from 'marked';


interface AppState {
    myHtml: string,
}

class App extends Component<any, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            myHtml: ``,
        };
        this.handleMarkdownUpdate = this.handleMarkdownUpdate.bind(this);
    }

    handleMarkdownUpdate(markdown: string): void {
        this.setState({
            myHtml: marked(markdown),
        });
    }

    render(): JSX.Element {
        return (
            <AppWrapper>
                <AppHeader />
                <div className="container">
                    <MarkdownInput onUpdateMarkdown={this.handleMarkdownUpdate} />
                    <MarkdownOutput myHtml={this.state.myHtml} />
                </div>
            </AppWrapper>
        );
    }
}

export default App;

const AppWrapper = styled.div``;
