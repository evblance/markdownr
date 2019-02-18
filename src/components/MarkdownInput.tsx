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

## Marking up headings is easy

Markdown allows you to write paragraph text...

...which can be normal, __bold__ or _italic_.

You can easily write ordered lists:
1. Lint code
2. Build project
3. Deploy

and unordered lists:
- Apples
- Oranges
- Watermelons

> You can quote text

and write \`code\` both inline and multiline:

\`\`\`
    foo(): bar {
        return foobar;
    }
\`\`\`

Images can easily be your friend with markdown:

![](https://placekitten.com/150/150)

And finally, you can also markup [links](https://www.npmjs.com/package/marked).
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