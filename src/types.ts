export type Country = {
  name: string

  capital: string[]
  languages: {
    [name: string]: string
  }
  currencies: {
    [name: string]: {
      name: string
    }
  }
  population: number
  flags: {
    png: string
  }
}

export type countriesState = {
  countryData: Country[]
  countryDataRef: Country[]
  isLoading: boolean
  error: boolean
}

export type AppState = {
  countries: countriesState
}

export type Sort<T> = {
  a: Country
  b: Country
  key: T
  sortBy: 'asc' | 'desc'
}

export type HeaderProps = {
  tableHeaders: {
    label: string
    isClickable: boolean
    action: () => void
  }[]
}
