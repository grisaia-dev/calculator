import { useState } from 'react'
import classes from './app.module.scss'
import Button from './button'
import Display from './display'

function App() {
  const [calc, setCalc] = useState('')
  const ops = ['/', '*', '+', '-', '.']

  const updateCalc = vaLue => {
    if (
      (ops.includes(vaLue) && calc === '') ||
      (ops.includes(vaLue) && ops.includes(calc.slice(-1)))
    ) {
      return
    }
    setCalc(calc + vaLue)
  } 

  const clearDisplay = () => {
    setCalc('')
  }
  
  const deleteLast = () => {
    if (calc == '') {
      return
    }
    const value = calc.slice(0, -1)
    setCalc(value)
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  return (
    <div className={classes.container}>
      <div className={classes.calc}>
        <Display position={[0, 0]} width={4}>{calc || 0}</Display>
        <Button onClick={clearDisplay} label='AC' position={[0, 1]} width={2} backColor='#f45'/>
        <Button  onClick={deleteLast} label='DEL' position={[2, 1]} width={1} backColor='#fa0'/>
        <Button onClick={() => updateCalc('/')} label='/' position={[3, 1]} width={1} backColor='#fa0'/>
        <Button onClick={() => updateCalc('1')} label={1} position={[0, 2]} width={1} backColor={undefined}/>
        <Button onClick={() => updateCalc('2')} label={2} position={[1, 2]} width={1} backColor={undefined}/>
        <Button onClick={() => updateCalc('3')} label={3} position={[2, 2]} width={1} backColor={undefined}/>
        <Button onClick={() => updateCalc('*')} label='*' position={[3, 2]} width={1} backColor='#fa0'/>
        <Button onClick={() => updateCalc('4')} label={4} position={[0, 3]} width={1} backColor={undefined}/>
        <Button onClick={() => updateCalc('5')} label={5} position={[1, 3]} width={1} backColor={undefined}/>
        <Button onClick={() => updateCalc('6')} label={6} position={[2, 3]} width={1} backColor={undefined}/>
        <Button onClick={() => updateCalc('+')} label='+' position={[3, 3]} width={1} backColor='#fa0'/>
        <Button onClick={() => updateCalc('7')} label={7} position={[0, 4]} width={1} backColor={undefined}/>
        <Button onClick={() => updateCalc('8')} label={8} position={[1, 4]} width={1} backColor={undefined}/>
        <Button onClick={() => updateCalc('9')} label={9} position={[2, 4]} width={1} backColor={undefined}/>
        <Button onClick={() => updateCalc('-')} label='-' position={[3, 4]} width={1} backColor='#fa0'/>
        <Button onClick={() => updateCalc('.')} label='.' position={[0, 5]} width={1} backColor={undefined}/>
        <Button onClick={() => updateCalc('0')} label='0' position={[1, 5]} width={1} backColor={undefined}/>
        <Button onClick={calculate} label='=' position={[2, 5]} width={2} backColor='#fa0'/>
      </div>
    </div>
  )
}

export default App
