import { Component } from "vue-property-decorator";
import * as tsx from 'vue-tsx-support';
import { Button, TouchFeedback } from "@/components";

@Component
export default class Test extends tsx.Component<any>{
  
  render() {
    return (
      <div>
        <TouchFeedback activeClassName="acitve" activeStyle={{ color: 'red'}} disabled={false}>
          <Button classNames='button'>
          
          </Button>
        </TouchFeedback>
      </div>
    );
  }
}
