import * as React from 'react';
import {
	LiveProvider,
	LiveError,
	LivePreview,
	LiveProviderProps,
} from 'react-live';
import { LiveEditor, LiveEditorProps } from './live-editor';
import { OmitRef } from '../types';

interface LiveCodeProps {
	code: string;
	providerProps: OmitRef<LiveProviderProps>;
	editorProps: OmitRef<LiveEditorProps>;
	previewProps: OmitRef<React.HTMLProps<HTMLDivElement>>;
	errorProps: OmitRef<React.HTMLProps<HTMLDivElement>>;
}

/**
 * A high level component to quickly add live coding abilities
 */
export const LiveCode: React.SFC<LiveCodeProps> = ({
	code,
	providerProps,
	editorProps,
	previewProps,
	errorProps,
}) => {
	return (
		<div>
			<LiveProvider code={code} {...providerProps}>
				<LiveEditor {...editorProps} />
				<LivePreview {...previewProps} />
				<LiveError {...errorProps} />
			</LiveProvider>
		</div>
	);
};

LiveCode.defaultProps = {
	code: '<h1>🙋‍♀️ 🌍</h1>',
};
