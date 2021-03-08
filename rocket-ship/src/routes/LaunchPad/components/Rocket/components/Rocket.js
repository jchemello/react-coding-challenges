import React, { useState, Component } from 'react'
import RocketCore from './RocketCore'

export function FunctionalRocket() {
  const [initialLaunchTime] = useState(Date.now())

  return <RocketCore initialLaunchTime={initialLaunchTime} />
}

export class ClassRocket extends Component {
  constructor() {
    super()

    this.state = {
      initialLaunchTime: Date.now()
    }
  }

  render() {
    const { initialLaunchTime } = this.state

    return <RocketCore initialLaunchTime={initialLaunchTime} />
  }
}

//? Acá podría hacer lo mismo en el FunctionalRocket o en el ClassRocket, si modificamos los estados initialLaunchTime de ambos a un valor constante y no que varié con el tiempo como pasa con Date.now() ya no se harán re-render ni tampoco pasaran el estado actualizado al componente RocketCore.
