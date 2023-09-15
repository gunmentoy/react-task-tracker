import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <Header className='header'>
        <h1>{title}</h1>
        <Button 
        color='green' 
        text='Add' 
        onClick={onClick}/>
    </Header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.PropTypes = {
    title: PropTypes.string.isRequired,
}

// CSS styling in React
// const headingStyle = {
// color: 'red',
// blackgroundColor: 'black',    
// }

export default Header