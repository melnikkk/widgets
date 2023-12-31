import { FC, ChangeEvent, useCallback, useState } from 'react';
import { Wrapper, List } from './styled';
import { Input } from './components/Input';
import { Item } from './types';
import { ListItem } from './components/ListItem';

interface Props {
  minQuerySize?: number;
  debounceDuration?: number;

  items?: Array<Item>;

  placeholder?: string;

  onSelect?: (item: Item) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onQuery?: (result: unknown) => void;
}

export const Typeahead: FC<Props> = ({
  items = [],
  minQuerySize = 0,
  debounceDuration = 0,
  placeholder = '',
  onChange,
  onSelect,
}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const {
        currentTarget: { value },
      } = e;

      if (minQuerySize >= value.length) {
        return;
      }

      if (onChange) {
        onChange(e);
      }

      setInputValue(value);
    },
    [minQuerySize, debounceDuration, onChange],
  );

  const onListItemSelect = useCallback(
    (item: Item) => {
      if (onSelect) {
        onSelect(item);
      }
    },
    [onSelect],
  );

  return (
    <Wrapper>
      <Input value={inputValue} onChange={onInputChange} placeholder={placeholder} />
      <List>
        {items.length > 0
          ? items.map((item) => (
              <ListItem onClick={onListItemSelect} key={item.id} item={item} />
            ))
          : null}
      </List>
    </Wrapper>
  );
};
