import FirstFooter from './Footer/FirstFooter'
import FirstHeader from './Header/FirstHeader'
import SecondFooter from './Footer/SecondFooter'
import SecondHeader from './Header/SecondHeader'

const MainLayout = ({ children }) => {
  return (
    <div>
      <FirstHeader />
      <SecondHeader />
      {children}
      <FirstFooter />
      <SecondFooter />
    </div>
  )
}

export default MainLayout
