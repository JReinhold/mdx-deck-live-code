<div style={{ textAlign: 'left', fontSize: '0.8em', wordWrap: 'break-word' }}>
	You can reference external files as code, instead of defining the code inline.
	<ol>
		<li>
			Install the <code>raw-loader</code> package
		</li>
		<ul>
			<li>
				<code>npm install raw-loader</code>
			</li>
		</ul>
		<li>
			Use the <code>raw-loader</code> in the <code>LiveCode</code> component
		</li>
		<li>
			Example:
			<pre>
				<code>{`<LiveCode
  code={
    require('!raw-loader!./external-file.js')
  }
/>`}</code>
			</pre>
		</li>
		<li>
			BONUS
			<ul>
				<li>This also makes formatting with Prettier easier</li>
				<li>
					... and makes it possible to have empty lines in the code, which
					usually is not possible when writing the code inline
				</li>
			</ul>
		</li>
	</ol>
</div>;
