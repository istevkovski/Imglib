import { downloadBlob, filterArrayFromDuplicates } from '../../lib/functions'

export const updateActiveImages = (payload) => ({
	type: 'UPDATE_ACTIVE_IMAGES',
	payload
})

export const removeSelectedImage = () => ({
	type: 'REMOVE_IMAGE'
})

export const restoreSelectedImage = () => ({
	type: 'RESTORE_IMAGE'
})

export const updateSelectedImage = (object) => ({
	type: 'UPDATE_SELECTED_IMAGE',
	payload: object
})

export function handleFetchBaseImages () {
	return async (dispatch) => {
		await fetch('./dbfetch.txt')
			.then(res => res.json())
			.then(async data => {
				let imageArray = filterArrayFromDuplicates(data);
				const asyncRes = await Promise.all(imageArray.map(async item => {
					return {
						...item,
						blob: URL.createObjectURL(await downloadBlob(item.url))
					}
				}))
				if (data) dispatch(updateActiveImages(asyncRes))
			})
	}
}