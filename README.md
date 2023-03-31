# daily-timer

The `daily-timer` package includes the `dailyTimer` function and the two
custom types `Time` and `TimerStatus`.

## dailyTimer Function

The `dailyTimer` function is a JavaScript function that takes in three
parameters, namely `startTime`, `endTime`, and `timerStatusCallback`.


When the current time reachs `startTime` the callback is invoked with `TimerStatus.ON` value, When the current time reachs `endTime` the callback is invoked with `TimerStatus.OFF` value.



### Function Signature


`dailyTimer(startTime, endTime, callback: (timerStatus) => void) => void`

* `startTime` <span style="color: forestgreen"> <*Time*> </span>
* `endTime` <span style="color: forestgreen"> <*Time*> </span>
* `callback` <span style="color: forestgreen"> <*Function*> </span>
* `timerStatus` <span style="color: forestgreen"> <*TimerStatus*> </span>

```typescript
import dailyTimer from "daily-timer";

dailyTimer({ hh: 12, mm: 0 }, { hh: 12, mm: 10 }, console.log);

/* 
    it will log 'ON' at 12:00 (startTime) 
    and 'OFF' at 12:10 (endTime) every day.
*/
```
### Types

```typescript
interface Time {
  hh: number;
  mm: number;
}

enum TimerStatus {
  ON = "ON",
  OFF = "OFF",
}
```
