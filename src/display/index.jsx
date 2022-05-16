import classes from './index.module.scss'

const Display = ({ position, width }) => {
  const styles = {}
  if (styles) {
    styles.gridColumnStart = position[0] + 1
    styles.gridRowStart = position[1] + 1
  }
  if (width) {
    styles.gridColumnEnd = `span ${width}`
  }
  return (
    <div className={classes.display} style={styles}>45</div>
  )
}

export default Display
