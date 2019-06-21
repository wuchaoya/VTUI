import { Component } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import { Button, TouchFeedback, Icon } from "@/components";

@Component
export default class Test extends tsx.Component<any> {
  render() {
    return (
      <div>
        <TouchFeedback
          activeClassName="acitve"
          activeStyle={{ color: "red" }}
          disabled={false}
        >
          <Button classNames="button">按钮</Button>
        </TouchFeedback>
        <Icon type="check" />
      </div>
    );
  }
}
