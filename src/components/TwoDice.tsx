/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDice, setLeftDice] = useState<number>(1);
    const [rightDice, setRightDice] = useState<number>(6);
    return (
        <>
            <div>
                <span data-testid="left-die">{leftDice}</span>
                <span data-testid="right-die">{rightDice}</span>
            </div>
            <div>
                <Button onClick={() => setLeftDice(d6())}>Roll Left</Button>
                <Button onClick={() => setRightDice(d6())}>Roll Right</Button>
            </div>
            <div>
                {leftDice && rightDice == 1
                    ? "Lose"
                    : leftDice === rightDice
                    ? "Win"
                    : null}
            </div>
        </>
    );
}
