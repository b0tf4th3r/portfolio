import { useScrollIntoSection } from 'views/Home/_hooks/useScrollIntoSection'

export type TopBarNavigationProps = {
  scrollIntoSection?: ReturnType<typeof useScrollIntoSection>
}
