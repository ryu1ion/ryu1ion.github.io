import React, { useEffect, useRef } from 'react';

export default function Visitor() {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const container = mapContainerRef.current;
        if (!container) return;

        container.innerHTML = '';

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'mmvst_globe';
        script.src = '//mapmyvisitors.com/globe.js?d=sw2oeZFKs6o__v5NLOHc6oV2EF9GqYw67HRzXyaKr8w';
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
