import { from, interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators';

const numbers = [1,2,3,4,5];

const totalReducer = (acummulator, currentValue) => {
    console.log(acummulator, currentValue);
    return acummulator + currentValue
}

interval(1000).pipe(
    take(5),
    reduce(totalReducer, 0)
).subscribe({
    next: console.log,
    complete: () => console.log("Complete!!")
});
