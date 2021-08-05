import { interval } from 'rxjs';
import { mapTo, scan, filter } from 'rxjs/operators';

const counter$ = interval(1000);
const elemCounter = document.getElementById('counter');
const elemComplete = document.getElementById('complete');

counter$.pipe(
    mapTo(-1),
    scan((accumulator, current) => {
        return accumulator + current;
    }, 10),
    filter(value => value >= 0)
).subscribe(value => {
    elemCounter.innerHTML = value
    if(!value) {
        elemComplete.innerHTML = 'Complete!'
    }
});

