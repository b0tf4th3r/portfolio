export type RelationOption = {
  value: number
  label: string
}

export type StringOption = {
  value: string
  label: string
}

export type GroupedRelationOption = {
  options: RelationOption[]
  label: string
}

export type GroupedStringOption = {
  options: StringOption[]
  label: string
}
