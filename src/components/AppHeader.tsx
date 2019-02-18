import React, { Component } from 'react';
import styled from 'styled-components';

interface AppHeaderProps { }

interface AppHeaderState { }

export class AppHeader extends Component<AppHeaderProps, AppHeaderState> {
    constructor(props: AppHeaderProps) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (
            <Header>
                <h1>MarkdownR</h1>
            </Header>
        );
    }
}

export default AppHeader;

const Header = styled.header`
    text-align: center;
    height: 50px;

    h1 {
        font: 2rem 'Permanent Marker', sans-serif;
        margin: 0;
        padding: 0;
    }
`