import React, { useEffect, useRef } from 'react';

export default function Visitor() {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const container = mapContainerRef.current;
        if (!container) return;

        container.innerHTML = '';

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'mapmyvisitors';
        script.src = '//mapmyvisitors.com/map.js?d=TwzCxKoh3Vr_O8VcwCUKwpUKNAKhdbRxzQoqT_LAwFY&cl=ffffff&w=a';
        script.async = true;
        container.appendChild(script);

        return () => {
            container.innerHTML = '';
        };
    }, []);

    return (
        <div
            ref={mapContainerRef}
            className="visitor-map-container"
            style={{
                width: '80%',
                margin: '0 auto',
                minHeight: '160px'
            }}
        >
        </div>
    );
}
