import React, {useState, FormEvent} from 'react'

import { FiChevronRight } from 'react-icons/fi';

import {Title, Form, Repositories} from './style';

import api from '../../services/api';


import logoImg from '../../assets/github_logo.svg';

interface Repository {
    description: string;
    full_name: string;

    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');

    const [repositories, setRepositories] = useState<Repository[]>([]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //Adição de um novo repositório
        //Consumir api do github
        //salvar novo repositório no estado de repositórios 

        const response = await api.get<Repository>(`/repos/${newRepo}`);
        console.log(response);
        
        const repository = response.data;

        //const {description, full_name, } = repository;

        // const { avatar_url } = repository.owner;

        setRepositories([...repositories, repository]);
        setNewRepo('');
    }



    return (
        <>
        <img src={logoImg} alt='Github Explorer' />
        <Title>Explore repositórios no Github</Title>

        <Form onSubmit={handleAddRepository}>
            <input 
            value={newRepo} 
            onChange={ (e) => setNewRepo(e.target.value)}
            placeholder='Digite o nome do repositório' 
            type="text"/>
            <button type='submit'>Pesquisar</button>
        </Form>

        <Repositories>
            {repositories.map(repository => (
                <a key={repository.full_name} href="teste">
                <div>
                    <img 
                    src={repository.owner.avatar_url} 
                    alt={repository.owner.login}
                    />
                </div>
                <div>
                    <strong>
                        {repository.full_name}
                    </strong>
                    <p>
                        {repository.description}
                    </p>
                </div>
                <FiChevronRight size={20}  />
            </a>
            ))}

        </Repositories>
        </>
    )

}

export default Dashboard;