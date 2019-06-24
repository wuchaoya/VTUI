import { Component } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import { Button, TouchFeedback, Icon, NavBar, Drawer } from "@/components";

@Component
export default class Test extends tsx.Component<any> {
  render() {
    return (
      <div style="width: 100%">
        
        <NavBar
          mode="dark"
          leftContent="Back"
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
        <Button disabled>default disabled</Button>
        <Button nativeClick={() => console.log('点击')} type="primary">primary</Button>
        <Button type="ghost" size='small'>warning</Button>
        <Button loading>loading button</Button>
        <Drawer open sidebarStyle={{ border: '1px solid #ddd', height: '200px', width: '100px', backgroundColor: 'red'}}>
        
        </Drawer>
      </div>
    );
  }
}
