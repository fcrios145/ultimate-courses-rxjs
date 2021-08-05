import { fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

const keyUp$ = fromEvent(document, 'keyup');

const keyCode$ = keyUp$.pipe(
    map(event => event.code)
);

const keyCodeWithPlug$ = keyUp$.pipe(
    pluck('code')
);

const keyCodeMapTo$ = keyUp$.pipe(
    mapTo('Key pressed!!')
);

//keyCode$.subscribe(console.log);
//keyCodeWithPlug$.subscribe(console.log);
keyCodeMapTo$.subscribe(console.log);
