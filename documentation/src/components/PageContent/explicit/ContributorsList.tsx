import type { FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';

type Contributor = {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
};

type Props = {
    currentUrl: string;
    showAtUrl: string;
};

const ContributorsList: FunctionalComponent<Props> = ({ currentUrl, showAtUrl }) => {
    const [contributors, setContributors] = useState<Contributor[]>([]);

    useEffect(() => {
        if (currentUrl !== showAtUrl) return;

        fetch('https://api.github.com/repos/shivamdevs/OasisMenu/contributors')
            .then((response) => response.json())
            .then((data) => setContributors(data))
            .catch((error) => console.error(`Failed to fetch contributors: ${error}`));
    }, [currentUrl]);

    if (currentUrl !== showAtUrl) return null;

    return (
        <>
            {contributors.length !== 0 && <ul>
                {contributors.map((contributor) => (
                    <li key={contributor.id}>
                        <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
                            <img src={contributor.avatar_url} alt={contributor.login} />
                        </a>
                    </li>
                ))}
            </ul>}
            {contributors.length === 0 && <p>We welcome contributions from the community to help us improve and enhance OasisMenu. Join us on GitHub to become a contributor!</p>}
        </>
    );
};

export default ContributorsList;
