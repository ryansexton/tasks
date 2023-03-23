import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const date: string[] = ["🍀", "🎆", "🎃", "🕎", "🎄"];
    const name: string[] = ["🎄", "🎆", "🎃", "🕎", "🍀"];
    const [holiday, setHoliday] = useState<string>("🍀");

    function numerically(holiday: string): string {
        const newDate = [...date];
        const indexOfHoliday = newDate.findIndex(
            (holidays: string): boolean => holidays === holiday
        );
        if (indexOfHoliday + 1 <= 4) {
            return newDate[indexOfHoliday + 1];
        } else {
            return newDate[0];
        }
    }
    function alphabetically(holiday: string): string {
        const newName = [...name];
        const indexOfHoliday = newName.findIndex(
            (holidays: string): boolean => holidays === holiday
        );
        if (indexOfHoliday + 1 <= 4) {
            return newName[indexOfHoliday + 1];
        } else {
            return newName[0];
        }
    }
    return (
        <>
            <div>
                <Button onClick={() => setHoliday(alphabetically(holiday))}>
                    Advanced by Alphabet
                </Button>
                <Button onClick={() => setHoliday(numerically(holiday))}>
                    Advance by Year
                </Button>
            </div>
            <div>Holiday: {holiday}</div>
        </>
    );
}
