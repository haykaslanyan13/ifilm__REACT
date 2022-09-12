import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import Movie from '../../components/movie/movie.component'
import DataPagination from '../../components/pagination/pagination.component'
import { usePopulars } from '../../hook/api/populars.hook'
import { usePagination } from '../../hook/ui/pagination.hook'
import { RootState } from '../../store/store'
import Styles from './movies.view.styles'

const MoviesView = () => {
  const { page, onPage } = usePagination()
  const { mode, language } = useSelector((state: RootState) => state.settings)
  const FieldRef = useRef<any>(null)
  const { populars } = usePopulars({
    language: language.key,
    page
  })
  const [data, setData] = useState<any>(populars)

  useEffect(() => {
    Object.keys(populars).length && setData(populars)
  }, [populars])

  const scrollIntoView = () => {
    setTimeout(() => {
      FieldRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      })
    }, 500)
  }

  return (
    <Styles ref={FieldRef}>
      <DataPagination total={1000} perPage={20} onPage={onPage} page={page} />
      <div className="MoviesView__movie-container">
        {data?.results?.map((movie: any, key: number) => {
          return (
            <Movie
              id={movie.id}
              rating={movie.vote_average}
              src={movie.poster_path}
              key={key}
              title={movie.title}
            />
          )
        })}
      </div>
      <DataPagination
        total={1000}
        perPage={20}
        onPage={(page: number) => {
          scrollIntoView()
          onPage(page)
        }}
        page={page}
      />
    </Styles>
  )
}

export default MoviesView
