export default function(state = {
  dummyData: [
    {
      product: 'necklace',
      id: 'necklace1',
      price: 30,
      categories: ['jewelry',],
    },
    {
      product: 'pants',
      id: 'pants1',
      price: 20,
      categories: ['apparel'],
    },
    {
      product: 'shoes',
      id: 'shoes1',
      price: 54,
      categories: ['apparel'],
    },
    {
      product: 'watch',
      id: 'watch1',
      price: 15,
      categories: ['jewelry'],
    },
    {
      product: 'pillow',
      id: 'pillow1',
      price: 15,
      categories: ['home'],
    },
    {
      product: 'shirt',
      id: 'shirt1',
      price: 35,
      categories: ['apparel'],
    },
    {
      product: 'covers',
      id: 'covers1',
      price: 50,
      categories: ['home'],
    },

  ],
}, action) {
  if(action.type === 'DRAG_AND_DROP'){
    //clone initial state
    const stateCopy = state.dummyData.slice(0)
    const productID = action.payload[0]
    let selectedProduct
    let selectedIndex
    //find selected product in state
    stateCopy.forEach((product, i) => {
      if(productID === product.id){
        selectedProduct = product
        selectedIndex = i
      }
    })
    //add new category to product
    if(!selectedProduct.categories.includes(action.payload[2])){
      selectedProduct.categories.push(action.payload[2])
    }

    //add product to state copy
    stateCopy[selectedIndex] = selectedProduct
    //replace state with new one
    return Object.assign({}, state, {
      dummyData: stateCopy,
    })
    //console.log('state', state.dummyData)
  }

  return state;
}
