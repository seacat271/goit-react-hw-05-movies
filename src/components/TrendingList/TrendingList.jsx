import { TrendingMoviesLink } from './TrendingList.styled';

export const TrendingList = ({ data, location }) => {
  return (
 <ul>
    {data.map(({ title, id }) => (
        <TrendingMoviesLink
          key={id}
          to={`movies/${id}`}
          state={{ from: location }}
        >
          {title}
        </TrendingMoviesLink>
      
    ))};
  </ul>);
};
