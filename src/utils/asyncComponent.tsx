import React, { Component, ElementType, lazy } from 'react';
// importComponent 是使用 import()的函数
// 定义状态类型时移除 Readonly 或者包含 component 属性
interface MyState {
  component: React.ComponentType<any> | null; // 假设 component 是一个 React 组件
}

function asyncComponent(importComponent) {
  class AsyncComponent extends Component<{}, MyState> {
    component: any;
    constructor(props) {
      super(props);
      this.state = {
        component: null, //动态加载的组件
      };
    }
    componentDidMount() {
      importComponent().then((mod) => {
        this.setState({
          // 同时兼容 ES6 和 CommonJS 的模块
          component: mod.default ? mod.default : mod,
        });
      });
    }
    render() {
      // 渲染动态加载组件
      const C = this.state.component;
      return C ? <C {...this.props}></C> : null;
    }
  }

  return AsyncComponent;
}

function getDemosList() {
  // 编译时获取所有examples组件 方便运行时获取
  const components = import.meta.glob('../demos/**/index.tsx', {
    eager: true,
    import: 'default',
  });

  const list = Object.keys(components).map((k) => {
    const parts = k.split('/');
    const componentName = parts[parts.length - 2];
    const name = componentName || '';
    return {
      name,
      path: k,
    };
  });

  return list;
}

// 根据组件名动态获取组件
function getComponent(name: string) {
  // 编译时获取所有examples组件 方便运行时获取
  const components = import.meta.glob('../demos/**/index.tsx', {
    eager: true,
    import: 'default',
  });

  const Component = components[`../demos/${name}/index.tsx`] as ElementType;
  return Component;
}


//获取所有路由
function getHomeRouters(){
  const views = import.meta.glob('../views/*/*.tsx');

  const list = Object.keys(views).map((k) => {
    const parts = k.split('/');
    const componentName = parts[parts.length - 2];
    const name = componentName || '';
    return {
      name,
      path: k,
      component: lazy(() => views[k]()), // 使用 lazy 加载组件
    };
  });
  return list
}

export { asyncComponent, getComponent, getDemosList,getHomeRouters };
