import * as React from 'react';
import {
	LiveEditor as BaseLiveEditor,
	LiveEditorProps as BaseLiveEditorProps,
} from 'react-live';
import { OmitRef } from '../types';
import styled from 'styled-components';

const isMacLike =
	'navigator' in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

interface LiveEditorState {
	focusEditor: boolean;
}
export interface LiveEditorProps extends BaseLiveEditorProps {}
/**
 * A wrapper around the default LiveEditor from react-live
 * Fixes focus state problems where mdx-deck and react-live don't get along
 * maybe not needed when this PR is merged:
 * https://github.com/FormidableLabs/react-live/pull/77
 *
 * Passes all valid params down to the LiveEditor from react-live
 */
export class LiveEditor extends React.PureComponent<
	LiveEditorProps,
	LiveEditorState
> {
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
	 * Mimicks Monaco edtor:
	 * https://github.com/Microsoft/monaco-editor/wiki/Monaco-Editor-Accessibility-Guide#tab-trapping
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
		const { ...rest } = this.props;

		return (
			<StyledEditorContainer
				onFocus={this.focusEditor}
				onClick={this.focusEditor}
				onBlur={this.blurEditor}
				onKeyDown={this.blurOnKeyCombo}
			>
				<StyledBaseLiveEditor
					contentEditable={focusEditor}
					// we have to remove 'ref' prop to make TypeScript happy ¯\_(ツ)_/¯
					{...rest as OmitRef<BaseLiveEditorProps>}
				/>
			</StyledEditorContainer>
		);
	}
}

const StyledBaseLiveEditor = styled(BaseLiveEditor)`
	height: 100%;
	max-height: 100vh;
	overflow: auto;
`;

const StyledEditorContainer = styled.div`
	width: 50%;
`;
