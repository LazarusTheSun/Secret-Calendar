import React from 'react';

import { useSiteMetadata } from '../../hooks/useSiteMetaData';
import colors from '../../constants/colors.json';

export const SEO = () => {
  const { title, description, image, keywords } = useSiteMetadata();

  return (
    <>
        <title>{title}</title>
        <meta name="image" content={image} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="theme-color" content={colors.majorBlack} />
    </>
  )
}