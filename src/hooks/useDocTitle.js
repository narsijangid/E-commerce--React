import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Dazzle -Store `;
        } else {
            document.title = 'Dazzle -Store | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
