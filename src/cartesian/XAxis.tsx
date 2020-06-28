/**
 * @fileOverview X Axis
 */
import { BaseAxisProps, AxisInterval, ViewBox } from '../util/types';
import { PolarViewBox } from '../component/Label';

export type PositionType =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'inside'
  | 'outside'
  | 'insideLeft'
  | 'insideRight'
  | 'insideTop'
  | 'insideBottom'
  | 'insideTopLeft'
  | 'insideBottomLeft'
  | 'insideTopRight'
  | 'insideBottomRight'
  | 'insideStart'
  | 'insideEnd'
  | 'end'
  | 'center'
  | 'centerTop'
  | 'centerBottom';
/** Define of XAxis props */
export interface Props extends BaseAxisProps {
  /** The unique id of x-axis */
  xAxisId?: string | number;
  // The label input
  label?: {
    angle?: number;
    viewBox?: ViewBox | PolarViewBox;
    value?: number | string;
    offset?: number;
    position?: PositionType;
    children?: React.ReactNode[] | React.ReactNode;
    className?: string;
    content?: (props: any) => React.ReactElement;
    dy?: number;
    dx?: number;
  };
  /** The width of axis which is usually calculated internally */
  width?: number;
  /** The height of axis, which need to be setted by user */
  height?: number;
  mirror?: boolean;
  // The orientation of axis
  orientation?: 'top' | 'bottom';
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   */
  ticks?: (string | number)[];
  padding?: { left?: number; right?: number };
  tick?: any;
  minTickGap?: number;
  interval?: AxisInterval;
  reversed?: boolean;
}
function XAxis(props: Props): any {
  return null;
}

XAxis.displayName = 'XAxis';
XAxis.defaultProps = {
  allowDecimals: true,
  hide: false,
  orientation: 'bottom',
  width: 0,
  height: 30,
  mirror: false,
  xAxisId: 0,
  tickCount: 5,
  type: 'category',
  domain: [0, 'auto'],
  padding: { left: 0, right: 0 },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false,
  allowDuplicatedCategory: true,
};

export default XAxis;
