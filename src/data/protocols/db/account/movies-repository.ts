import { AddMovie, GetMovie, PutMovie, DeleteMovie } from '@/domain/usecases'

export interface AddMovieRepository {
  addMovie: (data: AddMovie.Params) => Promise<void>
}

export interface GetMovieRepository {
  getMovie: (data: GetMovie.Params) => Promise<any>
}

export interface PutMovieRepository {
  putMovie: (data: PutMovie.Params) => Promise<any>
}

export interface DeleteMovieRepository {
  deleteMovie: (data: DeleteMovie.Params) => Promise<any>
}

export namespace AddMovieRepository {
  export type Params = AddMovie.Params
  export type Result = boolean
}

export namespace GetMovieRepository {
  export type Params = GetMovie.Params
  export type Result = any
}

export namespace PutMovieRepository {
  export type Params = any
  export type Result = any
}

export namespace DeleteMovieRepository {
  export type Params = any
  export type Result = any
}
