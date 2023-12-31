import { FC, useCallback } from 'react';
import { Headline, ItemImage, ListItemWrapper, SecondLine } from './styled';
import { Item } from '../../types';

interface Props {
  item: Item;
  onClick: (item: Item) => void;
}

export const ListItem: FC<Props> = ({ item, onClick }) => {
  const onListItemClick = useCallback(() => {
    onClick(item);
  }, [item, onClick]);

  return (
    <ListItemWrapper onClick={onListItemClick}>
      {item.imageUrl ? <ItemImage src={item.imageUrl} /> : null}
      <div>
        <Headline>{item.headline}</Headline>
        {item.secondLine ? <SecondLine>{item.secondLine}</SecondLine> : null}
      </div>
    </ListItemWrapper>
  );
};
