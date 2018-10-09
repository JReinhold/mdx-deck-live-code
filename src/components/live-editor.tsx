import * as React from 'react';
import { LiveEditor as LiveEditorBase } from 'react-live';

interface LiveEditorState {
	focusEditor: boolean;
}

const isMacLike =
	'navigator' in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

export class LiveEditor extends React.PureComponent<{}, LiveEditorState> {
	state = { focusEditor: true };

	focusEditor = () => {
		this.setState({ focusEditor: true });
	};
	blurEditor = () => {
		this.setState({ focusEditor: false });
	};

	/**
	 * remove focus from editor when user presses:
	 * - Escape
	 * - CTRL + M (Windows and Linux)
	 * - CTRL + SHIFT + M (Mac)
	 */
	blurOnKeyCombo: React.KeyboardEventHandler<HTMLDivElement> = event => {
		if (
			event.key === 'Escape' ||
			(event.key === 'M' &&
				event.ctrlKey &&
				(isMacLike ? event.shiftKey : true))
		) {
			this.blurEditor();
		}
	};

	render() {
		const { focusEditor } = this.state;

		return (
			<div
				onFocus={this.focusEditor}
				onClick={this.focusEditor}
				onBlur={this.blurEditor}
				onKeyDown={this.blurOnKeyCombo}
			>
				<LiveEditorBase contentEditable={focusEditor} />
			</div>
		);
	}
}
