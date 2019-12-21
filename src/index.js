import _ from 'lodash';
import './style.css';
import './hello.scss';
// named import 는 {} 안에 동일한 이름으로 가져와야 한다.
import {area, circumference} from "./js/circle";
// default import: {} 없고 이름을 바꿀 수 있다.
import lyr from './js/cube';


const component = () => {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack !!!'], ' ');
  console.log('console test');

  return element;
}

const result1 = area(5);
const result2 = circumference(5);
const result3 = lyr.volume(5);

console.log(result1, result2);
console.log(result3);

document.body.appendChild(component());