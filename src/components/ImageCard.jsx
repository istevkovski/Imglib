import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { CheckmarkIcon } from '../lib/icons';
import { updateSelectedImage } from '../redux/actions/libraryActions';
import { useDispatch, useSelector } from 'react-redux';

export default function ImageCard ({
	name,
	imgUrl,
	keyId,
	indexId
}) {
	const selectedImage = useSelector(state => state.library.selectedImage);
	const [selected, setSelected] = useState(selectedImage.id === indexId);

	const dispatch = useDispatch();

	function handleSelectImageCard () {
		dispatch(updateSelectedImage(selected ? '' : { indexId, keyId, imgUrl }));
	}

	useEffect(() => {
		setSelected(selectedImage.id === indexId)
	}, [selectedImage.id, indexId])

	return (
		<div
			className={classNames([
				"imagecard",
				{
					"imagecard--selected": selected
				}
			])}
			onClick={handleSelectImageCard}
		>
			<div className="imagecard__image">
				<img src={imgUrl} alt={name}/>
			</div>
			<h2>{name}</h2>
			<CheckmarkIcon />
		</div>
	)
}