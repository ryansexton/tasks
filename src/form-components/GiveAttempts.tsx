import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, updateAttempts] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts</h3>
            <Button
                onClick={() => updateAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                Use
            </Button>
            <Button
                onClick={() =>
                    updateAttempts(attempts + Number(requestAttempts))
                }
            >
                Gain
            </Button>
            <Form.Group>
                <Form.Label>Request:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestAttempts(event.target.value)
                    }
                />
            </Form.Group>
            Attempts: {attempts}
        </div>
    );
}
