import Canvas from '../canvas'
import Home from './Home'
import Customizer from './Customizer'

const ProductPage = () => {
  return (
    <div className='app transition-all ease-in'>
      {/* contains the title and description */}
      <Home />
      {/* contains the canvas (model)  */}
      <Canvas />
      {/* contains the customizer (editor) */}
      <Customizer />
    </div>
  )
}

export default ProductPage
