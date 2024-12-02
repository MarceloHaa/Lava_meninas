import React from 'react';
import './About.css';
import lava from '../../img/logo_lava.jpg';

function About() {
    return (
        <section className="about-container">
            <div className="about-content">
                <div className="about-image-wrapper">
                    <img
                        className="about-image"
                        src={lava}
                        alt="Lava rápido"
                        loading="lazy"
                    />
                </div>

                <div className="about-text-container">
                    <h2 className="about-title">Quem Somos</h2>
                    <p className="about-description">
                        Nossa história começou em 2015 quando as proprietárias
                        sentiram a necessidade de um lava rápido que tivesse o
                        carinho, o cuidado e a atenção aos detalhes que só
                        mulheres podem dar. Ao longo desse tempo, nos tornamos
                        referência em lavagens automotivas, polimentos e
                        detalhamento automotivo.
                    </p>
                    <div className="about-highlights">
                        <div className="highlight-item">
                            <i className="icon-checkmark"></i>
                            <span>Serviços de Primeira Linha</span>
                        </div>
                        <div className="highlight-item">
                            <i className="icon-team"></i>
                            <span>Equipe Altamente Qualificada</span>
                        </div>
                        <div className="highlight-item">
                            <i className="icon-custom"></i>
                            <span>Atendimento Personalizado</span>
                        </div>
                    </div>
                    <p className="about-additional-info">
                        Somos uma empresa que oferece o cuidado ideal para
                        veículos e motos, com profissionais treinados para
                        promover um serviço excepcional. Atendemos também
                        empresas.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
