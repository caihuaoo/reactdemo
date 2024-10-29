// 处理当前路由 获取跟路由

export const handleCurrentRouter = (path: string) => {
  const pathArr = path.split('/')
  return pathArr[1]
}
