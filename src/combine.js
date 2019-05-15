import React from 'react'

import { hookBuilder } from './hook-builder'

import {
  isCombineConfigMode,
  defaultProps as withDefaultProps,
  identity,
  flow
} from './utils'

const combineFromConfig = (config, Component) => {
  const {
    hooks,
    hocs,
    defaultProps,
    transformProps,
    transformPropsBefore,
  } = {
    hooks: [],
    hocs: [],
    transformProps: identity,
    transformPropsBefore: identity,
    ...config,
  }

  const hooksComposition = hookBuilder(hooks)

  const ExtendedComponent = (props) => {
    const transformedProps = transformPropsBefore(props)
    const state = hooksComposition(transformedProps)
    const allProps = { ...transformedProps, ...state }

    return <Component {...transformProps(allProps)} />
  }

  if (defaultProps) {
    withDefaultProps(defaultProps)(ExtendedComponent)
  }

  return flow(...hocs)(ExtendedComponent)
}

export const combine = (...hooks) => (Component) => {
  const ExtendedComponent = isCombineConfigMode(hooks) ?
    combineFromConfig(hooks[0], Component) :
    combineFromConfig({ hooks }, Component)

  ExtendedComponent.displayName = `${Component.displayName || Component.name}Hooked`

  return ExtendedComponent
}
