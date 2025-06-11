import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // <--- ADICIONADO
import LazyImageComponent from "../shared/LazyImage";
import Modal from "react-modal";
import {
    CategoriesMenu,
    ModalImage,
    ProductIMG,
    ProductIMGContainer,
} from "./ProductList.styled";

const categories = ["Habitação", "Mobiliário", "Escritório", "Comércio"];
const categoryMap: Record<string, string> = {
    Habitacao: "Habitação",
    Mobiliario: "Mobiliário",
    Escritorio: "Escritório",
    Comercio: "Comércio",
};

Modal.setAppElement("#root");

const ProductList = () => {
    const location = useLocation(); // <--- ADICIONADO
    const categoryFromState = location.state?.category; // <--- ADICIONADO

    const [productsByCategory, setProductsByCategory] = useState<
        Record<string, any[]>
    >({});
    const [categorySelected, setCategorySelected] = useState(
        categoryFromState || "Habitação" // <--- ADICIONADO
    );
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        if (categoryFromState && categories.includes(categoryFromState)) {
            setCategorySelected(categoryFromState); // <--- GARANTE atualização se navegado
        }
    }, [categoryFromState]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryData = await Promise.all(
                    categories.map(async (category) => {
                        const jsonFileName =
                            Object.keys(categoryMap).find(
                                (key) => categoryMap[key] === category
                            ) || category;

                        const response = await fetch(
                            `/api/${jsonFileName}.json`
                        );
                        if (!response.ok)
                            throw new Error(`Erro ao carregar ${jsonFileName}`);

                        return { [category]: await response.json() };
                    })
                );

                setProductsByCategory(Object.assign({}, ...categoryData));
            } catch (error) {
                console.error("Erro no fetch:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <CategoriesMenu>
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => setCategorySelected(category)}
                            className={
                                categorySelected === category ? "active" : ""
                            }
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </CategoriesMenu>

            <ProductIMGContainer>
                <ProductIMG>
                    {productsByCategory[categorySelected]
                        ?.slice()
                        .sort((a, b) => {
                            const numA = parseInt(
                                a.imagePath.match(/\d+/)?.[0] || "0",
                                10
                            );
                            const numB = parseInt(
                                b.imagePath.match(/\d+/)?.[0] || "0",
                                10
                            );
                            return numA - numB;
                        })
                        .map((product, index) => (
                            <LazyImageComponent
                                key={`${categorySelected}-${product.id}`}
                                src={product.imagePath}
                                alt={product.imageName}
                                index={index}
                                onClick={() => {
                                    console.log(
                                        "Clicou na imagem:",
                                        product.imagePath
                                    );
                                    setSelectedImage(product.imagePath);
                                }}
                            />
                        ))}
                </ProductIMG>
            </ProductIMGContainer>

            <Modal
                isOpen={!!selectedImage}
                onRequestClose={() => setSelectedImage(null)}
                style={{
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        background: "white",
                        padding: "20px",
                        borderRadius: "10px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "80vw",
                        maxHeight: "80vh",
                        overflow: "hidden",
                    },
                }}
            >
                <button
                    onClick={() => setSelectedImage(null)}
                    style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "5px",
                    }}
                    aria-label="Fechar modal"
                >
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 6L18 18M18 6L6 18"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <ModalImage src={selectedImage || ""} alt="Imagem ampliada" />
            </Modal>
        </>
    );
};

export default ProductList;
