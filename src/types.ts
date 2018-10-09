/**
 * Type helpers
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// OmitRef is used to fix weird TypeScript errors surrounding the 'ref' prop ¯\_(ツ)_/¯
export type OmitRef<T> = Pick<T, Exclude<keyof T, 'ref'>>;

export type GetComponentProps<T> = T extends
	| React.ComponentType<infer P>
	| React.Component<infer P>
	? P
	: never;
//usage: GetComponentProps<typeof MyComponent>
