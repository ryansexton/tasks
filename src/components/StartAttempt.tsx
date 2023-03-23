import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [Progress, setProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <Button
                onClick={() => startQuiz()}
                disabled={Progress || attempts == 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setProgress(false)} disabled={!Progress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={Progress}
            >
                Mulligan
            </Button>
            {attempts}
        </div>
    );
}
