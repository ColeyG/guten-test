import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const updateAttribute = (e) => {
		setAttributes({ title: e.target.value });
	}

	return (
		<div {...useBlockProps()}>
			<p>Title:</p>
			<input type="text" value={attributes.title} onChange={(e) => updateAttribute(e)} />
		</div>
	);
}
