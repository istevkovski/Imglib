import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { CheckmarkIcon, DeleteIcon, DiscardIcon, DownloadIcon, RestoreIcon } from '../lib/icons';
import { removeSelectedImage, restoreSelectedImage } from '../redux/actions/libraryActions';
import { useEffect, useState } from 'react';

export default function ActionBar () {
	// General
	const tab = useSelector(state => state.general.tab);
	// Library
	const selectedImage = useSelector(state => state.library.selectedImage);

	const [confirmDelete, setConfirmDelete] = useState(false);

	const dispatch = useDispatch();

	function downloadImage () {
		window.open(selectedImage.url)
	}

	function restoreImage () {
		dispatch(restoreSelectedImage())
	}

	function requestDeleteConfirmation () {
		setConfirmDelete(true);
	}

	function discardDeleteAction () {
		setConfirmDelete(false)
	}

	function removeImage () {
		dispatch(removeSelectedImage())
		setConfirmDelete(false)
	}

	function renderControlsBasedOnTab () {
		if(confirmDelete)
			return (
				<>
				<CheckmarkIcon color='#fff' action={removeImage}/>
				<DiscardIcon color='#fff' action={discardDeleteAction}/>
				</>
			)
		else if (tab === 'active')
			return (
				<>
				<DeleteIcon color='#fff' action={requestDeleteConfirmation} />
				<DownloadIcon color='#fff' action={downloadImage} />
				</>
			)
		else if (tab === 'deleted')
			return (
				<>
				<RestoreIcon color='#fff' action={restoreImage}/>
				</>
			)
	}

	useEffect(() => {
		setConfirmDelete(false)
	}, [selectedImage])

	return (
		<div className={classNames([
			'actionbar',
			{ "actionbar--open": Boolean(selectedImage.key) }
		])}>
			{renderControlsBasedOnTab()}
		</div>
	)
}