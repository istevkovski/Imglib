const libraryReducerState = {
	activeImages: [],
	deletedImages: [],
	selectedImage: {
		key: '',
		id: undefined,
		url: ''
	},
}

const libraryReducer = (state = libraryReducerState, action) => {
	switch(action.type) {
		case 'UPDATE_ACTIVE_IMAGES':
			return {
				...state,
				activeImages: action.payload
			}
		case 'REMOVE_IMAGE':
			let deletedImage;
			return {
				...state,
				activeImages: state.activeImages.filter((item, index) => {
					if(index === state.selectedImage.id) deletedImage = item;
					return index !== state.selectedImage.id
				}),
				deletedImages: [...state.deletedImages, deletedImage],
				selectedImage: {...libraryReducerState.selectedImage}
			}
		case 'RESTORE_IMAGE':
			let restoredImage;
			return {
				...state,
				deletedImages: state.deletedImages.filter((item, index) => {
					if(index === state.selectedImage.id) restoredImage = item;
					return index !== state.selectedImage.id
				}),
				activeImages: [...state.activeImages, restoredImage],
				selectedImage: {...libraryReducerState.selectedImage}
			}
		case 'UPDATE_SELECTED_IMAGE':
			return {
				...state,
				selectedImage: {
					key: action.payload.keyId,
					id: action.payload.indexId,
					url: action.payload.imgUrl
				}
			}
		// Shared actions
		case 'SET_ACTIVE_TAB':
			return {
				...state,
				selectedImage: {...libraryReducerState.selectedImage}
			}
		default: return state
	}
}

export default libraryReducer;