import nullThrows from '../../..';

function fn(): string | null {
  return Math.random() < 0.5 ? 'hello' : null;
}

var good1: string = nullThrows(fn());
var good2: string = nullThrows(fn(), 'my error message');

var bad1: string = fn();

var bad2: number = nullThrows(fn());
