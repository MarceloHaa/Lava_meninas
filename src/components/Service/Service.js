import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Service.css';

import servicoLavagemSimples from '../../img/lavagem-simples.png';
import servicoLavagemMotor from '../../img/lavagem-motor.png';
import servicoLavagemAssoalho from '../../img/lavagem-assoalho.png';
import servicoEnceramento from '../../img/enceramento.png';
import servicoTratamentoPintura from '../../img/tratamento-pintura.png';
import servicoPolimento from '../../img/polimento.png';
import servicoHigienizacao from '../../img/higienizacao.png';
import servicoInsufilm from '../../img/insufilm.png';

const ServicoCard = ({ imagem, titulo }) => {
    return (
        <div
            className="servico-card"
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-offset="200"
        >
            <img src={imagem} alt={titulo} className="servico-imagem" />
            <h3 className="servico-titulo">{titulo}</h3>
        </div>
    );
};

function Service() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    const servicos = [
        {
            titulo: 'Lavagem Simples e Especial',
            imagem: servicoLavagemSimples,
        },
        {
            titulo: 'Lavagem de Motor',
            imagem: servicoLavagemMotor,
        },
        {
            titulo: 'Lavagem de Assoalho',
            imagem: servicoLavagemAssoalho,
        },
        {
            titulo: 'Enceramento com Jet Cera ou Cera em Pasta',
            imagem: servicoEnceramento,
        },
        {
            titulo: 'Tratamento Técnico de Pintura',
            imagem: servicoTratamentoPintura,
        },
        {
            titulo: 'Polimento, Cristalização, Vitrificação',
            imagem: servicoPolimento,
        },
        {
            titulo: 'Higienização Completa',
            imagem: servicoHigienizacao,
        },
        {
            titulo: 'Insufilm Veicular',
            imagem: servicoInsufilm,
        },
    ];

    return (
        <section className="servicos-section">
            <h2 className="secao-titulo" data-aos="fade-up">
                Nossos Serviços
            </h2>
            <div className="servicos-grid">
                {servicos.map((servico, index) => (
                    <ServicoCard
                        key={index}
                        titulo={servico.titulo}
                        imagem={servico.imagem}
                    />
                ))}
            </div>
        </section>
    );
}

export default Service;
