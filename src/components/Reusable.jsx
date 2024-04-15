import { useState } from 'react';
import  {DynamicBuscadorItems}  from "../components/DynamicComponents";

export function SectionHome({ backgroundColor, linkUrl, imageUrl, title, textColor }) {
    return (
        <>
            <section className={`blur ${backgroundColor}`}>
                <a className="link-home" href={linkUrl}>
                    <img src={imageUrl} alt=""/>
                    <h1 className="txt-end f-l" style={{ color: textColor }}>{title}</h1>
                </a>
            </section>
        </>
    );
}

export function FooterLinks({ linkUrl, imageSrc, altText }) {
    return (
        <>
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                <img src={imageSrc} alt={altText}/>
            </a>
        </>
    );
}

export function BuscadorItems({ FigureClass, imageSrc, altText, onClick }) {


    return (
        <>
            <figure className={`scale ${FigureClass}`} onClick={onClick}>
                <img className='Grid-img' src="/src/assets/files/aceitegiro.png" alt={altText}/>
                <figcaption>{altText}</figcaption>
            </figure>
        </>
    );
}

export default function BuscadorInput({ items }) {
    const [searchTerm, setSearchTerm] = useState(''); // State to store the search term
    const [filterClass, setFilterClass] = useState(null); // State to store the filter class

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value); // Update the search term state
    };

    const handleButtonClick = (filter) => {
        setFilterClass(prevFilter => prevFilter === filter ? null : filter);
    };

    const filteredItems = items.filter(item => 
        (filterClass === null || item.tipo === filterClass) && 
        item.residuo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="PuntoGiro-Chequea">
                <input
                    type="text"
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <section className="button-section">
                    <button className="btn btn-verde" onClick={() => handleButtonClick("REGUs")}>Secos</button>
                    <button className="btn btn-amarillo" onClick={() => handleButtonClick("Plástico")}>Plasticos</button>
                    <button className="btn btn-celeste" onClick={() => handleButtonClick("Metal")}>Vidrio / Metal</button>
                    <button className="btn btn-gris" onClick={() => handleButtonClick("Cartón")}>Papel / Carton</button>
                </section>
                <div className="photo-grid">
                    {filteredItems.length > 0 ? (
                        <DynamicBuscadorItems items={filteredItems} />
                    ) : (
                        <div class="Buscador-card">
                            <div class="card">
                                <h2>Material No Encontrado </h2>
                                <p>Evita usar numeros, solo letras.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export function Modal({ isOpen, onClose, children, modalClass }) {
    return (
        <>
            {isOpen &&
                <div className="modal">
                    <div className={`modal-content ${modalClass}`}>
                        {children}
                        <div className="modal-div-close">
                            <a 
                                href="https://solicitudes-giro.cc.gob.ar/"
                            >
                                reciclar</a>
                            <span className="cerrar-modal" onClick={onClose}>cerrar</span>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
