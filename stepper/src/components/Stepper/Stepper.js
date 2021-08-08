import {Component} from 'react';

import './Stepper.css';
import {ReactComponent as ArrowNormal} from 'assets/arrow-normal.svg';
import {ReactComponent as ArrowDisabled} from 'assets/arrow-disabled.svg';

class Stepper extends Component {
  static MODE = {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical'
  }

  static defaultProps = {
    mode: this.MODE.HORIZONTAL,
    min: 0,
    max: 100,
    current: 0,
    step: 1
  }

  state = {
    mode: this.props.mode,
    current: this.props.current,
    min: this.props.min,
    max: this.props.max,
    step: this.props.step,
  };

  handleClick(buttonType) {
    const {current, step} = this.state;

    this.setState({
      current: current + step * (buttonType === 'increase' ? 1 : -1)
    });
  }

  render() {
    const {mode, current, min, max} = this.state;
    const isMin = current <= min;
    const isMax = current >= max;

    return ( 
      <div className={`stepper ${mode}`}>
        <button
          className={`button ${mode} decrease`}
          disabled={isMin}
          onClick={this.handleClick.bind(this, 'decrease')}
        >
          {isMin ? <ArrowDisabled /> : <ArrowNormal />} 
        </button>
        <span className='current'>{current}</span>
        <button
          className={`button ${mode} increase`}
          disabled={isMax}
          onClick={this.handleClick.bind(this, 'increase')}
        >
          {isMax ? <ArrowDisabled /> : <ArrowNormal />}
        </button>
      </div>
    );
  }
}
 
export default Stepper;