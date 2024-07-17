import { interval } from "rxjs";

const ob$ = interval(1000)

ob$
    .subscribe((nb) => {
        console.log(nb)
    })

