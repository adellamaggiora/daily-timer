import { Time } from "../interfaces/time";
import { TimerStatus } from "../interfaces/timer-status";

let intervalRef: NodeJS.Timer;
let isNowInRangeResult: boolean;

const timerStatusMap = new Map([
    [true, TimerStatus.ON],
    [false, TimerStatus.OFF]
]);

function isNowInRange(startTime: Time, endTime: Time): boolean {
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startTime.hh, startTime.mm);
    const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endTime.hh, endTime.mm);

    if (endDate < startDate) {
        // If the end time is earlier than the start time, it means the range spans across midnight.
        // In this case, we need to adjust the end time to the next day.
        endDate.setDate(endDate.getDate() + 1);
    }

    return now >= startDate && now <= endDate;
}

export function dailyTimer(startTime: Time, endTime: Time, timerStatusCallback: (status: TimerStatus | undefined) => void): void {
    const refreshTime = 1000;

    if (intervalRef) {
        clearInterval(intervalRef);
    }

    intervalRef = setInterval(() => {
        const result = isNowInRange(startTime, endTime);
        if (result !== isNowInRangeResult) {
            isNowInRangeResult = result;
            const timerStatus = timerStatusMap.get(isNowInRangeResult);
            timerStatusCallback(timerStatus);
        }
    }, refreshTime)

}

