import React from 'react';

type CloudResizerProps = {
  children: React.ReactNode;
  username: string;
  width?: string;
  height?: string;
  fit?: string;
  background?: string;
  format?: string;
};

export function getResizerUrl(imgSrc: string, params: CloudResizerProps): string {
  let url = `https://i.rsiz.it/${params.username}/${imgSrc}`;
  const options = ['width', 'height', 'fit', 'background', 'format'];
  const queryString = options.filter(op => !!params[op])
    .map(op => `${op}=${params[op]}`)
    .join('&');

  if (queryString.length) {
    url += `?${queryString}`;
  }

  return url;
}

export const CloudResizer: React.FC = (props: CloudResizerProps) => { 
  var imgElement = React.Children.only(props.children) as any;
  return React.cloneElement(imgElement, {
    src: getResizerUrl(imgElement.props.src, props)
  });
};

