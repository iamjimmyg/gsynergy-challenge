export function updateCategory(id, categories, droppedIn) {
  return {
    type: 'DRAG_AND_DROP',
    payload: [id, categories, droppedIn],
  }
}
