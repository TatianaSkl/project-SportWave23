import BasicModalWind from 'components/BasicModalWind/BasicModalWind';
import {
  StatData,
  StatName,
  StatItem,
  ProductStat,
  ProductTitle,
  Icon,
  Discription,
  BtnAdd,
  ProductCard,
  RecomendedContainer,
  NotRecomended,
  Recomended,
} from './ProductsItem.styled';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaPersonRunning } from 'react-icons/fa6';
import { theme } from 'styles/theme';
import { useState } from 'react';
import { ExercisesModalToDiary } from 'components';

export default function ProductsItem({
  id,
  groupBloodNotAllowed,
  blood,
  title,
  calories,
  category,
  weight,
}) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <ProductCard key={id}>
      <RecomendedContainer>
        {groupBloodNotAllowed && groupBloodNotAllowed[blood] ? (
          <Recomended>Recommended</Recomended>
        ) : (
          <NotRecomended>Not recommended</NotRecomended>
        )}
        <BtnAdd onClick={() => setModalActive(true)}>
          Add
          <AiOutlineArrowRight
            style={{
              fontSize: '14px',
              color: `${theme.colors.orange}`,
              fontWeight: 'bold',
              marginLeft: '8px',
            }}
          />
        </BtnAdd>
        <BasicModalWind active={modalActive} setActive={setModalActive}>
          <ExercisesModalToDiary title={title} calories={calories} id={id} />
        </BasicModalWind>
      </RecomendedContainer>
      <Discription>
        <Icon>
          <FaPersonRunning style={{ fontSize: '18px', color: 'white' }} />
        </Icon>
        <ProductTitle>{title}</ProductTitle>
      </Discription>
      <ProductStat>
        <StatItem>
          <StatName>Calories:</StatName>
          <StatData>{calories}</StatData>
        </StatItem>
        <StatItem>
          <StatName>Category:</StatName>
          <StatData>{category.charAt(0).toUpperCase() + category.slice(1)}</StatData>
        </StatItem>
        <StatItem>
          <StatName>Weight:</StatName>
          <StatData>{weight}</StatData>
        </StatItem>
      </ProductStat>
    </ProductCard>
  );
}
