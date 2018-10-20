import * as React from 'react';
import {
	LiveProvider,
	LiveError,
	LivePreview,
	LiveProviderProps,
} from 'react-live';
import styled, { withTheme } from 'styled-components';
import { LiveEditor, LiveEditorProps } from './live-editor';
import { OmitRef } from '../types';

interface LiveCodeProps {
	code: string;
	providerProps: OmitRef<LiveProviderProps>;
	editorProps: OmitRef<LiveEditorProps>;
	previewProps: OmitRef<React.HTMLProps<HTMLDivElement>>;
	errorProps: OmitRef<React.HTMLProps<HTMLDivElement>>;
	theme: any;
}

/**
 * A high level component to quickly add live coding abilities
 */
const LiveCodeBase: React.SFC<LiveCodeProps> = ({
	code,
	providerProps,
	editorProps,
	previewProps,
	errorProps,
}) => {
	return (
		<StyledLiveProvider code={code} {...providerProps}>
			<LiveEditor {...editorProps} />
			<StyledLivePreview {...previewProps} />
			<StyledLiveError {...errorProps} />
		</StyledLiveProvider>
	);
};

LiveCodeBase.defaultProps = {
	code: '<h1>🙋‍♀️ 🌍</h1>',
};

const StyledLiveProvider = styled(LiveProvider)`
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
	border-radius: 0.25rem;

	width: 90vw;
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
	grid-template-areas:
		'editor preview'
		'error	error';
	overflow: hidden;
	${props => props.theme.liveCode};
`;

const StyledLivePreview = styled(LivePreview)`
	grid-area: preview;
`;

const StyledLiveError = styled(LiveError)`
	border: 1px solid green;
	grid-area: error;
`;

export const LiveCode = withTheme(LiveCodeBase);
