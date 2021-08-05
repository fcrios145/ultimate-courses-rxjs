// turn-arrays-iterators-and-promises-into-observables-using-from
import { of, from } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    error: val => console.log('error', val),
    complete: () => console.log('complete')
}

// const source$ = from('hello');

// source$.subscribe(observer);

const source$ = from(fetch(
    'https://api.github.com/users/octocat'
));

source$.subscribe(observer);
