import { Component } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import { Input } from "@/components";

@Component
export default class Test extends tsx.Component<any> {
  render() {
    return (
      <div style="width: 100%">
        <Input
          type="password"
          icon="user"
          error={false}
          placeholder="请输入您的账号和密码"
        />
      </div>
    );
  }
}
