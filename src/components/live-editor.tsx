import * as React from 'react';
import { LiveEditor as LiveEditorBase } from 'react-live';

interface LiveEditorState {
	focusEditor: boolean;
}

export class LiveEditor extends React.PureComponent<{}, LiveEditorState> {
	state = { focusEditor: true };

	focusEditor = () => {
		this.setState({ focusEditor: true });
	};
	blurEditor = () => {
		this.setState({ focusEditor: false });
	};

	render() {
		const { focusEditor } = this.state;

		return (
			<div
				onFocus={this.focusEditor}
				onClick={this.focusEditor}
				onBlur={this.blurEditor}
			>
				<LiveEditorBase contentEditable={focusEditor} />
			</div>
		);
	}
}
