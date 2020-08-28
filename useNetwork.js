import { useState, useEffect } from 'react';

function useNetwork() {
    const [online, setOnline] = useState(navigator.onLine);

    useEffect(() => {
        const load = () => {
            setOnline(navigator.onLine);
        }
        const onOnline = () => {
            setOnline(true);
        }
        const onOffline = () => {
            setOnline(false);
        }

        window.addEventListener("load", load);
        window.addEventListener("online", onOnline);
        window.addEventListener("offline", onOffline);

        return () => {
            window.removeEventListener("load", load);
            window.removeEventListener("online", onOnline);
            window.removeEventListener("offline", onOffline);
        }
    }, [])
    
    return [online]
}

export default useNetwork;