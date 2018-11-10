import * as React from 'react';
import {
	LiveProvider,
	LiveError,
	LiveProviderProps,
	LivePreview,
} from 'react-live';
import styled, { withTheme } from 'styled-components';
import { LiveEditor, LiveEditorProps } from './live-editor';
import { OmitRef } from '../types';

interface Props {
	code?: string;
	title?: string;
	size?: Size;
	errors?: boolean;
	providerProps?: OmitRef<LiveProviderProps>;
	editorProps?: OmitRef<LiveEditorProps>;
	previewProps?: OmitRef<React.HTMLProps<HTMLDivElement>>;
	errorProps?: OmitRef<React.HTMLProps<HTMLDivElement>>;
	theme: any;
}
type Size = 'small' | 'medium' | 'large' | 'fullscreen';

/**
 * A high level component to quickly add live coding abilities
 */
const LiveCodeBase: React.SFC<Props> = ({
	code = '<p>🙋‍♀️ 🌍</p>',
	size = 'medium',
	errors = true,
	providerProps,
	title,
	editorProps,
	previewProps,
	errorProps,
}) => {
	return (
		<LiveProvider code={code} {...providerProps}>
			<LiveDeck size={size}>
				{title && !(size === 'fullscreen') && <p>{title}</p>}
				<LiveContainer size={size}>
					<StyledLivePreview {...previewProps} />
					<StyledLiveEditor {...editorProps} />
					{errors && <StyledLiveError {...errorProps} />}
				</LiveContainer>
			</LiveDeck>
		</LiveProvider>
	);
};

export const LiveCode = withTheme(LiveCodeBase);

/* TODO
- better style handling of LiveEditor
- support differet deck themes
- examples:
 - types of code (plain, react function, etc.)
 - usage of low level comps to create vertical layout 
- document stuff
 - theming
 - (low level components doen't apply global theme)
- ⛴
*/

const LiveDeck = styled.div<{ size: Size }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: ${({ size }) => (size === 'fullscreen' ? '0' : '1em')};
	${({ size }) => {
		switch (size) {
			case 'small':
				return 'width: 60vw; height: 70vh';
			case 'medium':
				return 'width: 80vw; height: 90vh';
			case 'large':
			case 'fullscreen':
				return 'width: 100vw; height: 100vh;';
		}
	}};
`;

// prettier-ignore
const LiveContainer = styled.div<{ size: Size }>`
	width: 100%;
	height: 100%;
	display: flex;
	overflow: hidden;
	position: relative;
	
	${({size}) => size !== 'fullscreen' &&
		`box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
		border-radius: 0.25rem;`
	}
	${props => props.theme.liveCode && props.theme.liveCode.container} 
`;

// add extra spacing at the bottom, to make sure no code are ever obscured by the error element
const StyledLiveEditor = styled(LiveEditor)`
	padding-bottom: 5rem !important;
`;

const StyledLivePreview = styled(LivePreview)`
	width: 50%;
	background: white;
	${props => props.theme.liveCode && props.theme.liveCode.preview};
`;

const StyledLiveError = styled(LiveError)`
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 0.125em;
	background: #280000;
	border: 2px solid #5c0000;
	color #ff8080;
	font-family: monospace;
	font-size: 0.75em;
	height: 5rem;
	overflow-y: auto;
	resize: vertical;
	${props => props.theme.liveCode && props.theme.liveCode.error} 
`;
