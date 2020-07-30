import React, {useEffect, useState} from 'react'
import {useRouteMatch, Link} from 'react-router-dom';
import githubLogo from '../../assets/github_logo.svg';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import {Header, RepositoryInfo, IssuesSection} from './style';

import api from '../../services/api';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    description: string;
    full_name: string;
    forks: number;
    open_issues: number;
    stargazers_count: number;

    owner: {
        login: string;
        avatar_url: string;
    }
}

interface Issue {
    title: string;
    html_url: string;
    id: string;

    user: {
        login: string;
    }
}

const Repository: React.FC = () => {
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);
    const { params } = useRouteMatch<RepositoryParams>();
    // 
    useEffect(() => {

        
            api.get(`/repos/${params.repository}`).then(response => {
                console.log(response.data);
                setRepository(response.data);
            });

            api.get(`/repos/${params.repository}/issues`).then((response) => {
                console.log(response.data);
                setIssues(response.data);
            })
       
    }, [params.repository]) //eslint-disable-line
    

    return (
        <>
        <Header>
            <img src={githubLogo} alt="Github Explorer"/>
            <Link to='/'>
                <FiChevronLeft/>
                Voltar
            </Link>
        </Header>
        

        {repository && (<>
        <RepositoryInfo>
            <header>
                <img src={repository.owner.avatar_url} 
                alt={repository.full_name}
                />
                <div>
                    <strong>
                        {repository.full_name}
                    </strong>
                    <p>
                        {repository.description}
                    </p>
                </div>
            </header>
            <ul>
                <li>
                    <strong>
                        {repository.stargazers_count}
                    </strong>
                    <span>
                        Stars
                    </span>
                </li>
                <li>
                    <strong>
                        {repository.forks}
                    </strong>
                    <span>
                        Forks
                    </span>
                </li>
                <li>
                    <strong>
                        {repository.open_issues}
                    </strong>
                    <span>
                        Issues Abertas
                    </span>
                </li>
            </ul>
        </RepositoryInfo>
        </>)}
        
        <IssuesSection>
            {issues.map(issue => (
                // eslint-disable-next-line react/jsx-no-target-blank
                <a key={issue.id} target='_blank' href={issue.html_url}>
                <div>
                    <strong>
                        {issue.title}
                    </strong>
                    <p>
                        {issue.user.login}
                    </p>
                </div>
                <FiChevronRight size={16}/>
            </a>
            ))}
        </IssuesSection>
        </>
        


        
    )

}

export default Repository;