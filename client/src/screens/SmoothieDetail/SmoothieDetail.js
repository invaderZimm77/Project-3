import { useState, useEffect } from 'react'
import './SmoothieDetail.css'
import { Layout } from '../../components'
import { getSmoothie, deleteSmoothie } from '../../services/smoothies'
import { useParams, Link } from 'react-router-dom'



const SmoothieDetail = (props) => {
  const [smoothie, setSmoothie] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchSmoothie = async () => {
      const smoothie = await getSmoothie(id)
      setSmoothie(smoothie)
      setLoaded(true)
    }
    fetchSmoothie()
  }, [id])

  if(!isLoaded) {
    return <h1>Loading some refreshing treats....</h1>
  }


  return (
    <Layout user={props.user}>
      <div className="smoothie-detail">
        <div>
          <img
            className="smoothie-detail-image"
            src={smoothie.imageURL} 
            alt={smoothie.title} 
          />
        </div>
        <div className='detail'>
          <div className='title'>{smoothie.title}</div>
          <div className='price'>{`$${smoothie.price}`}</div>
          <div className='description'>{smoothie.description}</div>
          <div className='ingredients'>Ingredients: {smoothie.ingredients}</div>
          {props.user ? 
          <div className='button-container'>
            <Link className='edit-button' to={`/smoothies/${smoothie._id}/edit`}>
              Edit
            </Link>
            <Link to="/smoothies"
              className='delete-button'
              onClick={() => deleteSmoothie(smoothie._id)}>
              Delete
            </Link>
          </div>
          : null}  
        </div>
        
      </div>
    </Layout>
  )
}

export default SmoothieDetail