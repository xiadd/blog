/**
 * 用来配合webpac做代码分割
 * @author xiadd
 */
import React, { Component } from 'react'
import NProgress from 'nprogress'

export default function asyncComponent (importComponent) {
  class AsyncComponent extends Component {
    constructor (props) {
      super(props)
      this.state = {
        component: null
      }
    }

    componentWillUnmount () {
      NProgress.start()
    }

    async componentDidMount () {
      const { default: component } = await importComponent()
      await this.setState({
        component: component
      })
      NProgress.done()
    }

    render () {
      const C = this.state.component

      return C ? <C {...this.props} /> : null
    }
  }

  return AsyncComponent
}