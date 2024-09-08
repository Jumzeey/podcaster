// components/PageHeading.tsx
import React from 'react';

interface PageHeadingProps {
    title: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title }) => {
    return (
        <h1 className="text-20 font-bold text-white-1 mb-5">
            {title}
        </h1>
    );
};

export default PageHeading;
