export interface AddMovie {
  addMovie: (data: AddMovie.Params) => Promise<void>
}

export interface GetMovie {
  getMovie: (data: GetMovie.Params) => Promise<any>
}

export interface PutMovie {
  putMovie: (data: PutMovie.Params) => Promise<any>
}

export interface DeleteMovie {
  deleteMovie: (data: DeleteMovie.Params) => Promise<any>
}

export namespace AddMovie {
  export type Params = {
    movie: string
    type: string
    rate: number
  }

  export type Result = boolean
}

export namespace GetMovie {
  export type Params = {
    movie: string
    type: string
    rate: number
  }

  export type Result = any
}

export namespace PutMovie {
  export type Params = {
    id: string
    movie: string
    type: string
    rate: number
  }

  export type Result = boolean
}

export namespace DeleteMovie {
  export type Params = {
    id: string
  }

  export type Result = boolean
}
