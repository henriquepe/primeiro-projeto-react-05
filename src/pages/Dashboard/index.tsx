import React, {useState} from 'react'

import { FiChevronRight } from 'react-icons/fi';

import {Title, Form, Repositories} from './style';

import api from '../../services/api';


import logoImg from '../../assets/github_logo.svg';

const Dashboard: React.FC = () => {
    const [repositories, setRepositories] = useState([]);



    return (
        <>
        <img src={logoImg} alt='Github Explorer' />
        <Title>Explore repositórios no Github</Title>

        <Form action=''>
            <input placeholder='Digite o nome do repositório' type="text"/>
            <button type='submit'>Pesquisar</button>
        </Form>

        <Repositories>
            <a href="teste">
                <div>
                    <img 
                    src="https://avatars3.githubusercontent.com/u/62850277?s=460&u=b155be1023d30a02348168792c4e3230e50175da&v=4" 
                    alt="Henrique Pires"
                    />
                </div>
                <div>
                    <strong>
                        henriquepe/balance-transactions-project
                    </strong>
                    <p>
                        Desafio nodeJS aplicando conceitos de repositories, services 
                        and models. Transações financeiras.
                    </p>
                </div>
                <FiChevronRight size={20}  />
            </a>

        </Repositories>
        </>
    )

}

export default Dashboard;