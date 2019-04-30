import { isFunction } from './utils'

export const hookBuilder = (combineFuncs) => {
  const blackSheepIndex = combineFuncs.findIndex(fn => !isFunction(fn))
  if (blackSheepIndex !== -1) {
    throw Error(`
      Expects function,
      got a: ${typeof combineFuncs[blackSheepIndex]}
      on index: ${blackSheepIndex}
    `)
  }

  const FuncCtor = Function

  const body = combineFuncs.map((_fn, index) => `
    const state${index + 1} = {
      ...state${index},
      ...funcs[${index}](state${index}, props),
    };
  `).join('\n')

  const template = `
    const state0 = {};
    ${body}
    return state${combineFuncs.length};
  `

  return new FuncCtor('funcs', 'props', template)
    .bind(null, combineFuncs)
}
