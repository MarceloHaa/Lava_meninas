import React from 'react';
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaMapMarkerAlt,
} from 'react-icons/fa';
import './Contact.css';

function Contact() {
    const unidades = [
        {
            nome: 'Unidade 1',
            endereco:
                'R. Joaquim Manuel de Macedo, 223 - Jardim Santa Genebra, Campinas - SP, 13080-470',
            telefone: '(19) 97410-7607',
            whatsapp: 'https://wa.me/5519974107607',
            googleMaps:
                'https://www.google.com/maps?q=R.+Joaquim+Manuel+de+Macedo,+223+-+Jardim+Santa+Genebra,+Campinas+-+SP,+13080-470',
        },
        {
            nome: 'Unidade 2',
            endereco:
                'Rua Mario Reis, 103 - Mansões Santo Antônio, Campinas - SP, 13031-520',
            telefone: '(19) 97804-2008',
            whatsapp: 'https://wa.me/5519978042008',
            googleMaps:
                'https://www.google.com/maps?q=Rua+Mario+Reis,+103+-+Mans%C3%B5es+Santo+Ant%C3%B4nio,+Campinas+-+SP,+13031-520',
        },
    ];

    const socialLinks = {
        instagram: 'https://www.instagram.com/lava.rapidodasmeninas',
        facebook: 'https://www.facebook.com/banhodegatolimpezaautomotiva',
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Nossas Unidades</h2>
                <div className="maps">
                    {unidades.map((unidade, index) => (
                        <div key={index} className="card">
                            <iframe
                                title="unidades"
                                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117649.98204943206!2d-47.18532922667467!3d-22.855691099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c67c2d375f6f%3A0x8bd2415c91a89fe2!2s${encodeURIComponent(
                                    unidade.endereco
                                )}!5e0!3m2!1sen!2sbr!4v1732827948965!5m2!1sen!2sbr`}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <address className="endereco">
                                {unidade.nome} - {unidade.endereco}
                            </address>
                            <a
                                href={unidade.googleMaps}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-link"
                            >
                                Abrir no Google Maps
                            </a>
                        </div>
                    ))}
                </div>

                <div className="units-container">
                    {unidades.map((unidade, index) => (
                        <div key={index} className="unit">
                            <h3>{unidade.nome}</h3>
                            <div className="unit-details">
                                <div className="contact-info">
                                    <a
                                        href={unidade.googleMaps}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="map-link"
                                    >
                                        <FaMapMarkerAlt className="icon" />
                                    </a>
                                    <p>{unidade.endereco}</p>
                                </div>
                                <div className="contact-info">
                                    <a
                                        href={unidade.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="whatsapp-icon"
                                    >
                                        <FaWhatsapp className="icon" />
                                    </a>
                                    <p>{unidade.telefone}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="social-links">
                    <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href={socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <FaFacebook />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
