/**
 * @fileOverview Y Axis
 */
import { BaseAxisProps, AxisInterval, ViewBox } from '../util/types';
import { PositionType } from './XAxis';
import { PolarViewBox } from '../component/Label';

export interface Props extends BaseAxisProps {
  /** The unique id of y-axis */
  yAxisId?: string | number;
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
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   */
  ticks?: (string | number)[];
  /** The width of axis, which need to be setted by user */
  width?: number;
  /** The height of axis which is usually calculated in Chart */
  height?: number;
  mirror?: boolean;
  /** The orientation of axis */
  orientation?: 'left' | 'right';
  padding?: {
    top?: number;
    bottom?: number;
  };
  minTickGap?: number;
  interval?: AxisInterval;
  reversed?: boolean;
}

function YAxis(props: Props): any {
  return null;
}

YAxis.displayName = 'YAxis';
YAxis.defaultProps = {
  allowDuplicatedCategory: true,
  allowDecimals: true,
  hide: false,
  orientation: 'left',
  width: 60,
  height: 0,
  mirror: false,
  yAxisId: 0,
  tickCount: 5,
  type: 'number',
  domain: [0, 'auto'],
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false,
};

export default YAxis;
