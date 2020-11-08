import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleFetchBaseImages } from '../redux/actions/libraryActions';
import ActionBar from './ActionBar';
import ImageView from './ImageView';
import ImageViewControls from './ImageViewControls';

function Imglib() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleFetchBaseImages());
	}, [dispatch]);

	return (
		<>
		<header>
			<div className="wrapper">
				<h1>My Library</h1>
			</div>
		</header>
		<main className="main">
			<div className="wrapper isrelative">
				<ImageViewControls />
				<ImageView />
				<ActionBar />
			</div>
		</main>
		</>
	);
}

export default Imglib;
