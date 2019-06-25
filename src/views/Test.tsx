import { Component } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import { Grid, Empty } from "@/components";

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
  text: `name${i}`
}));

@Component
export default class Test extends tsx.Component<any> {
  render() {
    return (
      <div style="width: 100%">
        <Grid dataSource={data} activeStyle={false} />
        <Empty />
      </div>
    );
  }
}
