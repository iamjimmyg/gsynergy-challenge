export default function(state = {
  dummyData: [
    {
      product: 'necklace',
      price: 30,
      categories: ['jewelry'],
    },
    {
      product: 'pants',
      price: 20,
      categories: ['apparel'],
    },
    {
      product: 'shoes',
      price: 54,
      categories: ['apparel'],
    },
    {
      product: 'watch',
      price: 15,
      categories: ['jewelry'],
    },
    {
      product: 'pillow',
      price: 15,
      categories: ['home'],
    },
    {
      product: 'shirt',
      price: 35,
      categories: ['apparel'],
    },
    {
      product: 'covers',
      price: 50,
      categories: ['home'],
    },

  ],
}, action) {
  //SELECT RESULTS TAB ACTION
  if(action.type === 'DRAG_AND_DROP'){
    console.log('dooo action')
  }

  return state;
}
