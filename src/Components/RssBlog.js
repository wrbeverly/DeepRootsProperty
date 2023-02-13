import React, { useEffect, useState} from "react";

const RssBlog = url => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;
        
        document.body.appendChild(script);

        return () => {
            document.body.removeChild('script');
        }
    }, [url]);
};
export default RssBlog;