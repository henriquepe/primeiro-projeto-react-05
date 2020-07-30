import React, {useState, FormEvent, useEffect} from 'react'

import { FiChevronRight } from 'react-icons/fi';
import {Link} from 'react-router-dom';

import {Title, Form, Repositories, Error} from './style';

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
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplorer: repositories');

        if(storagedRepositories){
            return JSON.parse(storagedRepositories);
        }
        else {
            return [];
        }
    });



    useEffect(() => {
        localStorage.setItem('@GithubExplorer: repositories', JSON.stringify(repositories))
    }, [repositories]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
       
        event.preventDefault();
        //Adição de um novo repositório
        //Consumir api do github
        //salvar novo repositório no estado de repositórios 
       
        if(!newRepo) {
            setInputError('Digite autor/nomedorepositório');
            return;
        }


        try {
            const response = await api.get<Repository>(`/repos/${newRepo}`);
            console.log(response);
        
            const repository = response.data;

            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        }
        catch(err){
            setInputError('Erro na busca pelo repositório')
        }

        
    }



    return (
        <>
        <img src={logoImg} alt='Github Explorer' />
        <Title>Explore repositórios no Github</Title>

        <Form hasError={!!inputError} onSubmit={handleAddRepository}>
            <input 
            value={newRepo} 
            onChange={ (e) => setNewRepo(e.target.value)}
            placeholder='Digite o nome do repositório' 
            type="text"/>
            <button type='submit'>Pesquisar</button>
        </Form>
        { inputError && <Error>{inputError}</Error> }
        

        <Repositories>
            {repositories.map(repository => (
                <Link to={`/repository/${repository.full_name}`} key={repository.full_name} href="teste">
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
                </Link>
            ))}

        </Repositories>
        </>
    )

}

export default Dashboard;