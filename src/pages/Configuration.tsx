import '../assets/css/Configuration.css'
import AddButton from '../components/AddButton'
import ConfigsGrid from '../components/ConfigsGrid'
import AddConfigurationItemModal from '../components/Modals/AddConfigurationItemModal'

const Configuration = () => {
  return (
    <>
     <ConfigsGrid />
     <AddButton />
     <AddConfigurationItemModal />
    </>
     
  )
}
export default Configuration
