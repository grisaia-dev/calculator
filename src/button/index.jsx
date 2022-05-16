import classes from './index.module.scss'

const Button = ({ label, position, width, backColor, ...props }) => {
  const styles = {}
  if (position) {
    styles.gridColumnStart = position[0] + 1
    styles.gridRowStart = position[1] + 1
    if (width) {
      styles.gridColumnEnd = `span ${width}`
    }
    if (backColor) {
      styles.background = `${backColor}`
      styles.color = 'black'
    }
  }

  return (
    <button {...props} className={classes.myBtnDef} style={styles}>{label}</button>
  )
}
export default Button
