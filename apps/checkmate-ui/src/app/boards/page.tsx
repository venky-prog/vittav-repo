'use client';

import { Button, Card, TextInputController } from "@vittav/core-ui";
import { useForm } from "react-hook-form";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const validationSchema = zod.object({
    example: zod.string().min(5, 'Minimum 5 characters required'),
})

function BoardsPage() {
    const {control, handleSubmit} = useForm({
        resolver: zodResolver(validationSchema),
    });
    return <div className="auto">
        <Card className="w-[600px] p-4">
            <form onSubmit={handleSubmit((values) => {
                console.log(values);
            })}>
                <TextInputController
                    label="Example Input"
                    name="example"
                    control={control}
                    info="Hello world"
                />
                <Button>Submit</Button>
            </form>
        </Card>
    </div>;
}

export default BoardsPage;