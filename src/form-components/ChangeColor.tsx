import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "brown",
        "gray"
    ];
    const [color, setColor] = useState<string>(colors[0]);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                onChange={updateColor}
                value="red"
                checked={color === "red"}
            />
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: "red",
                    display: "inline-block"
                }}
            >
                red
            </div>
            <Form.Check
                inline
                type="radio"
                onChange={updateColor}
                value="orange"
                checked={color === "orange"}
            />
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: "orange",
                    display: "inline-block"
                }}
            >
                orange
            </div>
            <Form.Check
                inline
                type="radio"
                onChange={updateColor}
                value="yellow"
                checked={color === "yellow"}
            />
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: "yellow",
                    display: "inline-block"
                }}
            >
                yellow
            </div>
            <Form.Check
                inline
                type="radio"
                onChange={updateColor}
                value="green"
                checked={color === "green"}
            />
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: "green",
                    display: "inline-block"
                }}
            >
                green
            </div>
            <Form.Check
                inline
                type="radio"
                onChange={updateColor}
                value="blue"
                checked={color === "blue"}
            />
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: "blue",
                    display: "inline-block"
                }}
            >
                blue
            </div>
            <Form.Check
                inline
                type="radio"
                onChange={updateColor}
                value="purple"
                checked={color === "purple"}
            />
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: "purple",
                    display: "inline-block"
                }}
            >
                purple
            </div>
            <Form.Check
                inline
                type="radio"
                onChange={updateColor}
                id="colored-box"
                value="brown"
                checked={color === "brown"}
            />
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: "brown",
                    display: "inline-block"
                }}
            >
                brown
            </div>
            <Form.Check
                inline
                type="radio"
                onChange={updateColor}
                value="gray"
                checked={color === "gray"}
            />
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: "gray",
                    display: "inline-block"
                }}
            >
                gray
            </div>
            <div>
                You have chosen &nbsp;
                <div
                    data-testid="colored-box"
                    style={{
                        backgroundColor: color,
                        display: "inline-block"
                    }}
                >
                    {color}.
                </div>
            </div>
        </div>
    );
}
