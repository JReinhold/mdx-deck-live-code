import * as React from 'react';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import { LiveEditor } from './live-editor';

interface LiveCodeProps {
	code: string;
}

export const LiveCode: React.SFC<LiveCodeProps> = ({code}) => {
	return (
		<LiveProvider code={code}>
			<LiveEditor />
			<LivePreview />
			<LiveError />
		</LiveProvider>
	);
};

LiveCode.defaultProps = {
	code: '<h1>🙋‍♀️ 🌍</h1>'
}