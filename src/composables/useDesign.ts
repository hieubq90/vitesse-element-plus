import variables from '~/styles/variables.module.scss'

export function useDesign() {
  const scssVariables = variables

  /**
   * @param scope class name
   * @returns return space name-class name
   */
  const getPrefixCls = (scope: string) => {
    return `${scssVariables.VNamespace}-${scope}`
  }

  return {
    variables: scssVariables,
    getPrefixCls,
  }
}
