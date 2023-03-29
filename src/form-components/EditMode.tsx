import React, { useState } from "react";
import { Form } from "react-bootstrap";
/*
interface prop {
    edit: boolean;
    setEdit: (edit: boolean) => void;
    student: string;
    setStudent: (student: string) => void;
    isStudent: boolean;
    setIsStudent: (isStudent: boolean) => void;
}
*/
export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [student, setStudent] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function editMode() {
        setEdit(!edit);
    }
    return (
        <div>
            <Form.Check type="switch" label="Edit" onChange={editMode} />
            <div>
                <div>
                    <Form.Group>
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={student}
                            disabled={edit}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setStudent(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        label="Student"
                        checked={isStudent}
                        disabled={edit}
                        onChange={() => setIsStudent(!isStudent)}
                    />
                </div>
                {student} is {isStudent ? "a student" : "not a student"}.
            </div>
        </div>
    );
}
