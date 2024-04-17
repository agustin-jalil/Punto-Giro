import {SectionHome, FooterLinks, BuscadorItems, Modal} from "./Reusable";
import React, { useState, useEffect } from 'react';

export function DynamicSectionHome({ datos }) {
    return (
        <>
            {datos.map((item, index) => (
                <SectionHome
                    key={index}
                    backgroundColor={item.backgroundColor}
                    linkUrl={item.linkUrl}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    textColor={item.textColor}
                />
            ))}
        </>
    );
}

export default function DynamicFooter( { links } ) {
    return (
        <>
            {links.map((item, index) => (
                <>
                    <FooterLinks
                        key={index} 
                        linkUrl={item.linkUrl} 
                        imageSrc={item.imageSrc}
                        altText={item.altText}
                    />
                </>
            ))}
        </>
    );
}

export function DynamicBuscadorItems({ items }) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (item) => {
        setIsModalOpen(true);
        setSelectedItem(item);
        document.body.classList.add('modal-open'); // Add the class to disable body scroll
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
        document.body.classList.remove('modal-open'); // Remove the class to enable body scroll
    };

    return (
        <>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <BuscadorItems
                        FigureClass={item.tipo}
                        imageSrc={item.imageSrc}
                        altText={item.residuo}
                        onClick={() => handleOpenModal(item)}
                    />
                </React.Fragment>
            ))}
            <Modal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                modalClass={selectedItem ? selectedItem.tipo : 'default'}
            >
                {selectedItem && (
                    <>
                        <h2>{selectedItem.residuo}</h2>
                        <i>{selectedItem.categoria}</i>
                        <img className="Modal-img" src="/src/assets/files/aceitegiro.png" alt={selectedItem.residuo} />
                        <p style={{maxWidth: '75%'}}><u>tipo:</u> {selectedItem.detalle}</p>
                        <p style={{maxWidth: '75%'}}><u>Manejo:</u> {selectedItem.accion}</p>
                        <p style={{maxWidth: '75%'}}><u>Destino:</u> {selectedItem.destino}</p>
                    </>
                )}
            </Modal>
        </>
    );
}