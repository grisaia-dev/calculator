import classes from './app.module.scss'
import Button from './button'
import Display from './display'

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.calc}>
        <Display position={[0, 0]} width={4}/>
        <Button label='AC' position={[0, 1]} width={2} backColor='#f45'/>
        <Button label='DEL' position={[2, 1]} width={1} backColor='#fa0'/>
        <Button label='/' position={[3, 1]} width={1}backColor='#fa0'/>
        <Button label='1' position={[0, 2]} width={1} backColor={undefined}/>
        <Button label='2' position={[1, 2]} width={1} backColor={undefined}/>
        <Button label='3' position={[2, 2]} width={1} backColor={undefined}/>
        <Button label='*' position={[3, 2]} width={1} backColor='#fa0'/>
        <Button label='4' position={[0, 3]} width={1} backColor={undefined}/>
        <Button label='5' position={[1, 3]} width={1} backColor={undefined}/>
        <Button label='6' position={[2, 3]} width={1} backColor={undefined}/>
        <Button label='+' position={[3, 3]} width={1} backColor='#fa0'/>
        <Button label='7' position={[0, 4]} width={1} backColor={undefined}/>
        <Button label='8' position={[1, 4]} width={1} backColor={undefined}/>
        <Button label='9' position={[2, 4]} width={1} backColor={undefined}/>
        <Button label='-' position={[3, 4]} width={1} backColor='#fa0'/>
        <Button label='.' position={[0, 5]} width={1} backColor={undefined}/>
        <Button label='0' position={[1, 5]} width={1} backColor={undefined}/>
        <Button label='=' position={[2, 5]} width={2} backColor='#fa0'/>
      </div>
    </div>
  )
}

export default App
