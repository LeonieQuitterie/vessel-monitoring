import { useState, useEffect } from 'react'

// Tạo đồng hồ UTC realtime 

export const useUTCClock = () => {
    // Tạo state time bằng giờ hiện tại 
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    return {
        time,
        timeString: time.toUTCString().slice(17, 25),       // "14:32:45"
        dateString: time.toUTCString().slice(5, 16),        // "27 May 2024"
        full: time.toISOString(),
    }
}