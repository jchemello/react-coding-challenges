import React, { useState, useEffect } from 'react'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock'
import '../styles/_discover.scss'

import makeRequest from '../api/makeRequest'

export default function Discover() {
  const [newReleases, setNewReleases] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [categories, setCategories] = useState([])

  //? Cree 3 useEffects haciendo 3 llamadas por separado a cada endpoint. Pensé en hacerlo en un solo useEffect y usando async/await no se envía una promesa hasta que se completa la anterior. Con Promise.all() se pueden enviar los 3 fetchs al mismo tiempo pero solo se pinta la información una vez que las 3 están completas asique opté por usar 3 useEffects por separado.

  //? Usé el return del hook para evitar intentos fallidos de update de estado si el componente no está montado.

  //? Podría convertirse el helper makeRequest.js en un custom hook que ya incluya la lógica de loading y si la request falla para no repetir código.

  //? Agregué un Spinner custom bien sencillo mientras se cargan los resultados.

  useEffect(() => {
    let stillMounted = true
    if (!newReleases.length) {
      const fetchReleases = async () => {
        const data = await makeRequest('new-releases')
        if (stillMounted) setNewReleases(data.albums.items)
      }
      fetchReleases()
    }

    return () => {
      stillMounted = false
    }
  }, [newReleases])

  useEffect(() => {
    let stillMounted = true
    if (!categories.length) {
      const fetchCategories = async () => {
        const data = await makeRequest('categories')
        if (stillMounted) setCategories(data.categories.items)
      }
      fetchCategories()
    }

    return () => {
      stillMounted = false
    }
  }, [categories])

  useEffect(() => {
    let stillMounted = true
    if (!playlists.length) {
      const fetchPlaylists = async () => {
        const data = await makeRequest('featured-playlists')
        if (stillMounted) setPlaylists(data.playlists.items)
      }
      fetchPlaylists()
    }

    return () => {
      stillMounted = false
    }
  }, [playlists])

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
      />
    </div>
  )
}
