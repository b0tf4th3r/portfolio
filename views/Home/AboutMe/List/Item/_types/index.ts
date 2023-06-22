import { useList } from '../../_hooks/useList'

export type ListItemProps = {
  item: ReturnType<typeof useList>['items'][0]
}
