# daily-timer

The `daily-timer` package includes the `dailyTimer` function and the two
custom types `Time` and `TimerStatus`.
 
---

## dailyTimer function

The `dailyTimer` function is a JavaScript function that takes in three
parameters, namely `startTime`, `endTime`, and `timerStatusCallback`.

`timerStatus` is internally updated every second into the package and whenever its value changes the callback is triggered. So the callback result  will be `TimerStatus.ON` when the current time is between startTime and endTime, otherwise will be `TimerStatus.OFF`.

> Note that current time is intended to be NodeJs or Browser time


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
---
## Types

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
