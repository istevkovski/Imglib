import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { setActiveTab } from '../redux/actions/generalActions';

export default function ImageViewControls () {
	// General
	const tab = useSelector(state => state.general.tab);

	const dispatch = useDispatch();

	return (
		<div className="imageViewControls">
			<div
				className={classNames(
					'imageViewControls__option',
					{ 'imageViewControls__option--active': tab === 'active' }
				)}
				onClick={() => dispatch(setActiveTab('active'))}
			>
				<p>Active</p>
			</div>
			<div
				className={classNames(
					'imageViewControls__option',
					{ 'imageViewControls__option--active': tab === 'deleted' }
				)}
				onClick={() => dispatch(setActiveTab('deleted'))}
			>
				<p>Deleted</p>
			</div>
		</div>
	)
}