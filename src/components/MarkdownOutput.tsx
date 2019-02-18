import React, { Component } from 'react';
import styled from 'styled-components';

interface MdOutputProps {
    myHtml: string,
}

interface MdOutputState {}

export class MarkdownInput extends Component<MdOutputProps, MdOutputState> {
    constructor(props: MdOutputProps) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (
            <StyledOutput id="preview" dangerouslySetInnerHTML={{ __html: this.props.myHtml }}/>
        );
    }
}

export default MarkdownInput;

const StyledOutput = styled.div`
    position: absolute;
    right: 0;
    top: 50;
    width: 50vw;
    margin: 0;
    padding: 1rem;
`