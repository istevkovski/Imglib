import { useSelector } from 'react-redux'
import ImageCard from './ImageCard';

export default function ImageView () {
	// General
	const tab = useSelector(state => state.general.tab);
	// Library
	const activeImages = useSelector(state => state.library.activeImages);
	const deletedImages = useSelector(state => state.library.deletedImages);

	function renderImageCards () {
		if(tab === 'active' && activeImages.length) {
			return activeImages.map((item, index) => <ImageCard name={item.name} imgUrl={item.blob} indexId={index} keyId={`imgCard_${index}`} key={`imgCard_${index}`} />)
		} else if (tab === 'deleted' && deletedImages.length) {
			return deletedImages.map((item, index) => <ImageCard name={item.name} imgUrl={item.blob} indexId={index} keyId={`imgCard_${index}`} key={`imgCard_${index}`} />)
		}

		return null;
	}

	return (
		<div className="imageview">
			{renderImageCards()}
		</div>
	)
}