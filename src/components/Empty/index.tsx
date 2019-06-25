import {VNode} from 'vue';
import classNames from 'classnames';
import * as defaultEmptyImg from './empty.svg';
import * as simpleEmptyImg from './simple.svg';

import './style.less';

export interface EmptyProps {
  prefixCls?: string;
  className?: string;
  style?: string | object ;
  imageStyle?: string | object ;
  image?: VNode | string;
  description?: VNode | string;
}

const OriginEmpty = (data) => {
  const props: EmptyProps = data.props;
  const children: VNode[] = data.children
  const {
    className,
    prefixCls = 'vt-empty',
    image = defaultEmptyImg,
    description = '暂无数据',
    imageStyle,
    ...restProps
  } = props;
  
  let imageNode: any = null;
  
  if (typeof image === 'string') {
    imageNode = <img src={image} />;
  } else {
    imageNode = image;
  }
  
  return (
    <div
      class={classNames(
        prefixCls,
        {
          [`${prefixCls}-normal`]: image === simpleEmptyImg,
        },
        className,
      )}
      {...restProps}
    >
      <div class={`${prefixCls}-image`} style={imageStyle}>
        {imageNode}
      </div>
      <p class={`${prefixCls}-description`}>{description}</p>
      {children}
    </div>
  );
}


type EmptyType = typeof OriginEmpty & {
  PRESENTED_IMAGE_DEFAULT: string;
  PRESENTED_IMAGE_SIMPLE: string;
};

const Empty: EmptyType = OriginEmpty as EmptyType;
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;

export default Empty;