// 适配插件的声明文件
declare module "postcss-px-to-viewport"{
  type Options = {
    unitToConvert: "px" | "rem" | "cm" | "em"
    viewportWidth: number
    viewportHeight: number
    unitPrecision: number
    viewportUnit: string
    fontViewportUnit: string
    selectorBlackList: string[]
    propList: string[]
    minPixelValue: number
    mediaQuery: boolean
    replace: boolean
    landscape: boolean
    landscapeUnit: string
    landscapeWidth:number
  }
  export default (options:Partial<Options>)=>any 
}
