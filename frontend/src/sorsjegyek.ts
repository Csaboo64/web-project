export interface Sorsjegyek {
    users: Sorsjegy[]
    total: number
    skip: number
    limit: number
  }
  
  export interface Sorsjegy {
    id: number
    nev: string
    ar: number
    fonyeremeny_millio: number
    nyeresi_esely: number
    kaphato: boolean
    keplink: string
  }
  