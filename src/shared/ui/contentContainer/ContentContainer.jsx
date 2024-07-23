import './contentContainer.scss';

const ContentContainer = ({ children }) => {

  return (
    <div className='contentContainer'>
      {children}
    </div>
  )
}

export default ContentContainer;