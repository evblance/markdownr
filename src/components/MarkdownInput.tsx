import React, { Component } from 'react';
import styled from 'styled-components';

interface MdInputProps {
    onUpdateMarkdown: Function,
}

interface MdInputState {
    markdown: string,
}

const placeholder: string =
`
# Getting started

## We can Markdown heading levels by preceding text with one or more \#'s

Plain text will be translated to normal paragraph text, but we can also make text __strong__ or _emphasised_.

Ordered list come naturally...
1. Lint code
2. Build project
3. Deploy

...as do unordered lists:
- Apples
- Oranges
- Watermelons

> With Markdown we can blockquote

and represent code both \`inline\` and multiline like so:

\`\`\`
    foo(): bar {
        return foobar;
    }
\`\`\`

Images can easily be our friend with Markdown:

![](https://placekitten.com/150/150)

Last but not least, we can of course Markdown [links](https://www.npmjs.com/package/marked).
`;

export class MarkdownInput extends Component<MdInputProps, MdInputState> {
    constructor(props: MdInputProps) {
        super(props);
        this.state = {
            markdown: placeholder,
        };
        this.onChangeMarkdown = this.onChangeMarkdown.bind(this);
    }

    componentDidMount(): void {
        this.props.onUpdateMarkdown(placeholder);
    }

    onChangeMarkdown(event: any): void {
        this.setState({
            markdown: event.target.value,
        });
        this.props.onUpdateMarkdown(event.target.value);
    }

    render(): JSX.Element {
        return (
            <StyledTextArea
                id="editor"
                onChange={this.onChangeMarkdown}
                value={this.state.markdown}
                placeholder="Write your markdown here..."
            />
        );
    }
}

export default MarkdownInput;

const StyledTextArea = styled.textarea`
    position: absolute;
    left: 0;
    top: 50;
    border: none;
    width: 50vw;
    height: calc(100vh - 50px);
    margin: 0;
    padding: 1rem;
    resize: vertical;
`;