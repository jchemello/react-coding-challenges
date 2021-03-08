import React, { useState } from 'react'
import { ClassRocket, FunctionalRocket } from './Rocket'
import '../styles/_launchpad.scss'

export default function LaunchPad() {
  const [rerenderCount, triggerRerender] = useState(0)

  setTimeout(() => {
    // triggerRerender(rerenderCount + 1)
  }, 500)

  return (
    <div className="launchpad">
      <FunctionalRocket />
    </div>
  )
}

//? El componente LaunchPad se renderiza infinitamente porque se modifica su estado cada 500ms, eliminando el setter triggerRerender o setteando el mismo valor ya existente se puede impedir el re-render. Esto pasa porque al actualizarse un estado de un componente React por defecto renderiza nuevamente el mismo y sus componentes hijos.
