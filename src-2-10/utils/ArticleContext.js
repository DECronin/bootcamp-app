import React from "react";

const ArticleContext = React.createContext({
    title: '',
    description: '',
    url: '',
    error: '',
    onClick: () => undefined
});

export default ArticleContext;