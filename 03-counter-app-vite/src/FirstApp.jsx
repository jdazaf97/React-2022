

//importar proptypes
import PropTypes from 'prop-types';

//esportacion y contenido de FirstApp
export const FirstApp = ( {title, subTitle, name} ) => {

  // console.log(props);
  
  return (

    <>
        <h1 data-testid='test-title'> { title } </h1>
        <p>{ subTitle }</p>
        <p>{ subTitle }</p>
        <p>{ name }</p>
        {/* <code>{ JSON.stringify(newMessage) }</code> */}
    </>
  )
}


//definiendo prop types
FirstApp.propTypes = {
  //primera condicion:
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

//definiendo prop default
FirstApp.defaultProps = {
  name: 'Juan felipe Daza',
  // title: 'No hay titulo',
  subTitle: 'No hay subtitulo'
}