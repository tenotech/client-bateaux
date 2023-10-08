import React, { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import "dayjs/locale/fr";

const DateComponent = (props) => {
    const [date, setDate] = useState(dayjs());

    const handleSelectDate = (newDate) => {
      setDate(newDate);
      props.onSelectDate(newDate);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
            <DateCalendar locale="fr" value={date} onChange={(newDate) => handleSelectDate(newDate)} />
        </LocalizationProvider>
    );
};
export default DateComponent;
