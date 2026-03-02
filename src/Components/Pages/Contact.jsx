
import About from './About'
import Coninner from './Coninner'
import Contight from './Conright'

function Contact() {
  return (
   <>
    <About
      title="CONTACT US"
      title2="Our office is located in Paphos, Cyprus"
    
    />
    <div className="flex-col flex md:flex-row"><Coninner/><Contight/></div>
    </>
  )
}

export default Contact