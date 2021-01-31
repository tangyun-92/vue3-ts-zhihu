import SvgIcon from '@/components/SvgIcon/index.vue' // svg组件

const req = require.context('./svg', false, /\.svg$/)
const requireAll: Function = (requireContext: any) =>
  requireContext.keys().map(requireContext)
requireAll(req)

export default {
  install: (app: any) => {
    app.component('SvgIcon', SvgIcon)
  }
}
