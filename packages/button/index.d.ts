declare module "@ezfe/button" {
  import {defineComponent} from 'vue'
  const Button: ReturnType<typeof defineComponent>
  export default Button
}



//declare module "@ezfe/button" {
//  //import {defineComponent} from 'vue'
//  //const Button: ReturnType<typeof defineComponent> & ({
//  //  name: string,
//  //}): JSX.Element
//
//  //interface HTMLProps<T> {
//  //  block?:string;
//  //  element?:string;
//  //  modifiers?:string;
//  //}
//
//  //export default Button
//  //export default function Button (props: {
//  //  name: string,
//  //  size: number,
//  //  qq: number
//  //}): HTMLElement
//  import {defineComponent} from 'vue'
//  const Button: ReturnType<typeof defineComponent> & {
//    str?: string
//  } & Element
//}
