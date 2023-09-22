import Category from './ExercisesCategories.styled';
import { useDispatch } from 'react-redux';

const sections = ['Body parts', 'Muscles', 'Equipment'];

const ExercisesCategories = () => {
  const dispatch = useDispatch();

  return (
    <>
      <ul style={{ display: 'flex' }}>
        {sections.map((section, index) => (
          <li key={index} style={{ marginRight: 28 }}>
            <Category
              // to={page.toLowerCase()}
              onClick={() => dispatch()}
            >
              {section}
            </Category>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExercisesCategories;
