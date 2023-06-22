import { useFilters } from '../../_hooks/useFilters'
import { useList } from '../../_hooks/useList'

export type ProjectsFiltersProps = {
  filters: ReturnType<typeof useFilters>
}
