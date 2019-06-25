import classnames from "classnames";
import { Component, Prop } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import TouchFeedback from "../TouchFeedback";
import Flex from "../Flex";
import { DataItem, GridPropsType } from "./PropsType";
import "./style.less";

export interface GridProps extends GridPropsType {
  prefixCls?: string;
  className?: string;
  square?: boolean;
  activeClassName?: string;
  activeStyle?: boolean | string | object;
  itemStyle?: boolean | string | object;
}

@Component
export default class Grid extends tsx.Component<GridProps, any> {
  @Prop({ default: () => [] }) public dataSource?: Array<DataItem | undefined>;
  @Prop({ default: true }) public hasLine?: boolean;
  @Prop({ default: false }) public isCarousel?: boolean;
  @Prop({ default: 4 }) public columnNum?: number;
  @Prop({ default: 2 }) public carouselMaxRow?: number;
  @Prop({ default: "vt-grid" }) public prefixCls?: string;
  @Prop({ default: true }) public square?: boolean;
  @Prop({ default: () => {} }) public itemStyle?: object;

  data() {
    return {
      initialSlideWidth: 0
    };
  }

  mounted() {
    this.$data.initialSlideWidth = document.documentElement.clientWidth;
  }

  renderItem(
    dataItem: DataItem | any,
    index: number,
    columnNum: number,
    renderItem: any
  ) {
    const { prefixCls } = this.$props;
    let itemEl: any = null;
    if (renderItem) {
      itemEl = renderItem(dataItem, index);
    } else {
      if (dataItem) {
        const { icon, text } = dataItem;
        itemEl = (
          <div
            class={`${prefixCls}-item-inner-content column-num-${columnNum}`}
          >
            {typeof icon !== 'string' ? icon : <img class={`${prefixCls}-icon`} src={icon} />}
            <div class={`${prefixCls}-text`}>{text}</div>
          </div>
        );
      }
    }
    return <div class={`${prefixCls}-item-content`}>{itemEl}</div>;
  }

  getRows(rowCount: number, dataLength: number) {
    let {
      columnNum,
      dataSource,
      renderItem,
      prefixCls,
      nativeClick,
      activeStyle,
      activeClassName,
      itemStyle
    } = this.$props;
    let rowsArr: any[] = [];

    columnNum = columnNum!;

    const rowWidth = `${100 / columnNum}%`;
    const colStyle = {
      width: rowWidth,
      ...itemStyle
    };

    for (let i = 0; i < rowCount; i++) {
      let rowArr: any[] = [];
      for (let j = 0; j < columnNum; j++) {
        const dataIndex = i * columnNum + j;
        let itemEl;
        if (dataIndex < dataLength) {
          const el = dataSource && dataSource[dataIndex];
          itemEl = (
            <TouchFeedback
              key={`griditem-${dataIndex}`}
              activeClassName={
                activeClassName ? activeClassName : `${prefixCls}-item-active`
              }
              activeStyle={activeStyle}
            >
              <Flex.Item
                className={`${prefixCls}-item`}
                nativeClick={() => nativeClick && nativeClick(el, dataIndex)}
                style={colStyle}
              >
                {this.renderItem(el, dataIndex, columnNum, renderItem)}
              </Flex.Item>
            </TouchFeedback>
          );
        } else {
          itemEl = (
            <Flex.Item
              key={`griditem-${dataIndex}`}
              className={`${prefixCls}-item ${prefixCls}-null-item`}
              style={colStyle}
            />
          );
        }
        rowArr.push(itemEl);
      }
      rowsArr.push(
        <Flex justify="center" align="stretch" key={`gridline-${i}`}>
          {rowArr}
        </Flex>
      );
    }
    console.log(rowsArr);
    return rowsArr;
  }

  render() {
    const {
      prefixCls,
      className,
      dataSource,
      hasLine,
      isCarousel,
      square,
      ...restProps
    } = this.$props;
    let { columnNum } = restProps;

    columnNum = columnNum!;

    const dataLength = (dataSource && dataSource.length) || 0;

    let rowCount = Math.ceil(dataLength / columnNum);

    let rowsArr;
    let renderEl;
    rowsArr = this.getRows(rowCount, dataLength);
    renderEl = rowsArr;

    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-square`]: square,
      [`${prefixCls}-line`]: hasLine,
      [`${prefixCls}-carousel`]: isCarousel
    });
    return <div class={cls}>{renderEl}</div>;
  }
}
