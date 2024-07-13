import { useState, useEffect } from "react";

function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
}

function DateBar() {
    const [date, setDate] = useState("");

    useEffect(() => {
        const currentDate: Date = new Date();
        const formattedDate: string = formatDate(currentDate);

        setDate(formattedDate);
    }, []);

    return (
        <div className="flex h-10 w-full justify-between text-gray">
            <p>Howdy, Partner! 🤠</p>
            <p>{date} 🕓</p>
        </div>
    );
}

export default DateBar;
