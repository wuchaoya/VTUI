import { CreateElement, VNode } from "vue";

export default function cloneElement(
  vnodes: VNode[],
  props: any,
  createElement: CreateElement
) {
  function cloneVNode(vnode: VNode) {
    const clonedChildren =
      vnode.children && vnode.children.map(vnode => cloneVNode(vnode));
    let dataEvent = vnode.data ? vnode.data.on : {};
    const cloned = createElement(
      vnode.tag,
      Object.assign({}, vnode.data, {
        style: props.style,
        on: { ...props.events, ...dataEvent },
        class: props.className
      }),
      clonedChildren
    );
    cloned.text = vnode.text;
    cloned.isComment = vnode.isComment;
    cloned.componentOptions = vnode.componentOptions;
    cloned.elm = vnode.elm;
    cloned.context = vnode.context;
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    return cloned;
  }

  const clonedVNodes = vnodes.map(vnode => cloneVNode(vnode));
  return clonedVNodes;
}
