import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const ImagemLazy = styled.img`
    width: 100%;
    height: auto;
    opacity: 0.2; /* Agora começa visível */
    transition: opacity 1s ease-in-out;

    &.visivel {
        opacity: 1; /* Aparece suavemente */
    }
`;

const LazyImage = ({
    src,
    index,
    onClick,
}: {
    src: string;
    alt: string;
    index: number;
    onClick: () => void;
}) => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), index * 200); // Aplica um delay progressivo
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, [src]);

    return (
        <ImagemLazy
            ref={imgRef}
            src={isVisible ? src : ""}
            // alt={alt}
            className={isVisible ? "visivel" : ""}
            loading="lazy"
            onClick={onClick}
            style={{ cursor: "pointer" }}
        />
    );
};
export default LazyImage;
