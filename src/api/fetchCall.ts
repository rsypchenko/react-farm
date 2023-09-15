interface Props {
  url: string;
}

export const fetchCall = ({ url }: Props) => {
  return fetch(url);
};
