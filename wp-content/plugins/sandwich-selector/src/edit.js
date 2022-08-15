import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	// const { title } = attributes;

	// const [nodeTitle, setNodeTitle] = useState('');

	// console.log(`Title: ${title}`);

	const updateAttribute = (e) => {
		console.log(e.target.value);

		setAttributes({ title: e.target.value });
	}

	return (
		<div {...useBlockProps()}>
			<p>Title:</p>
			<input type="text" value={attributes.title} onChange={(e) => updateAttribute(e)} />
			{__(
				'Sandwich Selector – hello from the editor!',
				'sandwich-selector'
			)}
		</div>
	);
}
